"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";
import Card from "@/components/layout/card";
import Button from "../general/button";
import Android from "/public/images/android.png";
import apple from "/public/images/apple.png";
import appleDark from "/public/images/apple-logo.png";
import { useTheme } from "next-themes";

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = "default",
  androidLink,
  iosLink,
}: ProjectDetailsProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          "flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12",
          layoutType === "default"
            ? "md:rounded-l-xl md:border-r"
            : "md:order-last md:rounded-r-xl md:border-l"
        )}
      >
        <Link noCustomization href={url} externalLink>
          <Image
            src={previewImage}
            alt={`${name} preview`}
            className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
          layoutType === "default" ? "" : "md:order-first"
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        <div className="align-center flex gap-2">
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
          >
            <ExternalLink />
          </Link>
          {androidLink && iosLink && (
            <div className="align-center flex gap-2">
              <Link href={androidLink} externalLink>
                <Button className="gap-1">
                  <Image
                    src={Android}
                    alt="android"
                    width={20}
                    height={20}
                    className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                    style={{ objectFit: "cover" }}
                  />
                  <Typography>Android</Typography>
                </Button>
              </Link>
              <Link href={iosLink} externalLink>
                <Button className="gap-1">
                  <Image
                    src={theme === "dark" ? appleDark : apple}
                    alt="apple"
                    width={20}
                    height={20}
                    className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                    style={{ objectFit: "cover" }}
                  />

                  <Typography>IOS</Typography>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;
