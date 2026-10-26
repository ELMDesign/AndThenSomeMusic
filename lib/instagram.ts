export type InstagramPost = {
  id: string;
  imageUrl: string;
  permalink: string;
  caption: string;
};

type GraphMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

/**
 * Fetches recent posts for @andthensomemusic at build time (the site is a
 * static export). Requires INSTAGRAM_ACCESS_TOKEN; returns [] when absent.
 */
export async function getInstagramPosts(limit = 9): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${encodeURIComponent(token)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const json = (await res.json()) as { data?: GraphMedia[] };
    return (json.data ?? [])
      .map((m) => ({
        id: m.id,
        imageUrl: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        permalink: m.permalink,
        caption: m.caption ?? "",
      }))
      .filter((p) => p.imageUrl);
  } catch {
    return [];
  }
}
