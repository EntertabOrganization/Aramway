import { backendUrl } from "@/lib/backend";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** Sanitized HTML authored with the Quill editor in AramwayDashboard. */
  content: string;
  date: string;
  category: string;
  tags: string[];
  type: "blog" | "news";
  image?: string;
};

type BackendBlogType = "BLOG" | "NEWS";

type BackendBlog = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  type: BackendBlogType;
  tags: string[];
  category: { name: string } | null;
  publishedAt: string | null;
  createdAt: string;
};

const REVALIDATE_SECONDS = 5 * 60;

// Matches the file id out of any Google Drive "share" link shape
// (/file/d/<id>/view, open?id=<id>, uc?id=<id>, thumbnail?id=<id>, ...).
// Those links serve an HTML viewer page, not raw image bytes, so an <img>
// pointed at one renders nothing — rewrite to Google's direct-image host
// instead. Requires the file to be shared as "Anyone with the link".
const DRIVE_ID_PATTERNS = [/\/file\/d\/([\w-]+)/, /[?&]id=([\w-]+)/];

function resolveImageUrl(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (!url.includes("drive.google.com")) return url;

  for (const pattern of DRIVE_ID_PATTERNS) {
    const match = url.match(pattern);
    if (match) return `https://lh3.googleusercontent.com/d/${match[1]}=w1600`;
  }
  return url;
}

function toPost(blog: BackendBlog): Post {
  return {
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    content: blog.content,
    date: (blog.publishedAt ?? blog.createdAt).slice(0, 10),
    category: blog.category?.name ?? "",
    tags: blog.tags,
    type: blog.type === "BLOG" ? "blog" : "news",
    image: resolveImageUrl(blog.coverImage),
  };
}

async function fetchPublicBlogs(type?: BackendBlogType): Promise<Post[]> {
  const qs = new URLSearchParams({ limit: "100" });
  if (type) qs.set("type", type);

  try {
    const res = await fetch(`${backendUrl("/blogs/public")}?${qs}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const body: { data?: BackendBlog[] } = await res.json();
    return (body.data ?? []).map(toPost);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await fetchPublicBlogs();
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostsByType(type: Post["type"]): Promise<Post[]> {
  const posts = await fetchPublicBlogs(type === "blog" ? "BLOG" : "NEWS");
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const res = await fetch(backendUrl(`/blogs/public/${encodeURIComponent(slug)}`), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return undefined;
    return toPost(await res.json());
  } catch {
    return undefined;
  }
}
