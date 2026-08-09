import Link from "next/link";
import BrandMark from "./BrandMark";

const nav = [
  ["Weltweit", "/weltweit"],
  ["Deutschland", "/deutschland"],
  ["Volksbegehren", "/volksbegehren"],
  ["Aktuelles", "/aktuelles"],
  ["Über uns", "/ueber-uns"],
];

export default function SiteHeader({ section }: { section?: string }) {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Rechte der Natur – Startseite">
        <BrandMark />
        <span className="brandWords">
          <strong>Rechte der Natur</strong>
          <small>{section || "Kampagne"}</small>
        </span>
      </Link>
      <nav aria-label="Hauptnavigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
        <Link className="navAction" href="/mitmachen">Mitmachen</Link>
      </nav>
    </header>
  );
}
