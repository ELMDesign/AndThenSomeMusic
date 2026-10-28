"use client";

import Script from "next/script";
import { useRef } from "react";

const BUTTON_ID = "UA5LVKM2ND3QS";
const SDK_URL =
  "https://www.paypal.com/sdk/js?client-id=BAAyDQG3LSttgcyyLDNMxdTGHTMSFskUZVB2yVYowfDPeTaicTzc71dSpfIO1pSX8RkygqEWcUhnPACk5M&components=hosted-buttons&enable-funding=venmo&currency=USD";

declare global {
  interface Window {
    paypal?: { HostedButtons: (opts: { hostedButtonId: string }) => { render: (selector: string) => Promise<void> } };
  }
}

export default function PayPalTip() {
  const ref = useRef<HTMLDivElement>(null);

  const render = () => {
    const el = ref.current;
    if (!el || !window.paypal || el.childElementCount > 0) return;
    window.paypal.HostedButtons({ hostedButtonId: BUTTON_ID }).render(`#paypal-container-${BUTTON_ID}`);
  };

  return (
    <>
      <Script src={SDK_URL} strategy="afterInteractive" onReady={render} />
      <div ref={ref} id={`paypal-container-${BUTTON_ID}`} className="mx-auto mt-10 w-full max-w-[500px] [&>div>div]:items-center [&>div>div]:justify-center" />
    </>
  );
}
