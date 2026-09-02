import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostDetail from "@/components/PostDetail";
import { posts as allPosts, getPostBySlug, getPostsByType } from "@/lib/posts";

export function generateStaticParams() {
  return getPostsByType("blog").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.type !== "blog") notFound();

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 6);

  return <PostDetail post={post} backHref="/blogs" backLabel="Back to Blogs" related={related} />;
}
