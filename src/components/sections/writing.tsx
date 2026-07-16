"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BLOG_POSTS } from "@/lib/blog-data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Link from "@/components/navigation/link";

const WritingSection = () => {
  return (
    <Container id="writing" className="!py-14 md:!py-16">
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <Tag label="Writing" />
        <Typography variant="subtitle" className="max-w-xl">
          Notes on tooling, AI systems, and delivery
        </Typography>
        <Link
          href="/blog"
          noCustomization
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
        >
          All posts <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {BLOG_POSTS.map((post, i) => (
          <motion.div
            key={post.slug}
            className="h-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              noCustomization
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gray-50/70 ring-1 ring-gray-100/80 transition hover:bg-emerald-50/50 hover:ring-emerald-300/40 dark:bg-gray-100/40 dark:hover:bg-emerald-950/20"
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
              <div className="flex flex-col gap-2 p-4">
                <div className="flex h-5 items-center justify-between gap-2">
                  <Typography className="text-[11px] leading-none text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                  {post.tag ? (
                    <span className="rounded-full bg-gray-900/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-600 dark:bg-white/5">
                      {post.tag}
                    </span>
                  ) : null}
                </div>
                <Typography className="line-clamp-2 min-h-[3rem] text-base font-semibold leading-6 text-gray-900 group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
                  {post.title}
                </Typography>
                <Typography className="line-clamp-2 min-h-[2.5rem] text-sm leading-5 text-gray-600">
                  {post.excerpt}
                </Typography>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default WritingSection;
