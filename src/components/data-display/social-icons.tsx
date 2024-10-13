"use client";

import { SOCIAL_LINKS } from "@/lib/data";
import IconButton from "@/components/general/icon-button";
import { useTheme } from "next-themes";
import Image from "next/image";
import WhatsappGreen from "/public/images/whatsapp-green.png";

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, "_blank")}
        >
          {socialLink.icon === "whatsapp" ? (
            <Image src={WhatsappGreen} alt="WhatsApp" width={24} height={24} />
          ) : (
            <socialLink.icon />
          )}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
