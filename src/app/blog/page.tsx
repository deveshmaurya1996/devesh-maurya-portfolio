import type { Metadata } from "next";

import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Card from "@/components/layout/card";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Devesh Maurya",
  description:
    "Notes on tools, stacks, and how I ship releases.",
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <Container className="!pt-24 md:!pt-28">
      <div className="flex max-w-3xl flex-col gap-4">
        <Typography variant="h1">Blog</Typography>
        <Typography variant="body1" className="max-w-2xl text-gray-600">
          Short writes on things I ship: CLIs, stack choices, release pipelines.
          I add posts here when there is something worth documenting.
        </Typography>
      </div>

      <ul className="mt-10 flex list-none flex-col gap-6 p-0">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} noCustomization className="block">
              <Card className="p-6 transition-all hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-300">
                <time
                  className="text-sm text-gray-500"
                  dateTime={post.publishedAt}
                >
                  {formatDate(post.publishedAt)}
                </time>
                <Typography
                  variant="h3"
                  className="mt-2 !text-xl md:!text-2xl"
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" className="mt-3 text-gray-600">
                  {post.excerpt}
                </Typography>
                <span className="mt-4 inline-block text-sm font-medium text-gray-900 underline-offset-4 hover:underline">
                  Read more →
                </span>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
