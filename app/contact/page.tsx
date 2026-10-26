import type { Metadata } from "next";
import Link from "next/link";
import MailingListForm from "../MailingListForm";

export const metadata: Metadata = {
  title: "Contact | And Then Some Music",
  description: "Get in touch with And Then Some Music.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="flex justify-center pt-8">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="And Then Some Music" className="h-[150px] w-[150px] object-contain" />
        </Link>
      </div>
      <section className="px-6 py-24 text-center">
        <div className="mx-auto w-full max-w-[700px]">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Contact</h1>
          <div className="mt-10 w-full">
            <MailingListForm uid="162c138c0e" />
          </div>
        </div>
      </section>
    </main>
  );
}
