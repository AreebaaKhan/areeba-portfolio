"use client";

function Pic({ src, title, index, stacked }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className={`relative block overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent ${
        stacked
          ? "aspect-video lg:aspect-auto lg:min-h-[90px] lg:flex-1"
          : "aspect-video rounded-2xl"
      }`}
    >
      <img
        src={src}
        alt={`${title} picture ${index + 1}`}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/images/placeholder.svg";
        }}
      />
    </a>
  );
}

export default function Gallery({ images, title, variant = "grid" }) {
  if (!images || images.length === 0) return null;

  if (variant === "stack") {
    return (
      <div className="grid grid-cols-3 gap-3 lg:flex lg:flex-col">
        {images.map((src, i) => (
          <Pic key={`${src}-${i}`} src={src} title={title} index={i} stacked />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((src, i) => (
        <Pic key={`${src}-${i}`} src={src} title={title} index={i} />
      ))}
    </div>
  );
}