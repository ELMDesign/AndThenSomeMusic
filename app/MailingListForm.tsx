"use client";

import { useEffect, useRef } from "react";

const KIT_UID = "8b49a721af";
const KIT_SRC = `https://azure-taurus-music-llc.kit.com/${KIT_UID}/index.js`;

export default function MailingListForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = KIT_UID;
    script.src = KIT_SRC;
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="w-full max-w-xl mx-auto" />;
}
