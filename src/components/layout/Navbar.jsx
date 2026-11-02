"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import ContactPopover from "./ContactPopover";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors hover:text-fg",
                isActive(item.href) ? "bg-accent-soft text-fg" : "text-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactPopover />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-bg px-5 py-3 lg:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm",
                isActive(item.href) ? "bg-accent-soft text-fg" : "text-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}