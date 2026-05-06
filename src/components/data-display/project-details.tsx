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
import useMounted from "@/hooks/use-mounted";

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
  const { theme } = useTheme();
  const mounted = useMounted();

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
        {previewImage ? (
          <Link
            noCustomization
            href={url}
            externalLink
            className="flex h-[400px] w-full items-center justify-center"
          >
            <Image
              src={previewImage}
              alt={`${name} preview`}
              width={600}
              height={400}
              className="h-full w-full rounded-xl object-contain shadow-lg transition-transform duration-500 md:hover:scale-105"
            />
          </Link>
        ) : (
          <div className="relative flex h-[400px] w-full flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-100 via-gray-50 to-white p-6 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            </div>

            <div className="z-10 flex flex-col items-center gap-3 text-center">
              <Typography variant="subtitle" className="font-semibold text-gray-900">
                {name}
              </Typography>
              <Typography className="max-w-sm text-sm text-gray-600">
                Professional workflow platform with enterprise-grade architecture
                and role-based access control.
              </Typography>
            </div>

            <div className="z-10 flex items-center justify-center">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Case Study Project
              </span>
            </div>

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gray-200/60 blur-2xl" />
            <div className="absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-gray-100 blur-2xl" />
          </div>
        )}
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
          {url && (
            <Link
              href={url}
              noCustomization
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              externalLink
            >
              <ExternalLink />
            </Link>
          )}

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
                    src={mounted && theme === "dark" ? appleDark : apple}
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
