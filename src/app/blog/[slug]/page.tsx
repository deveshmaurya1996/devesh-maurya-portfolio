import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { getBlogPostBody } from "@/components/blog/post-body";
import { getAllSlugs, getPostBySlug } from "@/lib/blog-data";
import { buildBlogPostingJsonLd, JsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found | Devesh Maurya" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "Devesh Maurya",
      post.title,
      post.tag,
      "blog",
      "full stack",
    ].filter(Boolean) as string[],
    authors: [{ name: "Devesh Maurya" }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
      images: post.coverImage
        ? [{ url: post.coverImage, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const body = getBlogPostBody(slug);
  if (!body) {
    notFound();
  }

  return (
    <Container className="!pt-24 md:!pt-28">
      <JsonLd data={buildBlogPostingJsonLd(post)} />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <Link
          href="/blog"
          noCustomization
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to blog
        </Link>

        <header className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <time
              className="text-sm text-gray-500"
              dateTime={post.publishedAt}
            >
              {formatDate(post.publishedAt)}
            </time>
            {post.tag ? (
              <span className="rounded-full bg-gray-900/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-600 dark:bg-white/5">
                {post.tag}
              </span>
            ) : null}
          </div>
          <Typography
            variant="h1"
            className="!text-3xl md:!text-4xl md:!leading-tight"
          >
            {post.title}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            {post.excerpt}
          </Typography>
        </header>

        {post.coverImage ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-100/80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ) : null}

        <article>{body}</article>
      </div>
    </Container>
  );
}
