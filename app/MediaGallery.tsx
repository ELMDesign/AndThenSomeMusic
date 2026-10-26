"use client";

import { useState } from "react";
import type { Video } from "../lib/youtube";

export default function MediaGallery({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(videos[0]);

  return (
    <div>
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          key={current.id}
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${current.id}?rel=0`}
          title={current.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <h2 className="mt-4 text-xl">{current.title}</h2>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {videos.map((v) => (
          <li key={v.id}>
            <button
              type="button"
              onClick={() => {
                setCurrent(v);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={v.id === current.id}
              className={`group block w-full cursor-pointer text-left ${v.id === current.id ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className={`aspect-video w-full rounded-lg object-cover ring-2 ${v.id === current.id ? "ring-[#f69500]" : "ring-transparent group-hover:ring-white/40"}`}
              />
              <span className="mt-2 block text-sm leading-snug">{v.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
