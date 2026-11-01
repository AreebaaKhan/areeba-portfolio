import Hero from "@/components/home/Hero";
import HighlightsStrip from "@/components/home/HighlightsStrip";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsStrip />
      <FeaturedProjects />
    </>
  );
}