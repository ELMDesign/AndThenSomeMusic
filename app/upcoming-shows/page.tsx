import type { Metadata } from "next";
import InstagramEmbed from "../InstagramEmbed";

export const metadata: Metadata = {
  title: "Upcoming Shows | And Then Some Music",
};

export default function Page() {
  return (
    <main className="flex-1 px-4 py-24 text-center lg:px-16">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Upcoming Shows</h1>
      <div className="mx-auto mt-10 w-full max-w-[540px]">
        <InstagramEmbed />
      </div>
    </main>
  );
}
