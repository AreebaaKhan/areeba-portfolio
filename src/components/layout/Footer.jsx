import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const linkCls =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-accent-soft hover:text-fg";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          {site.year} {site.name}. Karachi, Pakistan.
        </p>
        <div className="flex items-center gap-2">
          <a href={`mailto:${site.email}`} aria-label="Email" className={linkCls}>
            <Mail size={16} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={linkCls}>
            <LinkedinIcon size={16} />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={linkCls}>
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}