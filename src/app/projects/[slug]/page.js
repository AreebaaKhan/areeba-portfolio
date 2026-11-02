import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import DriveVideo from "@/components/ui/DriveVideo";
import Gallery from "@/components/projects/Gallery";
import { GithubIcon } from "@/components/ui/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? project.title : "Project" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasVideo = Boolean(project.driveId);
  const hasPics = project.gallery && project.gallery.length > 0;

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-10 md:pt-14">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={16} /> All projects
      </Link>

      <header className="mt-8">
        {(project.badge || project.role) && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.badge && <Badge>{project.badge}</Badge>}
            {project.role && <Badge>{project.role}</Badge>}
          </div>
        )}
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.github && (
          <div className="mt-6">
            <Button href={project.github}>
              <GithubIcon size={16} /> View on GitHub
            </Button>
          </div>
        )}
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Objective
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.objective}</p>
        </Card>
        <Card>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Result
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{project.result}</p>
        </Card>
      </section>

      {(hasVideo || hasPics) && (
        <section className="mt-12">
          {hasVideo ? (
            <div>
              <div className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[3fr_2fr]">
                <DriveVideo id={project.driveId} title={project.title} embedded />
                {hasPics && (
                  <div className="border-t border-line lg:border-l lg:border-t-0">
                    <Gallery
                      images={project.gallery}
                      title={project.title}
                      variant="stack"
                    />
                  </div>
                )}
              </div>
              <a
                href={`https://drive.google.com/file/d/${project.driveId}/view`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                Watch on Google Drive
              </a>
            </div>
          ) : (
            <Gallery images={project.gallery} title={project.title} />
          )}
        </section>
      )}
    </article>
  );
}