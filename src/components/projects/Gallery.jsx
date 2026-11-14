
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FALLBACK = "/images/placeholder.svg";

function handleImgError(e) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK;
}

function Tile({
  src,
  alt,
  onClick,
  extra = 0,
  className = "",
  flat = false,
  contain = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        extra > 0
          ? `View all photos, ${extra} more`
          : `View ${alt}`
      }
      className={cn(
        "group relative block min-h-0 min-w-0 overflow-hidden bg-bg transition-colors",
        flat
          ? "hover:opacity-90"
          : "rounded-xl border border-line hover:border-accent",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full",
          contain ? "object-contain" : "object-cover"
        )}
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

export function Lightbox({
  images,
  title,
  index,
  onClose,
  onChange,
}) {
  const total = images.length;
  const [touchX, setTouchX] = useState(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    return () => {
      if (opener && typeof opener.focus === "function") opener.focus();
    };
  }, []);

  const prev = useCallback(() => {
    if (index > 0) onChange(index - 1);
  }, [index, onChange]);

  const next = useCallback(() => {
    if (index < total - 1) onChange(index + 1);
  }, [index, total, onChange]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();

      if (e.key === "Tab" && dialogRef.current) {
        const items = Array.from(
          dialogRef.current.querySelectorAll("button:not([disabled])")
        );
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;

        if (!dialogRef.current.contains(active)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = oldOverflow;
    };
  }, [onClose, prev, next]);

  const navBtn =
    "absolute top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors hover:bg-accent-soft";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      onClick={onClose}
      onTouchStart={(e) => {
        setTouchX(e.touches[0].clientX);
      }}
      onTouchEnd={(e) => {
        if (touchX === null) return;

        const diff =
          e.changedTouches[0].clientX - touchX;

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
        ref={closeRef}
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
            disabled={index === 0}
            className={cn(navBtn, "left-3 sm:left-6", index === 0 && "invisible")}
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
            disabled={index === total - 1}
            className={cn(navBtn, "right-3 sm:right-6", index === total - 1 && "invisible")}
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

export default function Gallery({
  images,
  title,
  variant = "grid",
  limit,
}) {
  const [open, setOpen] = useState(null);

  if (!images || images.length === 0) {
    return null;
  }

  const isCover = variant === "cover";
  const isStack = variant === "stack";

  const max = limit || (isCover ? 1 : isStack ? 4 : 6);
  const shown = images.slice(0, max);
  const extra = images.length - shown.length;
  const count = shown.length;

  const tiles = shown.map((src, i) => (
    <Tile
      key={`${src}-${i}`}
      src={src}
      alt={`${title} photo ${i + 1}`}
      onClick={() => setOpen(i)}
      extra={isCover ? 0 : i === count - 1 ? extra : 0}
      flat={isCover || isStack}
      contain={isCover}
      className={cn(
        isCover || isStack
          ? "h-full w-full"
          : "aspect-video",
        isStack && count === 3 && i === 0 && "col-span-2"
      )}
    />
  ));

  const stackCols = count === 1 ? 1 : 2;
  const stackRows = count <= 2 ? 1 : 2;

  return (
    <>
      {isCover ? (
        <div className="grid h-full w-full grid-cols-1 grid-rows-1">
          {tiles}
        </div>
      ) : isStack ? (
        // Compact gallery with 1px dividers
        <div
          className="grid h-full w-full gap-px bg-line"
          style={{
            gridTemplateColumns: `repeat(${stackCols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${stackRows}, minmax(0, 1fr))`,
          }}
        >
          {tiles}
        </div>
      ) : (
        // Regular gallery for other usage
        <div className="grid gap-4 sm:grid-cols-2">
          {tiles}
        </div>
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
