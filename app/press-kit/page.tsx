import type { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTIONS } from "@/lib/seo";
import PageLogo from "../PageLogo";
import Markdown from "../Markdown";

export const metadata: Metadata = {
  title: "Press Kit | And Then Some Music",
  description: PAGE_DESCRIPTIONS.pressKit,
  alternates: { canonical: "/press-kit" },
  openGraph: { title: "Press Kit | And Then Some Music", description: PAGE_DESCRIPTIONS.pressKit, url: "/press-kit", type: "website", siteName: "And Then Some Music", images: [OG_IMAGE] },
};

export default function Page() {
  return (
    <main className="flex-1 text-center">
      <PageLogo />
      <div className="px-4 py-16 lg:px-16">
        <Markdown slug="press-kit" />
      </div>
    </main>
  );
}
