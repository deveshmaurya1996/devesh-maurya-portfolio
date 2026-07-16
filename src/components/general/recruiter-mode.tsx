"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  X,
} from "lucide-react";
import { BrandIcon } from "@/components/general/brand-icon";
import { SOCIAL_BRAND_ICONS } from "@/lib/social-brands";

import {
  getRecruiterTopProjects,
  RECRUITER_PROFILE,
} from "@/lib/recruiter";
import Typography from "@/components/general/typography";
import Button from "@/components/general/button";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";

type RecruiterModeContextValue = {
  open: boolean;
  openRecruiterMode: () => void;
  closeRecruiterMode: () => void;
  setOpen: (open: boolean) => void;
};

const RecruiterModeContext = createContext<RecruiterModeContextValue | null>(
  null
);

export function useRecruiterMode(): RecruiterModeContextValue {
  const ctx = useContext(RecruiterModeContext);
  if (!ctx) {
    throw new Error(
      "useRecruiterMode must be used within RecruiterModeProvider"
    );
  }
  return ctx;
}

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openRecruiterMode = useCallback(() => setOpen(true), []);
  const closeRecruiterMode = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openRecruiterMode, closeRecruiterMode, setOpen }),
    [open, openRecruiterMode, closeRecruiterMode]
  );

  return (
    <RecruiterModeContext.Provider value={value}>
      {children}
      <RecruiterModeDialog />
    </RecruiterModeContext.Provider>
  );
}

function RecruiterModeDialog() {
  const { open, setOpen } = useRecruiterMode();
  const profile = RECRUITER_PROFILE;
  const topProjects = getRecruiterTopProjects();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-gray-100 bg-gray p-6 shadow-xl focus:outline-none">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title asChild>
                <Typography variant="h3">For Recruiters</Typography>
              </Dialog.Title>
              <Dialog.Description asChild>
                <Typography className="mt-1 text-sm text-gray-600">
                  Resume, contact details, and selected projects
                </Typography>
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <dl className="flex flex-col gap-4">
            <InfoRow label="Availability" value={profile.availability} />
            <InfoRow
              label="Location"
              value={
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {profile.location}
                </span>
              }
            />
            <InfoRow label="Notice period" value={profile.noticePeriod} />
            <InfoRow label="Experience" value={profile.experience} />
            <div>
              <Typography className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Current stack
              </Typography>
              <div className="flex flex-wrap gap-2">
                {profile.currentStack.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <Typography className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Links
            </Typography>
            <a
              href={profile.resumeView}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full justify-start gap-2">
                <FileText size={16} /> Resume
              </Button>
            </a>
            <Link href={profile.linkedIn} externalLink noCustomization>
              <Button className="w-full justify-start gap-2 bg-transparent text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
                <BrandIcon icon={SOCIAL_BRAND_ICONS.linkedin} size={16} />{" "}
                LinkedIn <ExternalLink size={14} />
              </Button>
            </Link>
            <Link href={profile.github} externalLink noCustomization>
              <Button className="w-full justify-start gap-2 bg-transparent text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
                <BrandIcon icon={SOCIAL_BRAND_ICONS.github} size={16} /> GitHub{" "}
                <ExternalLink size={14} />
              </Button>
            </Link>
            <a href={`mailto:${profile.email}`}>
              <Button className="w-full justify-start gap-2 bg-transparent text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
                <Mail size={16} /> {profile.email}
              </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Typography className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Top 3 projects
            </Typography>
            {topProjects.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                noCustomization
                onClick={() => setOpen(false)}
                className="rounded-xl border border-gray-100 px-4 py-3 transition-colors hover:bg-gray-50"
              >
                <Typography className="font-medium text-gray-900">
                  {p.name}
                </Typography>
                <Typography className="text-xs text-gray-500">
                  {p.categories.join(" · ")}
                </Typography>
              </Link>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div>
      <Typography className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </Typography>
      <Typography className="text-gray-900">{value}</Typography>
    </div>
  );
}

export default function RecruiterModeTrigger({
  className,
}: {
  className?: string;
}) {
  const { openRecruiterMode } = useRecruiterMode();
  return (
    <Button type="button" onClick={openRecruiterMode} className={className}>
      For Recruiters
    </Button>
  );
}
