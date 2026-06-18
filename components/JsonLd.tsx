import { site } from "@/data/site";

/** Structured data for search engines */
export function JsonLd() {
  const imageUrl = site.photo ? new URL(site.photo, site.url).href : undefined;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.summary,
    url: site.url,
    ...(imageUrl ? { image: imageUrl } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
