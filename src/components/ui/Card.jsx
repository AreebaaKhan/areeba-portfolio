import { cn } from "@/lib/utils";

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}