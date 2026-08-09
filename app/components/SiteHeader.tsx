import Image from "next/image";
import Link from "next/link";

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
      <Link className="brand brandOfficial" href="/" aria-label="Rechte der Natur – Die Volksbegehren – Startseite">
        <Image
          className="brandLogoHorizontal"
          src="/brand/logo_D_laengs.png"
          alt="Rechte der Natur – Die Volksbegehren"
          width={2380}
          height={399}
          priority
        />
        {section ? <span className="brandSection">{section}</span> : null}
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
