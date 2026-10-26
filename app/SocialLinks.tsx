"use client";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const LINKS = [
  { label: "Facebook", href: "https://facebook.com/andthensomemusic", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com/andthensomemusic", Icon: InstagramIcon },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=WsnIYd2D9Y0&list=PLzfS5RLSIjM7aNW5cjV-3p01xrAxpdLuf",
    Icon: YouTubeIcon,
  },
];

const hoverSx = { "&:hover": { color: "#f69500", backgroundColor: "transparent" } };

export default function SocialLinks() {
  return (
    <Stack direction="row" spacing={1} component="nav" aria-label="Social links" sx={{ justifyContent: "center", py: 3 }}>
      {LINKS.map(({ label, href, Icon }) => (
        <IconButton
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          color="inherit"
          sx={hoverSx}
        >
          <Icon />
        </IconButton>
      ))}
      <IconButton component={Link} href="/contact" aria-label="Contact" color="inherit" sx={hoverSx}>
        <EmailIcon />
      </IconButton>
    </Stack>
  );
}
