import PageHeader from "@/components/layout/PageHeader";
import CertCard from "@/components/certifications/CertCard";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/data/certifications";

export const metadata = { title: "Certifications" };

function Column({ title, items }) {
  return (
    <div>
      <h2 className="mb-5 font-display text-xl font-semibold">{title}</h2>
      <div className="space-y-5">
        {items.map((cert, i) => (
          <Reveal key={cert.title + cert.issuer} delay={i * 0.05}>
            <CertCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const professional = certifications.filter((c) => c.group === "professional");
  const workshops = certifications.filter((c) => c.group === "workshop");

  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Certifications"
        description="Professional certifications, workshops and training, listed from the most recent."
      />
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Column title="Professional Certifications" items={professional} />
          <Column title="Workshops and Training" items={workshops} />
        </div>
      </section>
    </>
  );
}