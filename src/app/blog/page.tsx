import type { Metadata } from "next";

import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — notes on tooling, AI systems, and shipping",
  description:
    "Technical writing by Devesh Maurya on AI Gate, create-fullstack-app, AI assistant platforms, CLIs, and full-stack delivery with React, Next.js, and FastAPI.",
  keywords: [
    "Devesh Maurya blog",
    "AI Gate",
    "create-fullstack-app",
    "AI assistant",
    "Next.js",
    "FastAPI",
    "full stack engineering",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Devesh Maurya",
    description:
      "Notes on tooling, AI systems, and how I ship full-stack products.",
    url: "/blog",
    type: "website",
  },
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

      <ul className="mt-10 grid list-none gap-6 p-0 md:grid-cols-2">
        {sorted.map((post) => (
          <li key={post.slug} className="h-full">
            <Link
              href={`/blog/${post.slug}`}
              noCustomization
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gray-50/70 ring-1 ring-gray-100/80 transition hover:ring-emerald-300/40 dark:bg-gray-100/40"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                {post.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.coverImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-slate-900" />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex h-5 items-center justify-between gap-2">
                  <time
                    className="text-sm leading-none text-gray-500"
                    dateTime={post.publishedAt}
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                  {post.tag ? (
                    <span className="rounded-full bg-gray-900/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-600 dark:bg-white/5">
                      {post.tag}
                    </span>
                  ) : null}
                </div>
                <Typography
                  variant="h3"
                  className="line-clamp-2 min-h-[3.5rem] !text-xl !leading-7 md:min-h-[4rem] md:!text-2xl md:!leading-8"
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="line-clamp-2 min-h-[2.5rem] text-sm leading-5 text-gray-600"
                >
                  {post.excerpt}
                </Typography>
                <span className="mt-auto pt-1 text-sm font-medium text-gray-900 underline-offset-4 group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
