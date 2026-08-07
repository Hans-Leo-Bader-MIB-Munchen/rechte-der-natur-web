const areas = [
  {
    kicker: "Hauptplattform",
    title: "Rechte der Natur",
    text: "Hier entsteht der aktuelle gemeinsame Zugang zum Thema Rechte der Natur. Die Plattform soll Orientierung geben, Entwicklungen einordnen und zu den jeweils führenden Fach- und Referenzquellen weiterleiten.",
    href: "#rechte-der-natur",
    link: "Zum Aufbau der Hauptplattform",
  },
  {
    kicker: "Regionaler Zugang",
    title: "Bayern",
    text: "Der Bayern- und Volksbegehren-Kontext erhält einen klar erkennbaren eigenen Einstieg innerhalb derselben Plattform. Es entsteht kein zweiter paralleler Inhaltsbestand.",
    href: "#bayern",
    link: "Bayern-Zugang ansehen",
  },
  {
    kicker: "Fachliche Vertiefung",
    title: "Systemische Rechtsentwicklung",
    text: "Methodische und rechtswissenschaftliche Vertiefungen bleiben auf der eigenständigen SRE-Plattform. Diese Website verweist dorthin, ohne Inhalte doppelt zu führen.",
    href: "https://systemische-rechtsentwicklung.de",
    link: "Zur SRE-Plattform",
    external: true,
  },
  {
    kicker: "Referenzschicht",
    title: "Historische Inhalte bleiben erreichbar",
    text: "Die bestehende WordPress-Seite bleibt als historische und wissenschaftlich referenzierte Schicht erhalten. Bestehende URLs werden nicht still ersetzt oder in die neue Plattform hineingezogen.",
    href: "https://gibdernaturrecht.muc-mib.de",
    link: "Zur bestehenden Referenzseite",
    external: true,
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Rechte der Natur – Start">
          <span className="brandMark" aria-hidden="true">●</span>
          <span>Rechte der Natur</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#rechte-der-natur">Überblick</a>
          <a href="#bayern">Bayern</a>
          <a href="#struktur">Struktur</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">PREVIEW · NICHT ÖFFENTLICH FREIGEGEBEN</p>
        <h1>Natur braucht im Recht eine eigene Stimme.</h1>
        <p className="lead">
          Diese Vorschau zeigt die erste Struktur der neuen gemeinsamen Plattform
          für Rechte der Natur. Inhalte, Gestaltung und Domainzuordnung werden
          kontrolliert weiterentwickelt.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href="#rechte-der-natur">Struktur ansehen</a>
          <span className="statusNote">Keine Produktionsdomain ist verbunden.</span>
        </div>
      </section>

      <section className="intro" id="rechte-der-natur">
        <p className="sectionLabel">Eine Plattform, klare Rollen</p>
        <div>
          <h2>Aktuelles, regionale Zugänge, Fachvertiefung und historische Referenzen werden nicht mehr vermischt.</h2>
          <p>
            Die neue Architektur trennt bewusst die aktuelle Rechte-der-Natur-Plattform,
            den Bayern-Zugang, die Systemische Rechtsentwicklung und die bestehende
            WordPress-Referenzschicht. Verbindungen entstehen über nachvollziehbare
            Verweise statt über doppelte oder still ersetzte Inhalte.
          </p>
        </div>
      </section>

      <section className="areaGrid" id="struktur" aria-label="Bereiche der Zielarchitektur">
        {areas.map((area) => (
          <article className="areaCard" key={area.title} id={area.title === "Bayern" ? "bayern" : undefined}>
            <p className="cardKicker">{area.kicker}</p>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
            <a
              href={area.href}
              target={area.external ? "_blank" : undefined}
              rel={area.external ? "noreferrer" : undefined}
            >
              {area.link}<span aria-hidden="true"> →</span>
            </a>
          </article>
        ))}
      </section>

      <section className="domainStrip" aria-label="Künftige Domainrollen">
        <div>
          <span>rechtedernatur.de</span>
          <strong>künftige Hauptdomain</strong>
        </div>
        <div>
          <span>rechtedernatur.bayern</span>
          <strong>Bayern-Einstieg</strong>
        </div>
        <div>
          <span>dubistdieer.de · ichbindieer.de</span>
          <strong>kommunikative Einstiege</strong>
        </div>
      </section>

      <section className="referenceNotice">
        <p className="sectionLabel">Referenzschutz</p>
        <p>
          <strong>gibdernaturrecht.muc-mib.de bleibt WordPress.</strong> Diese neue
          Plattform ersetzt die bestehende Seite nicht technisch und verändert keine
          wissenschaftlich oder dauerhaft referenzierte URL. Migrationen oder
          Weiterleitungen erfolgen erst nach eigener Prüfung und Freigabe.
        </p>
      </section>

      <footer>
        <span>Rechte der Natur · Strukturpreview</span>
        <span>TECH1 · keine Außenfreigabe</span>
      </footer>
    </main>
  );
}
