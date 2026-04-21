import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://defencor.in";

  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },

    { url: `${baseUrl}/services/manned-guarding`, lastModified: new Date() },
    { url: `${baseUrl}/services/risk-assessment`, lastModified: new Date() },
    { url: `${baseUrl}/services/consultancy`, lastModified: new Date() },
    { url: `${baseUrl}/services/event-security`, lastModified: new Date() },
    { url: `${baseUrl}/services/dog-squad`, lastModified: new Date() },
  ];
}