import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { getBlogPostBody } from "@/components/blog/post-body";
import { getAllSlugs, getPostBySlug } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";

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
    title: `${post.title} | Devesh Maurya`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
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
          <time
            className="text-sm text-gray-500"
            dateTime={post.publishedAt}
          >
            {formatDate(post.publishedAt)}
          </time>
          <Typography variant="h1" className="!text-3xl md:!text-4xl md:!leading-tight">
            {post.title}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            {post.excerpt}
          </Typography>
        </header>

        <div>{body}</div>
      </div>
    </Container>
  );
}
