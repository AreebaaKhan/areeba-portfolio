import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24 md:py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">
          <ArrowLeft size={16} /> Back to home
        </Button>
        <Button href="/projects" variant="outline">
          View projects
        </Button>
      </div>
    </section>
  );
}