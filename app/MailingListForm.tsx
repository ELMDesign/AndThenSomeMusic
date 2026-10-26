"use client";

import { useEffect, useRef } from "react";

const KIT_HOST = "https://azure-taurus-music-llc.kit.com";

export default function MailingListForm({ uid = "8b49a721af" }: { uid?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = uid;
    script.src = `${KIT_HOST}/${uid}/index.js`;
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, [uid]);

  return <div ref={ref} className="flex w-full justify-center" />;
}
