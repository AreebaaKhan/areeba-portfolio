import { Award } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { teaching } from "@/data/teaching";

export const metadata = { title: "Global Classroom" };

export default function GlobalClassroomPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stanford Code in Place"
        title="Global Classroom"
        description="Volunteer teaching and mentoring with Stanford's Code in Place, along with private tutoring in mathematics, physics and computer science."
      />
      <section className="mx-auto max-w-4xl space-y-6 px-5 pb-24">
        {teaching.map((item, i) => (
          <Reveal key={item.role + item.program} delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg font-semibold leading-snug md:text-xl">
                    {item.role}
                  </h2>
                  {item.program && <p className="mt-1 text-muted">{item.program}</p>}
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <p className="text-sm text-muted">{item.dates}</p>
                  {item.status && <Badge>{item.status}</Badge>}
                </div>
              </div>

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

              {item.certificate && (
                <div className="mt-6">
                  <Button href={item.certificate} variant="outline">
                    <Award size={16} /> View Certificate
                  </Button>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}