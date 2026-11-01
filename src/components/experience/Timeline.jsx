import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

export default function Timeline() {
  return (
    <ol className="ml-2 border-l border-line">
      {experience.map((item, i) => (
        <li key={item.role + item.org} className="relative pb-10 pl-8 last:pb-0">
          <span
            className="absolute -left-[6px] top-7 h-3 w-3 rounded-full border-2 border-bg bg-accent"
            aria-hidden="true"
          />
          <Reveal delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg font-semibold leading-snug md:text-xl">
                    {item.role}
                  </h2>
                  <p className="mt-1 text-muted">
                    {item.org}
                    {item.location ? `, ${item.location}` : ""}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <p className="text-sm text-muted">{item.dates}</p>
                  {item.type && <Badge>{item.type}</Badge>}
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>
                      {b.text}
                      {b.href && (
                        <>
                          {" "}
                          <Link
                            href={b.href}
                            className="inline-flex items-center gap-1 whitespace-nowrap text-accent underline-offset-4 hover:underline"
                          >
                            {b.linkLabel || "View project"}
                            <ArrowUpRight size={14} />
                          </Link>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {item.skills && item.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}