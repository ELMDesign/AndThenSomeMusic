import type { Metadata } from "next";
import { getPlaylistVideos, PLAYLIST_ID } from "../../lib/youtube";
import MediaGallery from "../MediaGallery";

export const metadata: Metadata = {
  title: "Media | And Then Some Music",
};

export default async function Page() {
  const videos = await getPlaylistVideos();

  return (
    <main className="flex-1 px-4 py-24 text-center lg:px-16">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Media</h1>
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
    </main>
  );
}
