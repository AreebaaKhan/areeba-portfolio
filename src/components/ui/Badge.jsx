import { cn } from "@/lib/utils";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}