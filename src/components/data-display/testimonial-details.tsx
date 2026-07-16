import Image from "next/image";

import { TestimonialDetails as TestimonialDetailsProps } from "@/lib/types";
import Typography from "@/components/general/typography";

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl bg-gradient-to-b from-gray-50/90 to-transparent p-6 ring-1 ring-gray-100/70 dark:from-gray-100/30">
      <div className="flex items-center gap-3">
        <Image
          src={personAvatar!}
          alt={`${personName} avatar`}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="min-w-0">
          <Typography className="truncate font-semibold text-gray-900">
            {personName}
          </Typography>
          <Typography className="text-xs text-gray-500">{title}</Typography>
        </div>
      </div>
      <Typography className="text-sm leading-relaxed text-gray-600">
        &ldquo;{testimonial}&rdquo;
      </Typography>
    </article>
  );
};

export default TestimonialDetails;
