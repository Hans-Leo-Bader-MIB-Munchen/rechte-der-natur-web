import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rechte der Natur",
  description: "Neue gemeinsame Webplattform für Rechte der Natur",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
