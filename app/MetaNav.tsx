"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

const LINKS = [
  { label: "Tips", href: "/tips" },
  { label: "Press Kit", href: "/press-kit" },
  { label: "Media", href: "/media" },
  { label: "Upcoming Shows", href: "/upcoming-shows" },
  { label: "Contact Us", href: "/contact" },
];

export default function MetaNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 w-full bg-black min-[1025px]:sticky min-[1025px]:top-0">
      <div className="flex w-full items-center justify-between px-4 lg:px-16">
        <SocialLinks dense />
        <nav aria-label="Main" className="hidden items-center justify-end gap-x-5 text-sm uppercase min-[1025px]:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="py-3 text-white transition-colors hover:text-[#f69500]">
              {l.label}
            </Link>
          ))}
        </nav>
        <IconButton
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          color="inherit"
          onClick={() => setOpen((o) => !o)}
          className="min-[1025px]:!hidden"
          sx={{ width: 44, height: 44 }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="absolute top-full right-4 flex min-w-48 flex-col items-end rounded-b-lg border border-white/15 bg-black px-5 py-2 shadow-lg lg:right-16 min-[1025px]:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase text-white transition-colors hover:text-[#f69500]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
