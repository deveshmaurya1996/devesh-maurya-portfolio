import Image from "next/image";

import { TRUSTED_BY } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Link from "@/components/navigation/link";

const TrustedBySection = () => {
  return (
    <Container className="bg-gray-50 py-12 md:py-16" id="trusted-by">
      <div className="flex flex-col items-center gap-6">
        <Tag label="Worked with" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Companies where I have delivered production software
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {TRUSTED_BY.map((company) => (
            <Link
              key={company.name}
              href={company.url}
              externalLink
              noCustomization
              className="opacity-85 transition-opacity hover:opacity-100"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={180}
                height={72}
                className="h-14 w-auto object-contain md:h-16"
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrustedBySection;
