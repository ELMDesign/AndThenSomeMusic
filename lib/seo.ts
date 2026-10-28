import { getIntroSentences, truncate } from "./content";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://andthensomemusic.com").replace(/\/$/, "");
export const SITE_NAME = "And Then Some Music";

export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME };

const about = getIntroSentences("home");

/** Meta descriptions built from the About copy in public/content/home.md. */
export const SITE_DESCRIPTION = truncate(about[0] ?? SITE_NAME);
export const PAGE_DESCRIPTIONS = {
  tips: truncate(`Tip the band. ${about[2] ?? about[0] ?? ""}`),
  media: truncate(`Watch And Then Some Music. ${about[1] ?? about[0] ?? ""}`),
  pressKit: truncate(`Press kit for And Then Some Music. ${about[0] ?? ""}`),
  upcomingShows: truncate(`Upcoming shows. ${about[3] ?? about[0] ?? ""}`),
  contact: truncate(`Book And Then Some Music or get in touch. ${about[0] ?? ""}`),
};

export const SAME_AS = [
  "https://facebook.com/andthensomemusic",
  "https://instagram.com/andthensomemusic",
  "https://www.youtube.com/playlist?list=PLzfS5RLSIjM7aNW5cjV-3p01xrAxpdLuf",
];

export const KEYWORDS = [
  "And Then Some Music",
  "Chicago band",
  "instrumental funk",
  "soul jazz",
  "jazz fusion",
  "Erik Oldman",
  "Paul Abella",
  "Randy Bufanda",
  "Chicago live music",
  "book a band",
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#band` },
    },
    {
      "@type": "MusicGroup",
      "@id": `${SITE_URL}/#band`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      genre: ["Funk", "Soul Jazz", "Jazz Fusion", "Instrumental Rock"],
      foundingLocation: { "@type": "Place", name: "Chicago, Illinois, USA" },
      sameAs: SAME_AS,
      member: [
        { "@type": "OrganizationRole", roleName: "Guitar & Synth", member: { "@type": "Person", name: "Erik Oldman" } },
        { "@type": "OrganizationRole", roleName: "Drums & Percussion", member: { "@type": "Person", name: "Paul Abella" } },
        { "@type": "OrganizationRole", roleName: "Saxophones", member: { "@type": "Person", name: "Randy Bufanda" } },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "booking",
        url: `${SITE_URL}/contact`,
      },
    },
  ],
};
