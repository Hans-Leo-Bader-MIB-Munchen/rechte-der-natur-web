import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";
import "./participation.css";
import "./weltweit/weltweit.css";
import "./consolidation.css";
import "./header-strip.css";
import "./header-submenu.css";
import "./desktop-qa.css";
import "./editorial-subpages.css";
import "./label-colors.css";
import "./footer.css";
import "./unterstuetzen/unterstuetzen.css";
import "./hero-unified.css";

const siteTitle = "Rechte der Natur – Die Volksbegehren";
const siteDescription =
  "Rechte der Natur – Die Volksbegehren: laufende Kampagne in Bayern, neue Landesinitiativen, internationale Erfahrungen und Mitmachen für eine eigenständige rechtliche Stellung der Mitwelt.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rechtedernatur.de"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://rechtedernatur.de",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/brand/OpenGraphGrafik.png",
        width: 1731,
        height: 909,
        alt: "Rechte der Natur – Die Volksbegehren – rechtedernatur.de",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/brand/OpenGraphGrafik.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body id="top">
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
