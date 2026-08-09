import type { Metadata } from "next";
import "./globals.css";
import "./participation.css";
import "./weltweit/weltweit.css";
import "./consolidation.css";
import "./header-strip.css";
import "./desktop-qa.css";

export const metadata: Metadata = {
  title: "Rechte der Natur – Die Volksbegehren",
  description:
    "Rechte der Natur – Die Volksbegehren: laufende Kampagne in Bayern, neue Landesinitiativen, internationale Erfahrungen und Mitmachen für eine eigenständige rechtliche Stellung der Mitwelt.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
