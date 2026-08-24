import type { MetadataRoute } from "next";
import { landesEntwuerfe } from "./deutschland/land-entwuerfe";

const baseUrl = "https://rechtedernatur.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/aktuelles",
    "/buendnispartner",
    "/datenschutz",
    "/deutschland",
    "/impressum",
    "/mitmachen",
    "/newsletter",
    "/newsletter/2026-08-11",
    "/ueber-uns",
    "/unterstuetzen",
    "/volksbegehren",
    "/volksbegehren/bayern",
    "/weltweit",
  ];

  const stateRoutes = landesEntwuerfe.map((item) => `/deutschland/${item.slug}`);

  return [...staticRoutes, ...stateRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
