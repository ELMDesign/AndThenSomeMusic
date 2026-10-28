import { getContentHtml } from "@/lib/content";

type Props = { slug: string; variant?: "article" | "page" };

// Content comes from our own files in public/content, rendered at build time.
export default async function Markdown({ slug, variant = "page" }: Props) {
  const html = await getContentHtml(slug);
  return <div className={`md-${variant}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
