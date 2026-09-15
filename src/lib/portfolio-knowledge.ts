import {
  EXPERIENCES,
  EXTERNAL_LINKS,
  OPEN_SOURCE_TOOLS,
  PROJECTS,
  SKILL_FREQUENCY,
  TRUSTED_BY,
} from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { RECRUITER_PROFILE } from "@/lib/recruiter";
import { SITE_URL } from "@/lib/seo";

function monthYear(d: Date) {
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

/** Compact knowledge for /api/ask — sized for Vercel Hobby (~10s) NIM latency. */
export function buildPortfolioKnowledge(): string {
  const experienceBlock = EXPERIENCES.map((exp) => {
    const dates = exp.currentlyWorkHere
      ? `${monthYear(exp.startDate)} – Present`
      : `${monthYear(exp.startDate)} – ${exp.endDate ? monthYear(exp.endDate) : ""}`;
    const bullets = exp.summary
      .slice(0, 3)
      .map((s) => `  - ${s}`)
      .join("\n");
    return `- ${exp.position} @ ${exp.company} (${dates})\n${bullets}`;
  }).join("\n");

  const projectsBlock = PROJECTS.map((p) => {
    const featured = p.featured ? " [featured]" : "";
    const url = p.url ? ` | ${p.url}` : "";
    return `- ${p.name}${featured}: ${p.description} Tech: ${p.technologies.join(", ")}. Case: ${SITE_URL}/work/${p.slug}${url}`;
  }).join("\n");

  const skillsBlock = SKILL_FREQUENCY.map(
    (g) => `${g.frequency}: ${g.skills.map((s) => s.label).join(", ")}`
  ).join("\n");

  const toolsBlock = OPEN_SOURCE_TOOLS.map((t) => {
    const link = t.githubUrl || t.npmUrl || t.websiteUrl || "";
    return `- ${t.name}: ${t.tagline || t.description}${link ? ` (${link})` : ""}`;
  }).join("\n");

  const blogBlock = BLOG_POSTS.map(
    (p) => `- ${p.title}: ${p.excerpt} → ${SITE_URL}/blog/${p.slug}`
  ).join("\n");

  const trustedBy = TRUSTED_BY.map((c) => c.name).join(", ");
  const featuredNames = PROJECTS.filter((p) => p.featured)
    .map((p) => p.name)
    .join(", ");

  return `
# ROLE
Portfolio assistant for Devesh Maurya (Full Stack Engineer, Mumbai).
Use ONLY the knowledge below. Never invent employers, dates, metrics, clients, or projects.
Speak in third person about Devesh. Short answers; lead with the direct answer.
AI work: ThriveOn, Aicade, YoChatGPT, AI Assistant Platform.
Mobile: ThriveOn (Expo), Airhub, YLHH. Featured: ${featuredNames}.
Contact: ${RECRUITER_PROFILE.email} | ${RECRUITER_PROFILE.linkedIn} | ${RECRUITER_PROFILE.github} | ${SITE_URL}
Studio: Dartix (${EXTERNAL_LINKS.DARTIX}). Resume: ${RECRUITER_PROFILE.resumeView}

# QUICK FACTS
${RECRUITER_PROFILE.name} — ${RECRUITER_PROFILE.role}, ${RECRUITER_PROFILE.location}
Availability: ${RECRUITER_PROFILE.availability} | Notice: ${RECRUITER_PROFILE.noticePeriod} | YoE: ${RECRUITER_PROFILE.experience}
Stack: ${RECRUITER_PROFILE.currentStack.join(", ")}
Worked with: ${trustedBy}

# EXPERIENCE
${experienceBlock}

# PROJECTS
${projectsBlock}

# SKILLS
${skillsBlock}

# OPEN SOURCE
${toolsBlock}

# WRITING
${blogBlock}
`.trim();
}
