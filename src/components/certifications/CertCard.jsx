import { Award } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CertCard({ cert }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-base font-semibold leading-snug md:text-lg">
            {cert.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
        </div>
        <p className="text-sm text-muted">
          {cert.date}
          {cert.expires ? ` (expires ${cert.expires})` : ""}
        </p>
      </div>

      {cert.badge && (
        <div className="mt-3">
          <Badge>{cert.badge}</Badge>
        </div>
      )}

      {cert.bullets && cert.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {cert.bullets.map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      )}

      {cert.skills && cert.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-medium text-fg"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {cert.link && (
        <div className="mt-auto pt-5">
          <Button href={cert.link} variant="outline">
            <Award size={16} /> View Certificate
          </Button>
        </div>
      )}
    </div>
  );
}