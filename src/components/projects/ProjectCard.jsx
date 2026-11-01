"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const videoRef = useRef(null);
  const [hover, setHover] = useState(false);

  function enter() {
    setHover(true);
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }

  function leave() {
    setHover(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  const shownStack = project.stack.slice(0, 4);
  const extra = project.stack.length - shownStack.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden bg-bg">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder.svg";
          }}
        />

        {project.preview && (
          <video
            ref={videoRef}
            src={project.preview}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {project.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
            {project.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
          />
        </div>

        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {shownStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              +{extra}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}