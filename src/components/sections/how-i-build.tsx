import Image from "next/image";

import deveshMaurya from "/public/images/fulsize-gray.png";
import { HOW_I_BUILD, EXTERNAL_LINKS } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { calculateYearsOfExperience } from "@/lib/utils";

const HowIBuildSection = () => {
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <Container className="bg-gray-50" id="how-i-build">
      <div className="flex flex-col items-center gap-4">
        <Tag label="How I build" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          How I approach architecture and delivery
        </Typography>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="relative mx-auto h-[320px] w-[280px] md:h-[380px] md:w-[320px] lg:mx-0">
          <Image
            src={deveshMaurya}
            alt="Devesh Maurya"
            className="absolute z-10 h-[300px] w-[240px] border-8 border-gray-50 object-cover max-md:left-5 md:right-0 md:top-0 md:h-[360px] md:w-[280px]"
          />
          <div className="absolute h-[300px] w-[280px] bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[360px] md:w-[280px]" />
        </div>

        <div className="flex flex-col gap-6">
          <Typography>
            Full Stack Engineer at Bullshark with {yearsOfExperience} years of
            experience on web and mobile products. Previously at Aicade on AI
            game tooling, and at LabLamb Works on client applications. I focus on
            clear architecture, reliable releases, and AI features that support
            real product goals.
          </Typography>

          <div className="grid gap-4 sm:grid-cols-2">
            {HOW_I_BUILD.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 bg-gray p-4"
              >
                <Typography className="mb-2 font-semibold text-gray-900">
                  {item.title}
                </Typography>
                <Typography className="text-sm">{item.description}</Typography>
              </div>
            ))}
          </div>

          <Typography className="text-sm text-gray-600">
            Follow along on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>{" "}
            and{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              X
            </Link>
            .
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default HowIBuildSection;
