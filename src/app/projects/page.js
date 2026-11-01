import PageHeader from "@/components/layout/PageHeader";
import ProjectFilter from "@/components/projects/ProjectFilter";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      {/* <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="Backend systems, AI applications and data tools, with demo videos, screenshots and source code. Open any project to see what it does and how it was built."
      /> */}
    <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="From backend systems to AI applications and data tools. Open any project to read the objective, the result and the tech behind it with a walkthrough to watch, visuals to browse and links to the work itself."
      />
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <ProjectFilter />
      </section>
    </>
  );
}