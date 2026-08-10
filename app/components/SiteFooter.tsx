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
          <Link href="/newsletter">Newsletter</Link>
          <a href="https://www.rechte-der-natur.de" target="_blank" rel="noreferrer">Netzwerk Rechte der Natur ↗</a>
          <a href="https://systemische-rechtsentwicklung.de" target="_blank" rel="noreferrer">Systemische Rechtsentwicklung ↗</a>
          <Link href="/mitmachen">Mitmachen</Link>
          <Link href="/unterstuetzen">Unterstützen</Link>
          <a href="https://gibdernaturrecht.muc-mib.de/" target="_blank" rel="noreferrer">Historische Kampagnenseite ↗</a>
        </nav>

        <nav className="siteFooterLegal" aria-label="Service und Rechtliches">
          <a href="mailto:info@dubistdieer.de">Kontakt</a>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
      <div className="siteFooterBottom">
        <span>Rechte der Natur – Die Volksbegehren</span>
        <Link href="#top">Nach oben ↑</Link>
      </div>
      <div className="siteFooterNetwork">
        <img src="https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2025/08/RoN_klein_UnisundNetzwerk_Garn_UNHwN_neu_2024.png" alt="Netzwerk- und Hochschulzugehörigkeiten im Umfeld der Rechte der Natur" />
      </div>
    </footer>
  );
}
