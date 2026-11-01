import { Award } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Gallery from "@/components/projects/Gallery";
import { LinkedinIcon } from "@/components/ui/Icons";
import { achievements, linkedinPosts } from "@/data/achievements";

export const metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Achievements"
        description="Competition results and recognition, with links to the related posts on LinkedIn."
      />

      <section className="mx-auto max-w-4xl space-y-8 px-5 pb-16">
        {achievements.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05}>
            <article className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <Badge>{item.label}</Badge>
              <h2 className="mt-4 font-display text-xl font-semibold leading-snug md:text-2xl">
                {item.title}
              </h2>
              {item.event && <p className="mt-2 text-muted">{item.event}</p>}

              {item.details && (
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.details}</p>
              )}

              {item.idea && (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-fg">Idea: </span>
                  {item.idea}
                </p>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-5 space-y-3">
                {item.bullets.map((text, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              {item.images && item.images.length > 0 && (
                <div className="mt-6">
                  <Gallery images={item.images} title={item.title} />
                </div>
              )}

              {item.certificate && (
                <div className="mt-6">
                  <Button href={item.certificate} variant="outline">
                    <Award size={16} /> View Certificate
                  </Button>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24">
        <h2 className="mb-5 font-display text-xl font-semibold">On LinkedIn</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {linkedinPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <div className="flex h-full flex-col justify-between gap-5 rounded-2xl border border-line bg-surface p-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">{post.note}</p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug">
                    {post.title}
                  </h3>
                </div>
                {post.url && (
                  <Button href={post.url} variant="outline" className="w-full">
                    <LinkedinIcon size={15} /> See details on LinkedIn
                  </Button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}