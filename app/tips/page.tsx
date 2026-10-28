import type { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTIONS } from "@/lib/seo";
import PageLogo from "../PageLogo";
import Markdown from "../Markdown";
import PayPalTip from "../PayPalTip";

export const metadata: Metadata = {
  title: "Tips | And Then Some Music",
  description: PAGE_DESCRIPTIONS.tips,
  alternates: { canonical: "/tips" },
  openGraph: { title: "Tips | And Then Some Music", description: PAGE_DESCRIPTIONS.tips, url: "/tips", type: "website", siteName: "And Then Some Music", images: [OG_IMAGE] },
};

export default function Page() {
  return (
    <main className="flex-1 text-center">
      <PageLogo />
      <div className="px-4 py-16 lg:px-16">
        <Markdown slug="tips" />
        <PayPalTip />
      </div>
    </main>
  );
}
