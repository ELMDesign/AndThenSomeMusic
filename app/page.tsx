import BookingsButton from "./BookingsButton";
import MailingListForm from "./MailingListForm";
import SocialLinks from "./SocialLinks";
import { getInstagramPosts } from "@/lib/instagram";

const INSTAGRAM_URL = "https://www.instagram.com/andthensomemusic/";

export default async function Home() {
  const posts = await getInstagramPosts();

  return (
    <main className="flex-1">
      <SocialLinks />
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="And Then Some Music" className="h-[150px] w-[150px] object-contain" />
      </div>
      <section className="px-6 pt-4 pb-12 text-center">
        <h1 className="text-[24px] font-bold tracking-tight">Bringing the Groove</h1>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <article className="space-y-6 rounded-lg bg-[#383838] p-8 leading-relaxed text-white shadow-lg sm:p-12">
          <h2 className="text-3xl uppercase text-[#f69500]">About the Band</h2>
          <p>
            Formed by guitarist Erik Oldman and drummer/percussionist Paul Abella, the ensemble skips the academic
            jazz route to focus on groove with a bend for experimentation. The band&apos;s core repertoire draws
            heavily from the driving rhythms of <em>James Brown</em>, <em>Funkadelic</em>, and{" "}
            <em>Herbie Hancock</em>, alongside instrumental arrangements of classic Stax/Volt material from{" "}
            <em>Booker T. &amp; the M.G.&apos;s</em> and <em>Isaac Hayes</em>. They lean into the gritty soul-jazz of{" "}
            <em>Eddie Harris</em> and <em>Grant Green</em>, while completely upending expectations with heavy, funky
            reinterpretations of classic tracks from the likes of <em>Black Sabbath</em> and <em>Fugazi</em>.
          </p>
          <p>
            Currently, the band is hosting a <strong>Jazz Centennial Monthly Residency</strong>, dedicating full-night
            performances to the 1926 birth year celebrations of jazz icons <strong>Miles Davis</strong>,{" "}
            <strong>John Coltrane</strong>, <strong>Brother Jack McDuff</strong>, and <strong>Lou Donaldson</strong>
            —filtering their legendary catalogs through the band&apos;s heavy, groove-first lens.
          </p>
          <h3 className="pt-2 text-2xl uppercase text-[#f69500]">The Core Lineup</h3>
          <ul className="list-disc space-y-4 pl-6">
            <li>
              <strong>Erik Oldman (Guitar &amp; Synth):</strong> A veteran of the Chicago instrumental scene, Erik is
              a founding member of <em>Sons of Ra</em>, the dark ambient drone duo{" "}
              <em>Mare Crisium</em>, and free jazz fusion ensemble <em>Late Model</em>. He shapes the band&apos;s sonic
              atmosphere with heavy rhythmic phrasing, bass-heavy textures, and vintage synth layers.
            </li>
            <li>
              <strong>Paul Abella (Drums and Percussion):</strong> Paul brings a sharp, acoustic drive to the core rhythm section,
              drawing from his work leading the <em>Paul Abella Trio</em> and the punk-free-jazz ensemble, the{" "}
              <em>Questionable Decisions</em>. Paul is also the Music Director of WDCB 90.9FM, Chicago&apos;s Home for
              Jazz.
            </li>
            <li>
              <strong>Randy Bufanda (Saxophones):</strong> A versatile woodwind player and
              essential session saxophonist, Randy performs regularly across the city and is a member of{" "}
              <em>Lost Pyramids</em> and <em>Oh God, Oh No!</em>, anchoring the band&apos;s front line across multiple
              horns.
            </li>
          </ul>
          <p>
            The band is augmented by a regular recurring cast of players of Chicago&apos;s top shelf musicians from
            the jazz, jam, creative music, and rock scenes.
          </p>
          <div className="flex justify-center pt-4">
            <BookingsButton />
          </div>
        </article>
      </section>

      <section className="px-6 pb-24 text-center">
        <div className="mx-auto w-full max-w-[700px]">
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
