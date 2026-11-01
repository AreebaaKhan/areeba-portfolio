"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-accent-soft hover:text-fg";

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

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button href={site.resume} variant="outline" download>
              <Download size={16} /> Resume
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}>
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