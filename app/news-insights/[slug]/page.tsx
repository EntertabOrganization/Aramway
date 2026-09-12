import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostDetail from "@/components/PostDetail";
import { getAllPosts, getPostBySlug, getPostsByType } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getPostsByType("news");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || post.type !== "news") notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 6);

  return <PostDetail post={post} backHref="/news-insights" backLabel="Back to News & Insights" related={related} />;
}
