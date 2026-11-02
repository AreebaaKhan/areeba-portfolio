"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const pretty = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (err) {
      return false;
    }
  }
}

const iconWrap =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent";

function CopyRow({ icon: Icon, label, value }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await copyText(value);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-accent-soft"
    >
      <span className={iconWrap}>
        <Icon size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block break-words text-sm text-fg">{value}</span>
      </span>
      <span
        aria-live="polite"
        className="inline-flex shrink-0 items-center gap-1 text-xs text-muted group-hover:text-fg"
      >
        {copied ? (
          <>
            <Check size={14} /> Copied
          </>
        ) : (
          <>
            <Copy size={14} /> Copy
          </>
        )}
      </span>
    </button>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5">
      <span className={iconWrap}>
        <Icon size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block text-sm text-fg">{value}</span>
      </span>
    </div>
  );
}

function LinkRow({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-soft"
    >
      <span className={iconWrap}>
        <Icon size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block break-all text-sm text-fg">{pretty(href)}</span>
      </span>
    </a>
  );
}

const smallLink =
  "text-xs text-muted underline-offset-4 transition-colors hover:text-fg hover:underline";

export function ContactDetails() {
  return (
    <div className="space-y-1">
      <CopyRow icon={Mail} label="Email" value={site.email} />
      <CopyRow icon={Phone} label="Phone" value={site.phone} />
      <InfoRow icon={MapPin} label="Location" value={site.location} />
      <LinkRow icon={LinkedinIcon} label="LinkedIn" href={site.linkedin} />
      <LinkRow icon={GithubIcon} label="GitHub" href={site.github} />
      <div className="px-3 pb-1 pt-1">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`}
          target="_blank"
          rel="noreferrer"
          className={smallLink}
        >
          Compose in Gmail
        </a>
      </div>
    </div>
  );
}

export default function ContactPopover({ wrapperClassName }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pointerType = useRef("mouse");

  useEffect(() => {
    if (!open) return;

    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function handleEnter(e) {
    pointerType.current = e.pointerType || "mouse";
    if (e.pointerType === "mouse") setOpen(true);
  }

  function handleLeave(e) {
    if (e.pointerType === "mouse") setOpen(false);
  }

  function handleClick() {
    if (pointerType.current === "mouse") {
      setOpen(true);
    } else {
      setOpen((o) => !o);
    }
  }

  return (
    <div
      ref={ref}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onPointerDown={(e) => {
        pointerType.current = e.pointerType || "mouse";
      }}
      className={cn("lg:relative", wrapperClassName)}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Contact"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 lg:h-auto lg:w-auto lg:px-4 lg:py-2"
      >
        <Mail size={16} className="lg:hidden" />
        <span className="hidden lg:inline">Contact</span>
      </button>

      {open && (
        <div className="absolute left-5 right-5 top-full z-50 pt-2 lg:left-auto lg:right-0 lg:pt-3">
          <div
            role="dialog"
            aria-label="Contact details"
            className="w-full rounded-2xl border border-line bg-surface p-3 shadow-xl lg:w-[25rem]"
          >
            <ContactDetails />
          </div>
        </div>
      )}
    </div>
  );
}