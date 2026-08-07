const cards = [
  {
    title: "Rechte der Natur",
    text: "Die künftige Hauptplattform bündelt aktuelle Informationen, Einordnung und Zugänge zum Thema Rechte der Natur.",
  },
  {
    title: "Bayern",
    text: "Der Bayern-Einstieg wird als eigener Zugang innerhalb derselben Plattform geführt – ohne parallelen Inhaltsbestand.",
  },
  {
    title: "Systemische Rechtsentwicklung",
    text: "Die methodische und fachliche Vertiefung bleibt auf der eigenständigen SRE-Plattform und wird gezielt verlinkt.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">TECH1 · PREVIEW</p>
        <h1>Rechte der Natur</h1>
        <p className="lead">
          Reversibles technisches Grundgerüst der neuen gemeinsamen Webplattform.
          Noch keine Produktionsdomain ist verbunden.
        </p>
      </section>

      <section className="grid" aria-label="Zielarchitektur">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="notice">
        <strong>Referenzschutz:</strong> Die bestehende WordPress-Seite
        gibdernaturrecht.muc-mib.de bleibt technisch und inhaltlich eine getrennte
        Referenzschicht. Inhalte werden nicht automatisch übernommen oder ersetzt.
      </section>
    </main>
  );
}
