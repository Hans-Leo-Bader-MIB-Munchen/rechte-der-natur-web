import type { Metadata } from "next";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";
import "./participation.css";
import "./weltweit/weltweit.css";
import "./consolidation.css";
import "./header-strip.css";
import "./desktop-qa.css";
import "./editorial-subpages.css";
import "./label-colors.css";
import "./footer.css";
import "./unterstuetzen/unterstuetzen.css";
import "./hero-unified.css";

export const metadata: Metadata = {
  title: "Rechte der Natur – Die Volksbegehren",
  description:
    "Rechte der Natur – Die Volksbegehren: laufende Kampagne in Bayern, neue Landesinitiativen, internationale Erfahrungen und Mitmachen für eine eigenständige rechtliche Stellung der Mitwelt.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body id="top">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
