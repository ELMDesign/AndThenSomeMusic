import MailingListForm from "./MailingListForm";
import { getInstagramPosts } from "@/lib/instagram";

const INSTAGRAM_URL = "https://www.instagram.com/andthensomemusic/";

export default async function Home() {
  const posts = await getInstagramPosts();

  return (
    <main className="flex-1">
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">And Then Some Music</h1>
        <p className="mt-4 text-lg text-neutral-600">New music is on the way. Join the list to hear first.</p>
        <div className="mt-10">
          <MailingListForm />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            @andthensomemusic
          </a>
        </h2>
        {posts.length > 0 ? (
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {posts.map((p) => (
              <li key={p.id}>
                <a href={p.permalink} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imageUrl}
                    alt={p.caption.slice(0, 100) || "Instagram post"}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-neutral-600">
            Follow us on{" "}
            <a className="underline" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            .
          </p>
        )}
      </section>
    </main>
  );
}
