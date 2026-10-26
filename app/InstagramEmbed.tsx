"use client";

import { useEffect, useRef } from "react";

const POST_URL = "https://www.instagram.com/p/De7fzSQBvqT/";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Instagram replaces the blockquote with an iframe, so it's injected outside React's control.
    el.innerHTML = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${POST_URL}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);margin:1px;max-width:none;min-width:260px;padding:0;width:calc(100% - 2px);"><div style="padding:16px;"><a href="${POST_URL}" style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;text-decoration:none;" target="_blank" rel="noopener noreferrer">View this post on Instagram</a></div></blockquote>`;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

  return <div ref={ref} className="relative w-full max-w-full min-w-0" />;
}
