import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

const variants = {
  primary: "bg-accent text-accent-fg hover:opacity-90",
  outline: "border border-line text-fg hover:bg-accent-soft",
};

export default function Button({ href, variant = "primary", className, children, ...props }) {
  const cls = cn(base, variants[variant], className);

  if (!href) {
    return (
      <button className={cls} {...props}>
        {children}
      </button>
    );
  }

  const isWeb = href.startsWith("http");
  const isFile = href.startsWith("mailto:") || href.startsWith("/resume");

  if (isWeb || isFile) {
    return (
      <a
        href={href}
        className={cls}
        {...(isWeb ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}