"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Weltweit", "/weltweit"],
  ["Deutschland", "/deutschland"],
  ["Volksbegehren", "/volksbegehren"],
  ["Aktuelles", "/aktuelles"],
  ["Über uns", "/ueber-uns"],
];

export default function SiteHeader({ section }: { section?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="headerTopline">
        <Link className="brand brandOfficial" href="/" aria-label="Rechte der Natur – Die Volksbegehren – Startseite" onClick={() => setOpen(false)}>
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
          onClick={() => setOpen(value => !value)}
        >
          <span className="menuToggleText">Menü</span>
          <span className="menuIcon" aria-hidden="true"><i/><i/><i/></span>
        </button>
      </div>

      <nav id="main-navigation" className={open ? "mainNav mainNavOpen" : "mainNav"} aria-label="Hauptnavigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link className="navAction" href="/mitmachen" onClick={() => setOpen(false)}>Mitmachen</Link>
      </nav>
    </header>
  );
}
