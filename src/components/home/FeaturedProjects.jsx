import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Featured
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
            Projects
          </h2>
        </div>
        <Button href="/projects" variant="outline">
          View all projects <ArrowRight size={16} />
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}