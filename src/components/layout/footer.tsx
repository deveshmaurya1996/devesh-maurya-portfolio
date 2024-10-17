import { Copyright } from "lucide-react";

import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          {new Date().getFullYear()} |&nbsp; &nbsp;and&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
          >
            coded
          </Link>
          &nbsp;with ❤️️ by Devesh Maurya
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
