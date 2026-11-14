"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/projects/Gallery";

const FALLBACK = "/images/placeholder.svg";
const INTERVAL = 3000;

function handleImgError(e) {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK;
}

export default function Slideshow({ images, title }) {
  const total = images ? images.length : 0;
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hold, setHold] = useState(false);
  const [open, setOpen] = useState(false);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );

  const paused = userPaused || hold;

  useEffect(() => {
    if (total < 2 || paused || open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(next, INTERVAL);
    return () => clearTimeout(timer);
  }, [index, total, paused, open, next]);

  if (total === 0) return null;

  const navBtn =
    "absolute z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/90 text-fg transition-colors hover:bg-accent-soft";

  return (
    <>
      <div
        className="relative h-64 overflow-hidden rounded-xl border border-line bg-bg sm:h-80 md:h-96"
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setHold(false);
        }}
      >
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`${title} photo ${i + 1}`}
            aria-hidden={i !== index}
            onError={handleImgError}
            className={cn(
              "pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View photo ${index + 1} of ${total} larger`}
          className="absolute inset-0 cursor-zoom-in"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className={cn(navBtn, "left-3 top-1/2 -translate-y-1/2")}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className={cn(navBtn, "right-3 top-1/2 -translate-y-1/2")}
            >
              <ChevronRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              className={cn(navBtn, "right-3 top-3")}
            >
              {userPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>

            <div className="absolute bottom-1 left-1/2 z-10 flex -translate-x-1/2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={cn(
                      "block h-2 w-2 rounded-full border border-line transition-colors",
                      i === index ? "bg-accent" : "bg-surface"
                    )}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {open && (
        <Lightbox
          images={images}
          title={title}
          index={index}
          onClose={() => setOpen(false)}
          onChange={setIndex}
        />
      )}
    </>
  );
}