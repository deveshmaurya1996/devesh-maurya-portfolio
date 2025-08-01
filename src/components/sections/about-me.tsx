import Image from "next/image";

import deveshMaurya from "/public/images/fulsize-gray.png";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
          <Image
            src={deveshMaurya}
            alt="devesh maurya"
            className="hover:animate-tilt-shake absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
            style={{ objectFit: "cover" }}
          ></Image>
          <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a Full Stack Developer with 2+ years of experience, specializing in building responsive, high-performing web and mobile applications. My expertise lies in React.js, Next.js, Node.js, and React Native, along with GraphQL and MongoDB for scalable backend solutions. I am passionate about delivering exceptional user experiences through clean, efficient, and maintainable code.
          </Typography>
          <Typography>
            My journey started in 2021, and since then, I&apos;ve grown from developing basic websites to building advanced, AI-powered, data-driven applications. Over the years, I&apos;ve gained hands-on experience working on diverse projects—from real-time chat applications and mobile marketplaces to AI-assisted 2D game builders.
          </Typography>
          <Typography>
          I previously worked as a Full Stack Developer at Aicade, where I focus on frontend architecture and integrating AI-driven APIs to optimize 2D game generation tools. Previously, I contributed to multiple client projects at LabLamb Works Limited, developing cross-platform apps and web solutions using modern frameworks like Gatsby, Keystone, and TypeScript.
          </Typography>
          <Typography>
            I enjoy working on projects end-to-end, from ideation and design to deployment and optimization. My interests include AI integration, real-time communication systems, and solving challenging engineering problems.
          </Typography>
          <Typography>
            When I&apos;m not coding, you can find me sharing thoughts on 
            {" "}<Link noCustomization externalLink withUnderline href={EXTERNAL_LINKS.TWITTER}>
              Twitter
            </Link> or pushing new projects on{" "}
            <Link noCustomization externalLink withUnderline href={EXTERNAL_LINKS.GITHUB}>
              GitHub
            </Link>
            . You&apos;re welcome to follow me on both platforms to stay connected.
          </Typography>
          <Typography>Some quick bits about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">B.Sc in Mathematics</Typography>
              <Typography component="li">Post Graduate Diploma in Computer Applications</Typography>
              <Typography component="li">Industry Ready Certification in Full-stack Development</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Passionate about AI and real-time systems</Typography>
              <Typography component="li">Part-time freelancer open to collaborations</Typography>
            </ul>
          </div>
          <Typography>
            I&apos;m available for freelance opportunities, so feel free to reach out and say hello! Let&apos;s build something amazing together. 😉
          </Typography>
        </div>

      </div>
    </Container>
  );
};

export default AboutMeSection;
