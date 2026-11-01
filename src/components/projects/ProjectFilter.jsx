"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function ProjectFilter() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              active === cat
                ? "border-accent bg-accent text-accent-fg"
                : "border-line text-muted hover:text-fg"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}