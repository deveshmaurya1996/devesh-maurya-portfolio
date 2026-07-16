import {
  EXPERIENCES,
  EXTERNAL_LINKS,
  HOW_I_BUILD,
  OPEN_SOURCE_TOOLS,
  PROJECTS,
  SKILL_FREQUENCY,
  TESTIMONIALS,
  TRUSTED_BY,
} from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { RECRUITER_PROFILE } from "@/lib/recruiter";
import { SITE_URL } from "@/lib/seo";

function monthYear(d: Date) {
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

export function buildPortfolioKnowledge(): string {
  const experienceBlock = EXPERIENCES.map((exp) => {
    const dates = exp.currentlyWorkHere
      ? `${monthYear(exp.startDate)} – Present`
      : `${monthYear(exp.startDate)} – ${exp.endDate ? monthYear(exp.endDate) : ""}`;
    return [
      `### ${exp.position} @ ${exp.company}`,
      `Dates: ${dates}`,
      exp.companyUrl ? `Company URL: ${exp.companyUrl}` : "",
      ...exp.summary.map((s) => `- ${s}`),
    ]
      .filter(Boolean)
      .join("\n");
  }).join("\n\n");

  const projectsBlock = PROJECTS.map((p) => {
    const lines = [
      `### ${p.name} (slug: ${p.slug})`,
      `Categories: ${p.categories.join(", ")}`,
      p.featured ? "Featured case study: yes" : "Featured case study: no",
      `Summary: ${p.description}`,
      `Tech: ${p.technologies.join(", ")}`,
      p.url ? `Live / repo: ${p.url}` : "",
      p.role ? `Role: ${p.role}` : "",
      p.overview ? `Overview: ${p.overview}` : "",
      p.problem ? `Problem: ${p.problem}` : "",
      p.solution ? `Solution: ${p.solution}` : "",
      p.challenges?.length
        ? `Challenges:\n${p.challenges.map((c) => `  - ${c}`).join("\n")}`
        : "",
      p.impact?.length
        ? `Impact:\n${p.impact.map((i) => `  - ${i}`).join("\n")}`
        : "",
      p.architecture?.nodes?.length
        ? `Architecture: ${p.architecture.nodes.join(" → ")}`
        : "",
      p.frontend
        ? `Frontend: ${p.frontend.summary}\n  Stack: ${p.frontend.stack.join(", ")}\n${p.frontend.details.map((d) => `  - ${d}`).join("\n")}`
        : "",
      p.backend
        ? `Backend: ${p.backend.summary}\n  Stack: ${p.backend.stack.join(", ")}\n${p.backend.details.map((d) => `  - ${d}`).join("\n")}`
        : "",
      p.modules?.length
        ? `Modules:\n${p.modules.map((m) => `  - ${m.name}: ${m.description}`).join("\n")}`
        : "",
      p.apiHighlights?.length
        ? `API highlights:\n${p.apiHighlights.map((a) => `  - ${a}`).join("\n")}`
        : "",
      `Case study page: ${SITE_URL}/work/${p.slug}`,
    ];
    return lines.filter(Boolean).join("\n");
  }).join("\n\n");

  const skillsBlock = SKILL_FREQUENCY.map(
    (g) => `${g.frequency}: ${g.skills.map((s) => s.label).join(", ")}`
  ).join("\n");

  const toolsBlock = OPEN_SOURCE_TOOLS.map((t) => {
    const links = [
      t.githubUrl ? `GitHub: ${t.githubUrl}` : "",
      t.npmUrl ? `npm: ${t.npmUrl}` : "",
      t.websiteUrl ? `Site: ${t.websiteUrl}` : "",
      t.blogSlug ? `Blog: ${SITE_URL}/blog/${t.blogSlug}` : "",
      t.installCommand ? `Install: ${t.installCommand}` : "",
    ]
      .filter(Boolean)
      .join(" | ");
    return [
      `### ${t.name}${t.brand ? ` (${t.brand})` : ""}`,
      t.tagline ? `Tagline: ${t.tagline}` : "",
      t.description,
      t.highlights?.length
        ? `Highlights: ${t.highlights.join("; ")}`
        : "",
      links,
    ]
      .filter(Boolean)
      .join("\n");
  }).join("\n\n");

  const howIBuildBlock = HOW_I_BUILD.map(
    (p) => `- ${p.title}: ${p.description}`
  ).join("\n");

  const testimonialsBlock = TESTIMONIALS.map(
    (t) => `- ${t.personName} (${t.title}): "${t.testimonial}"`
  ).join("\n");

  const blogBlock = BLOG_POSTS.map(
    (p) =>
      `- ${p.title} [${p.tag}, ${p.publishedAt}]: ${p.excerpt} → ${SITE_URL}/blog/${p.slug}`
  ).join("\n");

  const trustedBy = TRUSTED_BY.map((c) => `${c.name} (${c.url})`).join(", ");

  const featuredNames = PROJECTS.filter((p) => p.featured)
    .map((p) => p.name)
    .join(", ");

  return `
# ROLE
You are the portfolio assistant for Devesh Maurya (Full Stack Engineer, Mumbai).
Answer questions from recruiters, hiring managers, and visitors using ONLY the knowledge below.
If a fact is not present, say you do not have that information — never invent employers, dates, metrics, clients, or projects.

# HOW TO ANSWER
- Speak about Devesh in third person ("Devesh built…", "He works with…").
- If the user says "my / I / me", treat it as about Devesh (they are browsing his portfolio).
- Prefer short paragraphs; use bullets for lists of projects, skills, or tech.
- Lead with the direct answer, then 1–3 supporting facts.
- When asked about AI work, highlight: ThriveOn (Azure OpenAI Assistants wizards), Aicade (AI game tooling), YoChatGPT, and the open-source AI Assistant Platform.
- When asked about mobile: ThriveOn (Expo), React Native / Expo skills, Airhub, YLHH.
- When asked about backend: Node.js, Express, FastAPI, NestJS, Prisma, PostgreSQL, MongoDB, Azure OpenAI, GraphQL.
- Featured case studies to recommend first: ${featuredNames}.
- For deep technical detail, point to case study URLs under ${SITE_URL}/work/...
- Contact: email ${RECRUITER_PROFILE.email}, LinkedIn ${RECRUITER_PROFILE.linkedIn}, GitHub ${RECRUITER_PROFILE.github}, portfolio ${SITE_URL}, resume ${RECRUITER_PROFILE.resumeView}.
- Studio: Dartix at ${EXTERNAL_LINKS.DARTIX}.

# QUICK FACTS
Name: ${RECRUITER_PROFILE.name}
Role: ${RECRUITER_PROFILE.role}
Location: ${RECRUITER_PROFILE.location}
Availability: ${RECRUITER_PROFILE.availability}
Notice period: ${RECRUITER_PROFILE.noticePeriod}
Years of experience: ${RECRUITER_PROFILE.experience}
Primary stack: ${RECRUITER_PROFILE.currentStack.join(", ")}
Trusted by / worked with: ${trustedBy}
Email: ${RECRUITER_PROFILE.email}
LinkedIn: ${RECRUITER_PROFILE.linkedIn}
GitHub: ${RECRUITER_PROFILE.github}
Twitter/X: ${EXTERNAL_LINKS.TWITTER}
Resume (view): ${RECRUITER_PROFILE.resumeView}
Resume (PDF): ${RECRUITER_PROFILE.resumePdf}

# HOW HE BUILDS
${howIBuildBlock}

# EXPERIENCE
${experienceBlock}

# PROJECTS
${projectsBlock}

# SKILLS BY FREQUENCY
${skillsBlock}

# OPEN SOURCE AND TOOLS
${toolsBlock}

# WRITING
${blogBlock}

# TESTIMONIALS
${testimonialsBlock}
`.trim();
}
