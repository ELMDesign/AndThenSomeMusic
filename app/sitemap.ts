import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const paths = ["", "/tips", "/press-kit", "/media", "/upcoming-shows", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: p === "" || p === "/upcoming-shows" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.6,
  }));
}
