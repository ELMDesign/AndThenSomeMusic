import Link from "next/link";

export default function PageLogo() {
  return (
    <div className="flex justify-center pt-8">
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="And Then Some Music" className="h-[150px] w-[150px] object-contain" />
      </Link>
    </div>
  );
}
