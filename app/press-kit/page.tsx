import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit | And Then Some Music",
};

export default function Page() {
  return (
    <main className="flex-1 px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Press Kit</h1>
      <p className="mt-10 text-white/80">Coming soon.</p>
    </main>
  );
}
