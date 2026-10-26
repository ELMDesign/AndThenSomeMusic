export type Video = { id: string; title: string };

const PLAYLIST_ID = "PLzfS5RLSIjM7aNW5cjV-3p01xrAxpdLuf";

async function fromApi(key: string): Promise<Video[]> {
  const videos: Video[] = [];
  let pageToken = "";
  do {
    const url =
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50" +
      `&playlistId=${PLAYLIST_ID}&key=${key}${pageToken ? `&pageToken=${pageToken}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`YouTube API ${res.status}`);
    const data = await res.json();
    for (const item of data.items ?? []) {
      const s = item.snippet;
      if (s?.resourceId?.videoId && s.title !== "Private video" && s.title !== "Deleted video") {
        videos.push({ id: s.resourceId.videoId, title: s.title });
      }
    }
    pageToken = data.nextPageToken ?? "";
  } while (pageToken);
  return videos;
}

// The feed only returns the 15 most recent videos, so it is a stopgap without an API key.
async function fromFeed(): Promise<Video[]> {
  const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`);
  if (!res.ok) throw new Error(`YouTube feed ${res.status}`);
  const xml = await res.text();
  const decode = (s: string) =>
    s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  return [...xml.matchAll(/<entry>[\s\S]*?<yt:videoId>(.*?)<\/yt:videoId>[\s\S]*?<title>(.*?)<\/title>/g)].map((m) => ({
    id: m[1],
    title: decode(m[2]),
  }));
}

export async function getPlaylistVideos(): Promise<Video[]> {
  try {
    const key = process.env.YOUTUBE_API_KEY;
    return key ? await fromApi(key) : await fromFeed();
  } catch {
    return [];
  }
}

export { PLAYLIST_ID };
