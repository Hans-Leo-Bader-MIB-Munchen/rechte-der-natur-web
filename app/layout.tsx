import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rechte der Natur – Mitwelt im Recht neu denken",
  description:
    "Rechte der Natur: Grundlagen, internationale Erfahrungen und die Frage, wie eine eigene rechtliche Stellung der Mitwelt tatsächlich wirksam werden kann.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
