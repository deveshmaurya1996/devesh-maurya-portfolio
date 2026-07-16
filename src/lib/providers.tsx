"use client";

import { ThemeProvider } from "next-themes";
import { RecruiterModeProvider } from "@/components/general/recruiter-mode";
import CommandPalette from "@/components/general/command-palette";
import AskPortfolioFab from "@/components/general/ask-portfolio-fab";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <RecruiterModeProvider>
        {children}
        <CommandPalette />
        <AskPortfolioFab />
      </RecruiterModeProvider>
    </ThemeProvider>
  );
}
