import type { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTIONS } from "@/lib/seo";
import PageLogo from "../PageLogo";
import Markdown from "../Markdown";
import InstagramEmbed from "../InstagramEmbed";

export const metadata: Metadata = {
  title: "Upcoming Shows | And Then Some Music",
  description: PAGE_DESCRIPTIONS.upcomingShows,
  alternates: { canonical: "/upcoming-shows" },
  openGraph: { title: "Upcoming Shows | And Then Some Music", description: PAGE_DESCRIPTIONS.upcomingShows, url: "/upcoming-shows", type: "website", siteName: "And Then Some Music", images: [OG_IMAGE] },
};

export default function Page() {
  return (
    <main className="flex-1 text-center">
      <PageLogo />
      <div className="px-4 py-16 lg:px-16">
        <Markdown slug="upcoming-shows" />
        <div className="mx-auto mt-10 w-full max-w-[540px]">
          <InstagramEmbed />
        </div>
      </div>
    </main>
  );
}
