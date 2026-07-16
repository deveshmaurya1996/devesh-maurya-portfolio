import { EXTERNAL_LINKS, PROJECTS } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { RECRUITER_PROFILE } from "@/lib/recruiter";

export const SITE_URL = "https://devesh-maurya-portfolio.vercel.app";
export const SITE_NAME = "Devesh Maurya";
export const SITE_TITLE =
  "Devesh Maurya | Full Stack Engineer — React, Next.js, FastAPI, AI";
export const SITE_DESCRIPTION =
  "Full Stack Engineer in Mumbai building web, mobile, and AI products with React, Next.js, React Native, Node.js, FastAPI, and Azure OpenAI. Case studies from Bullshark, Aicade, and LabLamb Works. Open to opportunities.";

export const SITE_KEYWORDS = [
  "Devesh Maurya",
  "Full Stack Engineer",
  "Full Stack Developer Mumbai",
  "React Developer",
  "Next.js Developer",
  "React Native Developer",
  "TypeScript Developer",
  "FastAPI Developer",
  "Node.js Developer",
  "AI Engineer",
  "Azure OpenAI",
  "Expo Developer",
  "Bullshark",
  "Aicade",
  "ThriveOn",
  "Lands Authority",
  "portfolio",
  "hire full stack developer India",
  "senior React Next.js engineer",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RECRUITER_PROFILE.name,
    url: SITE_URL,
    image: absoluteUrl("/images/deveshMauryaNew.png"),
    jobTitle: RECRUITER_PROFILE.role,
    description: SITE_DESCRIPTION,
    email: RECRUITER_PROFILE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [
      EXTERNAL_LINKS.GITHUB,
      EXTERNAL_LINKS.LINKEDIN,
      EXTERNAL_LINKS.TWITTER,
      EXTERNAL_LINKS.DARTIX,
    ],
    knowsAbout: RECRUITER_PROFILE.currentStack,
    alumniOf: [
      { "@type": "Organization", name: "Bullshark" },
      { "@type": "Organization", name: "Aicade" },
      { "@type": "Organization", name: "LabLamb Works" },
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };
}

export function buildProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: SITE_TITLE,
    url: SITE_URL,
    mainEntity: buildPersonJsonLd(),
  };
}

export function buildCaseStudyJsonLd(project: (typeof PROJECTS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: absoluteUrl(`/work/${project.slug}`),
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: [...project.categories, ...project.technologies].join(", "),
    about: project.technologies,
  };
}

export function buildBlogPostingJsonLd(post: (typeof BLOG_POSTS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: absoluteUrl(`/blog/${post.slug}`),
    image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    keywords: post.tag,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
