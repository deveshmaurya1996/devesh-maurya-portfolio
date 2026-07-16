"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from "@/components/navigation/drawer";
import { NAV_LINKS } from "@/lib/data";
import { mergeClasses } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";
import useScroll from "@/hooks/use-scroll";
import useMounted from "@/hooks/use-mounted";
import Link from "@/components/navigation/link";
import ThemeSwitcher from "@/components/general/theme-switcher";
import IconButton from "@/components/general/icon-button";
import DownloadCV from "@/components/general/download-cv";
import RecruiterModeTrigger from "@/components/general/recruiter-mode";
import Typography from "@/components/general/typography";

const Logo = () => (
  <Typography variant="h3" className="font-bold" aria-label="Devesh Maurya home">
    {"<DM />"}
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        "sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100",
        mounted && scrolled
          ? "bg-gray/50 backdrop-blur-xl md:border-gray-100"
          : ""
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization aria-label="Devesh Maurya — Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100" aria-hidden />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <RecruiterModeTrigger className="hidden lg:inline-flex" />
            <DownloadCV />
          </div>
        </nav>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton aria-label="Open navigation menu">
              <Menu aria-hidden />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle>Navigation Menu</DrawerTitle>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton aria-label="Close navigation menu">
                  <X aria-hidden />
                </IconButton>
              </DrawerClose>
            </div>
            <nav className="border-b border-gray-100 p-4" aria-label="Mobile">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <RecruiterModeTrigger className="w-full" />
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
