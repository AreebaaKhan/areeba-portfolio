"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.getAttribute("data-theme") || "dark";
}

function getServerSnapshot() {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition-colors hover:bg-accent-soft"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}