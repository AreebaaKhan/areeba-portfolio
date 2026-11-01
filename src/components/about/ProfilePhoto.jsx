"use client";

import { site } from "@/data/site";

export default function ProfilePhoto() {
  return (
    <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
      <img
        src={site.photo}
        alt={site.name}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/images/placeholder.svg";
        }}
      />
    </div>
  );
}