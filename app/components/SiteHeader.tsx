"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Weltweit", "/weltweit"],
  ["Deutschland", "/deutschland"],
  ["Volksbegehren", "/volksbegehren"],
  ["Aktuelles", "/aktuelles"],
  ["Unterstützen", "/unterstuetzen"],
];

export default function SiteHeader({
  section,
  claimLead,
  claimTrail,
}: {
  section?: string;
  claimLead?: string;
  claimTrail?: string;
}) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const activeLabel = section || "Die Volksbegehren";
  const desktopLead = claimLead || "Gib der Natur Recht.";
  const desktopTrail = claimTrail || "Eine Kampagne für die Mitwelt.";

  const closeMenus = () => {
    setOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="headerTopline">
        <Link
          className="brand brandOfficial"
          href="/"
          aria-label="Rechte der Natur – Die Volksbegehren – Startseite"
          onClick={closeMenus}
        >
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

        <button
          className="menuToggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => {
            setOpen(value => !value);
            if (open) setAboutOpen(false);
          }}
        >
          <span className="menuToggleText">Menü</span>
          <span className="menuIcon" aria-hidden="true"><i/><i/><i/></span>
        </button>
      </div>

      <nav id="main-navigation" className={open ? "mainNav mainNavOpen" : "mainNav"} aria-label="Hauptnavigation">
        {nav.slice(0, 4).map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenus}>{label}</Link>
        ))}

        <div className={aboutOpen ? "navDropdown navDropdownOpen" : "navDropdown"}>
          <button
            className="navDropdownToggle"
            type="button"
            aria-expanded={aboutOpen}
            aria-controls="about-submenu"
            onClick={() => setAboutOpen(value => !value)}
          >
            Über uns <span aria-hidden="true">⌄</span>
          </button>
          <div id="about-submenu" className="navDropdownMenu">
            <Link href="/ueber-uns" onClick={closeMenus}>Über uns</Link>
            <Link href="/newsletter" onClick={closeMenus}>Newsletter</Link>
            <a href="https://www.rechte-der-natur.de" target="_blank" rel="noreferrer" onClick={closeMenus}>Netzwerk Rechte der Natur ↗</a>
            <a href="https://systemische-rechtsentwicklung.de" target="_blank" rel="noreferrer" onClick={closeMenus}>Systemische Rechtsentwicklung ↗</a>
          </div>
        </div>

        {nav.slice(4).map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenus}>{label}</Link>
        ))}
        <Link className="navAction" href="/mitmachen" onClick={closeMenus}>Mitmachen</Link>
      </nav>

      <div className="heritageStrip headerStrip" aria-label={`Aktiver Bereich: ${activeLabel}`}>
        <span className="headerStripClaim">{desktopLead}</span>
        <span className="heritageColors" aria-hidden="true"><i/><i/><i/><i/></span>
        <span className="headerStripTrail">{desktopTrail}</span>
        <span className="headerStripActive">{activeLabel}</span>
      </div>
    </header>
  );
}
