import Link from "next/link";
import BrandMark from "./BrandMark";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="siteFooterBrand">
          <BrandMark />
          <div>
            <strong>Rechte der Natur</strong>
            <span>Die Volksbegehren</span>
          </div>
        </div>

        <nav className="siteFooterNav" aria-label="Weitere Seiten">
          <Link href="/buendnispartner">Bündnispartner & Unterstützer</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/mitmachen">Mitmachen</Link>
          <a href="https://gibdernaturrecht.muc-mib.de/" target="_blank" rel="noreferrer">Historische Kampagnenseite ↗</a>
        </nav>

        <nav className="siteFooterLegal" aria-label="Service und Rechtliches">
          <a href="https://gibdernaturrecht.muc-mib.de/contact-us" target="_blank" rel="noreferrer">Kontakt ↗</a>
          <a href="https://gibdernaturrecht.muc-mib.de/contact-us" target="_blank" rel="noreferrer">Impressum ↗</a>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
      <div className="siteFooterBottom">
        <span>Rechte der Natur – Die Volksbegehren</span>
        <Link href="#top">Nach oben ↑</Link>
      </div>
    </footer>
  );
}
