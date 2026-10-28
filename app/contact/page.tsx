import type { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTIONS } from "@/lib/seo";
import Link from "next/link";
import MailingListForm from "../MailingListForm";
import Markdown from "../Markdown";

export const metadata: Metadata = {
  title: "Contact | And Then Some Music",
  description: PAGE_DESCRIPTIONS.contact,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | And Then Some Music", description: PAGE_DESCRIPTIONS.contact, url: "/contact", type: "website", siteName: "And Then Some Music", images: [OG_IMAGE] },
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
          <Markdown slug="contact" />
          <div className="mt-10 w-full">
            <MailingListForm uid="162c138c0e" />
          </div>
        </div>
      </section>
    </main>
  );
}
