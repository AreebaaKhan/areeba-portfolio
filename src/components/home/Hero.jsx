"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Eye, Mail } from "lucide-react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-accent-soft hover:text-fg";

const menuItem =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-fg transition-colors hover:bg-accent-soft";

function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) =>
          setOpen((o) => (e.nativeEvent.pointerType === "mouse" ? true : !o))
        }
        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-accent-soft"
      >
        Resume
        <ChevronDown
          size={14}
          className={open ? "rotate-180 transition-transform" : "transition-transform"}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-20 pt-2">
          <div
            role="menu"
            className="min-w-44 rounded-xl border border-line bg-surface p-1 shadow-lg"
          >
            <a
              role="menuitem"
              href={site.resumeView || site.resume}
              target="_blank"
              rel="noreferrer"
              className={menuItem}
            >
              <Eye size={16} /> View Resume
            </a>
            <a role="menuitem" href={site.resume} download className={menuItem}>
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>NED University, Batch 2027</Badge>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {site.name}
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg text-accent md:text-2xl">
            {site.headline.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-5 w-px bg-line" aria-hidden="true" />}
                {item}
              </span>
            ))}
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-muted">{site.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects">
              View Projects <ArrowRight size={16} />
            </Button>
            <ResumeMenu />
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`} target="_blank" rel="noreferrer" aria-label="Email" className={iconLink}>
              <Mail size={17} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedinIcon size={17} />
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <GithubIcon size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <img
              src={site.photo}
              alt={site.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/placeholder.svg";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}