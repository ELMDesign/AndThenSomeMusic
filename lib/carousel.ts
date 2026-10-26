import { readdir } from "node:fs/promises";
import path from "node:path";

const CAROUSEL_DIR = path.join(process.cwd(), "public", "carousel");
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

export async function getCarouselImages(): Promise<string[]> {
  try {
    const entries = await readdir(CAROUSEL_DIR, { recursive: true, withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && IMAGE_EXT.test(e.name))
      .map((e) => path.relative(CAROUSEL_DIR, path.join(e.parentPath, e.name)).split(path.sep).join("/"))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((rel) => `/carousel/${rel.split("/").map(encodeURIComponent).join("/")}`);
  } catch {
    return [];
  }
}
