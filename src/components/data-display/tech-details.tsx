"use client";

import { TechDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/data-display/image-wrapper";

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          width={60}
          height={60}
          className="h-[40px] w-[40px] transition-transform duration-300 md:h-[50px] md:w-[50px] md:hover:scale-110 lg:h-[60px] lg:w-[60px]"
        />
      </Link>
      <Typography variant="body1" className="text-center">
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;
