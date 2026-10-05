// Everything search engines and AI answer engines read about the site lives
// here: titles, descriptions, the share image, and the structured data that
// says who Humphrey is. None of it changes what's on screen.

// TODO: set this to your real domain before you publish. Canonical links and
// the share card are built from it.
export const SITE_URL = "https://example.com";
export const OG_IMAGE = `${SITE_URL}/og.png`;

export const NAME = "Humphrey";
export const ABOUT_SHORT =
  "Humphrey is a fifth-year pharmacy student at the University of Benin and co-founder of Naralt, a job-tracking tool for small service businesses in Nigeria.";

export const PROFILES = ["https://www.instagram.com/humphryno_", "https://www.tiktok.com/@humphryno", "https://naralt.com"];

export const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: "Pharmacy student and co-founder",
  description: ABOUT_SHORT,
  worksFor: { "@type": "Organization", name: "Naralt Technologies Limited", url: "https://naralt.com" },
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Benin" },
  address: { "@type": "PostalAddress", addressLocality: "Benin City", addressCountry: "NG" },
  knowsAbout: ["Pharmacy", "Small business software", "Job tracking", "Product design", "AI tools", "Nigeria"],
  sameAs: PROFILES,
};

// Turn a JSON-LD object into a <script> entry for a route's head.
export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});

// The standard set of tags for a page: title, description, canonical address
// and the share card.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Humphrey — pharmacy student and co-founder of Naralt" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
