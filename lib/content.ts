import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { Marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "public", "content");
const SLUG = /^[a-z0-9-]+$/;
const marked = new Marked({ gfm: true });

/** Plain-text sentences from the intro paragraphs of public/content/<slug>.md (before the first h3). */
export function getIntroSentences(slug: string): string[] {
  if (!SLUG.test(slug)) throw new Error(`Invalid content slug: ${slug}`);
  const markdown = readFileSync(path.join(CONTENT_DIR, `${slug}.md`), "utf8");
  const intro = markdown.split(/^###\s/m)[0].replace(/^#+\s.*$/gm, "");
  const text = intro
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(Boolean);
}

/** Trims to a word boundary within max characters, adding an ellipsis when cut. */
export function truncate(text: string, max = 158): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

/** Reads public/content/<slug>.md and renders it to HTML. Runs on the server at build time. */
export async function getContentHtml(slug: string): Promise<string> {
  if (!SLUG.test(slug)) throw new Error(`Invalid content slug: ${slug}`);
  const markdown = await readFile(path.join(CONTENT_DIR, `${slug}.md`), "utf8");
  return marked.parse(markdown, { async: false });
}
