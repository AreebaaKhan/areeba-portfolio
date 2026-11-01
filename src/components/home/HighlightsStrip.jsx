import Link from "next/link";
import { Trophy, GraduationCap, Landmark } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

const icons = {
  trophy: Trophy,
  graduation: GraduationCap,
  landmark: Landmark,
};

export default function HighlightsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {site.highlights.map((item, i) => {
          const Icon = icons[item.icon] || Trophy;
          return (
            <Reveal key={item.title + item.text} delay={i * 0.05}>
              <Link
                href={item.href}
                className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display text-base font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}