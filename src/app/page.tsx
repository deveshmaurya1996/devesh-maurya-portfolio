import type { Metadata } from "next";

import HeroSection from "@/components/sections/hero";
import TrustedBySection from "@/components/sections/trusted-by";
import ContactSection from "@/components/sections/contact";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experiences";
import TestimonialsSection from "@/components/sections/testimonials";
import WorkSection from "@/components/sections/work";
import HowIBuildSection from "@/components/sections/how-i-build";
import OpenSourceSection from "@/components/sections/open-source";
import WritingSection from "@/components/sections/writing";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  absoluteUrl,
  buildProfilePageJsonLd,
  JsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    type: "profile",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={buildProfilePageJsonLd()} />
      <HeroSection />
      <TrustedBySection />
      <WorkSection />
      <HowIBuildSection />
      <SkillsSection />
      <ExperienceSection />
      <OpenSourceSection />
      <WritingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
