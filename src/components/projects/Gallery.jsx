"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FALLBACK = "/images/placeholder.svg";

function handleImgError(e) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK;
}

function Tile({ src, alt, onClick, extra, className, flat }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={extra > 0 ? `View all photos, ${extra} more` : `View ${alt}`}
      className={cn(
        "group relative block overflow-hidden bg-bg transition-colors",
        flat ? "hover:opacity-90" : "rounded-xl border border-line hover:border-accent",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={handleImgError}
      />
      {extra > 0 && (
        <span className="absolute inset-0 flex items-center justify-center bg-bg/70 font-display text-2xl font-semibold text-fg">
          +{extra}
        </span>
      )}
    </button>
  );
}

function Lightbox({ images, title, index, onClose, onChange }) {
  const total = images.length;
  const [touchX, setTouchX] = useState(null);

  const prev = useCallback(
    () => onChange((index - 1 + total) % total),
    [index, total, onChange]
  );
  const next = useCallback(
    () => onChange((index + 1) % total),
    [index, total, onChange]
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
    };
  }, [onClose, prev, next]);

  const navBtn =
    "absolute top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:bg-accent-soft";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      onClick={onClose}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const diff = e.changedTouches[0].clientX - touchX;
        if (diff > 50) prev();
        if (diff < -50) next();
        setTouchX(null);
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-sm"
    >
      <p className="absolute left-5 top-5 text-sm text-muted">
        {index + 1} / {total}
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:bg-accent-soft"
      >
        <X size={18} />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className={cn(navBtn, "left-3 sm:left-6")}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className={cn(navBtn, "right-3 sm:right-6")}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={`${title} photo ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        onError={handleImgError}
        className="max-h-[82vh] max-w-full rounded-xl border border-line object-contain"
      />
    </div>
  );
}

export default function Gallery({ images, title, variant = "grid", limit }) {
  const [open, setOpen] = useState(null);

  if (!images || images.length === 0) return null;

  const isStack = variant === "stack";
  const max = limit || (isStack ? 4 : 6);
  const shown = images.slice(0, max);
  const extra = images.length - shown.length;
  const count = shown.length;

  const tiles = shown.map((src, i) => (
    <Tile
      key={`${src}-${i}`}
      src={src}
      alt={`${title} photo ${i + 1}`}
      onClick={() => setOpen(i)}
      extra={i === count - 1 ? extra : 0}
      flat={isStack}
      className={cn(
        isStack ? "aspect-[4/3] lg:aspect-auto" : "aspect-video",
        isStack && count === 3 && i === 0 && "col-span-2"
      )}
    />
  ));

  const stackCols = count <= 2 ? "grid-cols-1" : "grid-cols-2";
  const stackRows = count <= 2 ? count : 2;

  return (
    <>
      {isStack ? (
        <div
          style={{ "--rows": stackRows }}
          className={cn(
            "grid h-full gap-px bg-line lg:min-h-[14rem] lg:[grid-template-rows:repeat(var(--rows),minmax(0,1fr))]",
            stackCols
          )}
        >
          {tiles}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">{tiles}</div>
      )}

      {open !== null && (
        <Lightbox
          images={images}
          title={title}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
    </>
  );
}