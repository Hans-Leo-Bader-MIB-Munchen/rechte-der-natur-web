import type { Metadata } from "next";
import "./globals.css";
import "./participation.css";
import "./weltweit/weltweit.css";

export const metadata: Metadata = {
  title: "Rechte der Natur – Gib der Natur Recht",
  description:
    "Rechte der Natur: Kampagne, Volksbegehren, internationale Erfahrungen und Mitmachen für eine eigenständige rechtliche Stellung der Mitwelt.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
