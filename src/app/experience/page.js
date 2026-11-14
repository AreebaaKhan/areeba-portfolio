import PageHeader from "@/components/layout/PageHeader";
import Timeline from "@/components/experience/Timeline";

export const metadata = {
  title: "Experience",
  description:
    "IT Operations internship at State Bank of Pakistan, a frontend role at DimensionD, and virtual programs with Deloitte Australia and Certura.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Experience"
        description="Internships, virtual programs and project work, listed from the most recent."
      />
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <Timeline />
      </section>
    </>
  );
}