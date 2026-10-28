import type { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTIONS } from "@/lib/seo";
import PageLogo from "../PageLogo";
import Markdown from "../Markdown";
import { getPlaylistVideos, PLAYLIST_ID } from "../../lib/youtube";
import MediaGallery from "../MediaGallery";

export const metadata: Metadata = {
  title: "Media | And Then Some Music",
  description: PAGE_DESCRIPTIONS.media,
  alternates: { canonical: "/media" },
  openGraph: { title: "Media | And Then Some Music", description: PAGE_DESCRIPTIONS.media, url: "/media", type: "website", siteName: "And Then Some Music", images: [OG_IMAGE] },
};

export default async function Page() {
  const videos = await getPlaylistVideos();

  return (
    <main className="flex-1 text-center">
      <PageLogo />
      <div className="px-4 py-16 lg:px-16">
        <Markdown slug="media" />
        <div className="mt-10 text-left">
          {videos.length > 0 ? (
            <MediaGallery videos={videos} />
          ) : (
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                title="And Then Some Music YouTube playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
