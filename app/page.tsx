const cases = [
  {
    place: "Spanien",
    title: "Mar Menor",
    text: "Eine Lagune mit eigener Rechtspersönlichkeit – und ein Beispiel dafür, dass Rechtsstatus, Vertretung und tatsächliche Wirkung getrennt betrachtet werden müssen.",
  },
  {
    place: "Neuseeland",
    title: "Whanganui",
    text: "Ein Fluss als Rechtsperson innerhalb einer institutionellen Vertretungsordnung. Nicht Naturromantik, sondern eine konkrete Neuordnung von Zuständigkeit und Verantwortung.",
  },
  {
    place: "Kolumbien",
    title: "Flüsse und Ökosysteme",
    text: "Gerichte und Gesetzgebung entwickeln unterschiedliche Modelle. Entscheidend ist nicht nur die Anerkennung von Rechten, sondern ihre institutionelle Umsetzung.",
  },
];

const principles = [
  {
    number: "01",
    title: "Eigene rechtliche Stellung",
    text: "Natur wird nicht ausschließlich als Objekt menschlicher Nutzung oder als Schutzgut behandelt. Rechte der Natur eröffnen die Möglichkeit einer eigenständigen rechtlichen Berücksichtigung.",
  },
  {
    number: "02",
    title: "Vertretung braucht Struktur",
    text: "Ein Recht wirkt nicht von selbst. Es braucht Personen, Institutionen und Verfahren, die ökologische Interessen zuverlässig wahrnehmen und in Entscheidungen einbringen.",
  },
  {
    number: "03",
    title: "Wirkung muss geprüft werden",
    text: "Rechtsträgerschaft ist kein Erfolgssiegel. Wir schauen darauf, ob Rechte aktiviert, institutionell aufgenommen und in tatsächliche Entscheidungen übersetzt werden.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Rechte der Natur – Startseite">
          <span className="brandMark" aria-hidden="true">R/N</span>
          <span className="brandText">Rechte der Natur</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#warum">Warum?</a>
          <a href="#wirkung">Wie wirkt Recht?</a>
          <a href="#beispiele">Beispiele</a>
          <a href="#weiter">Weiterdenken</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroMeta">
          <span>Entwurf · Preview</span>
          <span>rechtedernatur.de</span>
        </div>
        <h1>
          Natur ist nicht nur
          <span>Gegenstand des Rechts.</span>
        </h1>
        <div className="heroBottom">
          <p className="lead">
            Rechte der Natur stellen eine einfache, aber weitreichende Frage:
            Was verändert sich, wenn Flüsse, Wälder und Ökosysteme im Recht nicht
            nur geschützt werden, sondern eine eigene rechtliche Stellung erhalten?
          </p>
          <a className="roundLink" href="#warum" aria-label="Weiterlesen">
            ↓
          </a>
        </div>
      </section>

      <section className="statement" id="warum">
        <p className="sectionLabel">Der Perspektivwechsel</p>
        <div className="statementText">
          <h2>
            Wir leben nicht außerhalb der Natur. Unser Recht tut aber oft noch so.
          </h2>
          <p>
            Umweltrecht schützt Natur überwiegend aus einer menschlichen Perspektive:
            als Lebensgrundlage, Eigentum, Ressource oder Schutzgut. Rechte der Natur
            verschieben diesen Ausgangspunkt. Sie fragen, ob Teile der Mitwelt auch um
            ihrer selbst willen rechtlich berücksichtigt werden sollen.
          </p>
          <p>
            Das ist kein juristischer Zaubertrick. Und es ist nicht automatisch ein
            zusätzliches Klageinstrument. Entscheidend ist, wie Rechte ausgestaltet,
            vertreten und in Verfahren tatsächlich wirksam werden.
          </p>
        </div>
      </section>

      <section className="effectSection" id="wirkung">
        <div className="effectIntro">
          <p className="sectionLabel">Recht ist nicht gleich Wirkung</p>
          <h2>Ein Recht auf dem Papier verändert noch keine Entscheidung.</h2>
        </div>
        <div className="principleGrid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quoteBand" aria-label="Leitsatz">
        <p>Die entscheidende Frage lautet nicht nur:</p>
        <strong>Hat Natur Rechte?</strong>
        <p>Sondern auch:</p>
        <strong>Wer sorgt dafür, dass sie in einer Entscheidung vorkommen?</strong>
      </section>

      <section className="caseSection" id="beispiele">
        <div className="sectionHeading">
          <p className="sectionLabel">Internationale Erfahrungen</p>
          <h2>Kein Modell ist einfach übertragbar.</h2>
          <p>
            Weltweit entstehen sehr unterschiedliche rechtliche Konstruktionen. Wir
            behandeln sie nicht als Erfolgsgeschichten, sondern als Erfahrungen, aus
            denen sich lernen lässt.
          </p>
        </div>
        <div className="caseGrid">
          {cases.map((item) => (
            <article className="caseCard" key={item.title}>
              <span>{item.place}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="paths" id="weiter">
        <article className="path pathPrimary">
          <p className="sectionLabel">Aktuelle Plattform</p>
          <h2>Rechte der Natur weiterdenken.</h2>
          <p>
            Diese Seite soll aktuelle Entwicklungen, Grundlagen, Debatten und Wege
            zum Mitmachen zusammenführen – verständlich, aber ohne die juristischen
            Schwierigkeiten glattzubügeln.
          </p>
          <a href="#top">Hier entsteht die neue Plattform →</a>
        </article>

        <article className="path">
          <p className="sectionLabel">Fachliche Vertiefung</p>
          <h2>Systemische Rechtsentwicklung</h2>
          <p>
            Wie werden rechtliche Innovationen tatsächlich handlungsfähig? Die
            methodische und rechtswissenschaftliche Vertiefung bleibt bewusst auf
            einer eigenständigen Plattform.
          </p>
          <a href="https://systemische-rechtsentwicklung.de" target="_blank" rel="noreferrer">
            Zur SRE-Plattform →
          </a>
        </article>

        <article className="path">
          <p className="sectionLabel">Historische Referenz</p>
          <h2>Wo alles begann</h2>
          <p>
            Die bisherige Website mit Volksbegehren, Verfassungsbeschwerde und
            dokumentierten Materialien bleibt als eigenständige Referenzschicht
            vollständig erreichbar.
          </p>
          <a href="https://gibdernaturrecht.muc-mib.de" target="_blank" rel="noreferrer">
            Zur Referenzseite →
          </a>
        </article>
      </section>

      <section className="domainBar" aria-label="Domainstruktur">
        <div>
          <span>rechtedernatur.de</span>
          <strong>Hauptplattform</strong>
        </div>
        <div>
          <span>rechtedernatur.bayern</span>
          <strong>Regionaler Einstieg</strong>
        </div>
        <div>
          <span>dubistdieer.de · ichbindieer.de</span>
          <strong>Kampagnenzugänge</strong>
        </div>
      </section>

      <footer>
        <div>
          <strong>Rechte der Natur</strong>
          <span>Preview · keine Produktionsfreigabe</span>
        </div>
        <a href="#top">Nach oben ↑</a>
      </footer>
    </main>
  );
}
