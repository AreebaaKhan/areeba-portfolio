import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import ProfilePhoto from "@/components/about/ProfilePhoto";
import { aboutText, education, skillGroups, languages } from "@/data/skills";

export const metadata = { title: "About" };

const headingCls =
  "font-display text-3xl font-semibold tracking-tight md:text-5xl";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
        <div className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h1 className={headingCls}>About me</h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {aboutText.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
            <ProfilePhoto />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className={`${headingCls} mb-8`}>Education</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.05}>
              <Card className="h-full">
                <p className="text-sm text-muted">{item.dates}</p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {item.degree}
                  {item.note ? `, ${item.note}` : ""}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className={`${headingCls} mb-8`}>Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <Card className="h-full">
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className={`${headingCls} mb-8`}>Languages</h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-2xl border border-line bg-surface px-5 py-3"
            >
              <p className="font-display text-sm font-semibold">{lang.name}</p>
              <p className="text-xs text-muted">{lang.level}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}