import {
  EXPERIENCES,
  EXTERNAL_LINKS,
  OPEN_SOURCE_TOOLS,
  PROJECTS,
  SKILL_FREQUENCY,
} from "@/lib/data";
import { RECRUITER_PROFILE } from "@/lib/recruiter";
import { SITE_URL } from "@/lib/seo";

function monthYear(d: Date) {
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function includesAny(q: string, words: string[]) {
  return words.some((w) => q.includes(w));
}

function answerCompanies(): string {
  const lines = EXPERIENCES.map((exp) => {
    const dates = exp.currentlyWorkHere
      ? `${monthYear(exp.startDate)} – Present`
      : `${monthYear(exp.startDate)} – ${exp.endDate ? monthYear(exp.endDate) : ""}`;
    return `• ${exp.position} at ${exp.company} (${dates})`;
  });
  return `Devesh has worked at:\n${lines.join("\n")}\nHe is currently a Full Stack Engineer at Bullshark in Mumbai.`;
}

function answerStack(): string {
  const daily =
    SKILL_FREQUENCY.find((g) => /daily/i.test(g.frequency))?.skills.map(
      (s) => s.label
    ) ?? RECRUITER_PROFILE.currentStack;
  return `Devesh’s current stack centers on ${RECRUITER_PROFILE.currentStack.join(", ")}. Day-to-day skills include ${daily.join(", ")}. He has about ${RECRUITER_PROFILE.experience} of experience.`;
}

function answerAi(): string {
  const aiProjects = PROJECTS.filter(
    (p) =>
      p.categories.includes("AI") ||
      /\b(ai|openai|llm|assistant|wizard|chatgpt)\b/i.test(
        `${p.name} ${p.description}`
      )
  );
  const lines = aiProjects.map(
    (p) => `• ${p.name}: ${p.description} (${SITE_URL}/work/${p.slug})`
  );
  const oss = OPEN_SOURCE_TOOLS.find((t) => /assistant/i.test(t.name));
  const ossLine = oss
    ? `\nOpen source: ${oss.name} — ${oss.tagline}${oss.githubUrl ? ` (${oss.githubUrl})` : ""}.`
    : "";
  return `Devesh’s AI product work includes:\n${lines.join("\n")}${ossLine}\nHighlight: ThriveOn (Azure OpenAI Assistants wizards), Aicade (AI game tooling), and YoChatGPT.`;
}

function answerMobile(): string {
  const mobile = PROJECTS.filter(
    (p) =>
      p.categories.includes("Mobile") ||
      /expo|react native|mobile/i.test(`${p.name} ${p.description}`)
  );
  const lines = mobile.map(
    (p) => `• ${p.name}: ${p.description} (${SITE_URL}/work/${p.slug})`
  );
  return `Devesh ships cross-platform mobile with React Native / Expo. Notable work:\n${lines.join("\n")}\nAt Bullshark he builds ThriveOn’s Expo client plus AI wizards; earlier he shipped Airhub and YLHH.`;
}

function answerContact(): string {
  return `Contact Devesh at ${RECRUITER_PROFILE.email}. LinkedIn: ${RECRUITER_PROFILE.linkedIn}. GitHub: ${RECRUITER_PROFILE.github}. Portfolio: ${SITE_URL}. Resume: ${RECRUITER_PROFILE.resumeView}. Studio: Dartix (${EXTERNAL_LINKS.DARTIX}).`;
}

function answerAvailability(): string {
  return `Devesh is ${RECRUITER_PROFILE.availability.toLowerCase()}, based in ${RECRUITER_PROFILE.location}. Notice period: ${RECRUITER_PROFILE.noticePeriod}. Role: ${RECRUITER_PROFILE.role}.`;
}

function answerOpenSource(): string {
  const lines = OPEN_SOURCE_TOOLS.map((t) => {
    const link = t.githubUrl || t.npmUrl || t.websiteUrl || "";
    return `• ${t.name}: ${t.tagline || t.description}${link ? ` — ${link}` : ""}`;
  });
  return `Devesh’s open-source / studio work:\n${lines.join("\n")}`;
}

function answerProjects(): string {
  const featured = PROJECTS.filter((p) => p.featured);
  const lines = featured.map(
    (p) =>
      `• ${p.name}: ${p.description} Tech: ${p.technologies.slice(0, 6).join(", ")}. ${SITE_URL}/work/${p.slug}`
  );
  return `Featured case studies:\n${lines.join("\n")}`;
}

function answerAbout(): string {
  return `${RECRUITER_PROFILE.name} is a ${RECRUITER_PROFILE.role} in ${RECRUITER_PROFILE.location} with ${RECRUITER_PROFILE.experience} of experience. Primary stack: ${RECRUITER_PROFILE.currentStack.join(", ")}. ${RECRUITER_PROFILE.availability}. Current role: Full Stack Engineer at Bullshark.`;
}

/** Fast, deterministic answers from portfolio data (no network). */
export function answerFromPortfolio(question: string): string {
  const q = question.toLowerCase().trim();

  if (
    includesAny(q, [
      "mobile",
      "expo",
      "react native",
      "ios",
      "android",
      "airhub",
      "ylhh",
    ])
  ) {
    return answerMobile();
  }

  if (
    includesAny(q, [
      "ai product",
      "llm",
      "openai",
      "azure openai",
      "assistant",
      "thriveon",
      "yochatgpt",
      "machine learning",
      "nlp",
    ]) ||
    /\bai\b/.test(q)
  ) {
    return answerAi();
  }

  if (
    includesAny(q, [
      "compan",
      "employ",
      "work for",
      "worked for",
      "work experience",
      "career",
      "job history",
      "bullshark",
      "aicade",
      "lablamb",
    ])
  ) {
    return answerCompanies();
  }

  if (
    includesAny(q, [
      "stack",
      "technolog",
      "skill",
      "framework",
      "language",
      "typescript",
      "next.js",
      "react",
      "node",
    ])
  ) {
    return answerStack();
  }

  if (
    includesAny(q, [
      "contact",
      "email",
      "linkedin",
      "github",
      "resume",
      "cv",
      "hire",
      "reach",
    ])
  ) {
    return answerContact();
  }

  if (
    includesAny(q, [
      "availab",
      "open to",
      "notice",
      "relocat",
      "location",
      "mumbai",
      "where",
    ])
  ) {
    return answerAvailability();
  }

  if (
    includesAny(q, [
      "open source",
      "opensource",
      "oss",
      "npm",
      "cli",
      "dartix",
      "create-fullstack",
      "ai-gate",
      "ai gate",
    ])
  ) {
    return answerOpenSource();
  }

  if (includesAny(q, ["project", "case study", "portfolio", "built", "ship"])) {
    return answerProjects();
  }

  if (
    includesAny(q, ["who is", "about", "himself", "devesh", "introduce", "bio"])
  ) {
    return answerAbout();
  }

  return `I don’t have a specific answer for that in the portfolio data. Devesh is a ${RECRUITER_PROFILE.role} in ${RECRUITER_PROFILE.location} — ask about companies, stack, AI products, mobile/Expo, or contact. Email: ${RECRUITER_PROFILE.email}. Case studies: ${SITE_URL}/#work`;
}
