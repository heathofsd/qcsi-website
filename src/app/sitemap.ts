import type { MetadataRoute } from "next";
import { pageArtists } from "@/data/artists";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qcsongwriters.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gordy-pratt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/invitational`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/artists`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/for-songwriters`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/for-audiences`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/partners`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    // one URL per artist — each indexable for that writer's own name
    ...pageArtists.map((a) => ({
      url: `${baseUrl}/artists/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: a.fullBio || a.bio ? 0.6 : 0.4,
    })),
  ];
}
