import BookingsButton from "./BookingsButton";
import HeroCarousel from "./HeroCarousel";
import InstagramEmbed from "./InstagramEmbed";
import MailingListForm from "./MailingListForm";
import Markdown from "./Markdown";
import SocialLinks from "./SocialLinks";
import TipJarButton from "./TipJarButton";
import { getCarouselImages } from "@/lib/carousel";
import { getInstagramPosts } from "@/lib/instagram";

const INSTAGRAM_URL = "https://www.instagram.com/andthensomemusic/";

export default async function Home() {
  const posts = await getInstagramPosts();
  const carouselImages = await getCarouselImages();

  return (
    <main className="flex-1">
      <HeroCarousel images={carouselImages} />

      <div
        id="main-content"
        className="grid w-full grid-cols-1 items-start lg:items-stretch gap-8 px-4 lg:px-16 pt-2 lg:pt-12 pb-24 lg:grid-cols-3"
      >
        <section className="lg:col-span-2 lg:flex">
          <article className="lg:w-full space-y-6 rounded-lg bg-[#383838] p-8 leading-relaxed text-white shadow-lg sm:p-12">
          <Markdown slug="home" variant="article" />
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <BookingsButton />
            <TipJarButton />
          </div>
        </article>
        </section>

        <aside className="w-full text-center lg:col-span-1">
          <MailingListForm />
          <h3 id="upcoming-shows" className="mt-10 mb-4 scroll-mt-4 text-2xl min-[1240px]:text-[30px] uppercase text-[#f69500]">Upcoming Shows</h3>
          <InstagramEmbed />
        </aside>
      </div>

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
          <p className="text-center text-white">
            Follow us on{" "}
            <a className="underline" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            .
          </p>
        )}
      </section>
      <SocialLinks />
    </main>
  );
}
