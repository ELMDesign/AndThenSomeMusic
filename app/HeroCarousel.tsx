"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useCallback, useEffect, useRef, useState } from "react";

const INTERVAL_MS = 5000;
const FADE_MS = 900;
const SWIPE_PX = 40;

export default function HeroCarousel({ images: IMAGES }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const count = IMAGES.length;

  // On desktop, scale the h1 so its width matches the h2 (which also sets the logo width).
  useEffect(() => {
    const fit = () => {
      const h1 = h1Ref.current;
      const h2 = h2Ref.current;
      if (!h1 || !h2) return;
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        h1.style.fontSize = "";
        return;
      }
      h1.style.fontSize = "100px";
      const natural = h1.scrollWidth;
      if (natural > 0) h1.style.fontSize = `${(100 * h2.offsetWidth) / natural}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduced || count < 2) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count, active]);

  // Only the current slide and its neighbours get a src, so the rest stay unloaded.
  const shouldLoad = (i: number) => {
    const distance = Math.abs(i - active);
    return Math.min(distance, count - distance) <= 1;
  };

  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-black"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => {
        pointerStartX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (pointerStartX.current === null) return;
        const dx = e.clientX - pointerStartX.current;
        pointerStartX.current = null;
        if (Math.abs(dx) > SWIPE_PX) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      {IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={shouldLoad(i) ? src : undefined}
          alt="And Then Some Music performing live"
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          aria-hidden={i !== active}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: i === active ? 1 : 0, transition: `opacity ${FADE_MS}ms ease-in-out` }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center bg-black/40 px-4 text-center">
        <div className="flex flex-col items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="And Then Some Music"
            className="h-[clamp(72px,22vw,150px)] w-[clamp(72px,22vw,150px)] object-contain md:h-[150px] md:w-[150px] lg:aspect-square lg:h-auto lg:w-0 lg:min-w-full"
          />
          <h1
            ref={h1Ref}
            className="text-[24px] font-bold tracking-tight lg:w-0 lg:min-w-full lg:whitespace-nowrap"
          >
            Bringing the Groove
          </h1>
          <h2 ref={h2Ref} className="text-[18px] uppercase tracking-tight text-[#f69500] lg:w-max lg:whitespace-nowrap">
            Jazzy funky soulful jams from Chicago
          </h2>
          <button
            type="button"
            aria-label="Scroll to main content"
            onClick={() => {
              const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              document.getElementById("main-content")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
            }}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:text-[#f69500] focus-visible:text-[#f69500]"
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 36 }} />
          </button>
        </div>
      </div>

      <p className="pointer-events-none absolute right-3 bottom-2 z-[3] flex h-6 items-center text-[11px] text-white/80 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
        Photos: Katia Jackson
      </p>

      <div className="absolute inset-x-0 bottom-2 z-[3] flex justify-center" role="tablist" aria-label="Slides">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => go(i)}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className="block h-2 w-2 rounded-full transition-colors"
              style={{ backgroundColor: i === active ? "#f69500" : "rgba(255,255,255,0.5)" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
