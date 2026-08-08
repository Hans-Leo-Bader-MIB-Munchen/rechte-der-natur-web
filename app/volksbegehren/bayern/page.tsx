import Link from "next/link";
import styles from "./page.module.css";

const milestones = [
  { year: "2021", title: "Start der Unterschriftensammlung", text: "Am 24. September 2021 begann die Sammlung für den Antrag auf Zulassung des Volksbegehrens." },
  { year: "2022–24", title: "Öffentliche und fachliche Debatte", text: "Presse, Wissenschaft, Veranstaltungen und internationale Kontakte machten aus der Kampagne einen breiteren Diskurs über die rechtliche Stellung der Natur." },
  { year: "danach", title: "Verfassungsarbeit und Weiterentwicklung", text: "Aus der Kampagne entstand die Frage, wie Rechte der Natur institutionell wirklich handlungsfähig werden – und welche Aussagen aus der frühen Kampagnenphase heute genauer formuliert werden müssen." },
];

export default function BayernPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true"><i/><i/><i/><i/><b>⌁</b></span>
          <span><strong>Rechte der Natur</strong><small>Volksbegehren Bayern</small></span>
        </Link>
        <nav><Link href="/">Startseite</Link><a href="#ziel">Das Ziel</a><a href="#weg">Der Weg</a><a href="#heute">Was wir heute anders sehen</a></nav>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Bayern · der erste Weg</p>
          <h1>Eine Stimme für Isar, Lech und Loisach.</h1>
          <p className={styles.lead}>In Bayern begann unsere Arbeit mit einer einfachen Idee: Die natürliche Mitwelt soll im Recht nicht nur Schutzobjekt sein, sondern eine eigene rechtliche Stellung erhalten.</p>
          <div className={styles.actions}><a href="#ziel">Worum ging es?</a><a className={styles.secondary} href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Historische Originalseite ↗</a></div>
        </div>
        <div className={styles.visual} aria-hidden="true"><span>Isar</span><span>Lech</span><span>Loisach</span><div className={styles.water}/><div className={styles.hill}/></div>
      </section>

      <section className={styles.intro} id="ziel">
        <p className={styles.label}>Das damalige Ziel</p>
        <div><h2>Die Bayerische Verfassung sollte Natur eine eigenständige rechtliche Stellung geben.</h2><p>Der Antrag zielte auf eine Änderung von Artikel 101 der Bayerischen Verfassung. Die frühe Kampagne verband damit die Anerkennung der Rechtssubjektivität der natürlichen Mitwelt und eine Begrenzung menschlicher Freiheitsausübung durch deren Rechte.</p><p className={styles.note}>Diese Seite dokumentiert den historischen Ansatz, übernimmt aber nicht automatisch jede damalige rechtliche Folgerung als heutigen Stand.</p></div>
      </section>

      <section className={styles.process} id="weg">
        <div className={styles.sectionHead}><p className={styles.label}>Der demokratische Weg</p><h2>Ein Volksbegehren ist kein einzelner Abstimmungstag.</h2></div>
        <div className={styles.steps}>
          <article><span>1</span><h3>Zulassungsantrag</h3><p>Für die Zulassung eines Volksbegehrens müssen zunächst genügend gültige Unterstützungsunterschriften gesammelt werden.</p></article>
          <article><span>2</span><h3>Volksbegehren</h3><p>Nach der Zulassung folgt die gesetzlich geregelte Eintragungsphase. Erst wenn das notwendige Quorum erreicht wird, geht es weiter.</p></article>
          <article><span>3</span><h3>Volksentscheid</h3><p>Eine Verfassungsänderung braucht schließlich die Zustimmung der Bevölkerung im Volksentscheid und die dafür geltenden Mehrheits- und Quorumsregeln.</p></article>
        </div>
        <p className={styles.sourceNote}>Die alte Kampagnenseite beschrieb diesen Ablauf ausführlich und verwies auf die amtlichen Informationen des Bayerischen Innenministeriums.</p>
      </section>

      <section className={styles.timeline}>
        <div className={styles.sectionHead}><p className={styles.label}>Was daraus entstand</p><h2>Die Kampagne wurde zum Ausgangspunkt einer längeren Entwicklung.</h2></div>
        <div className={styles.timelineGrid}>{milestones.map(m => <article key={m.year}><strong>{m.year}</strong><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>

      <section className={styles.today} id="heute">
        <div><p className={styles.label}>Was wir heute genauer sehen</p><h2>Rechte auf dem Papier sind noch keine Wirkung.</h2></div>
        <div className={styles.todayText}>
          <p>Die frühe Bayern-Kampagne setzte stark auf die verfassungsrechtliche Anerkennung selbst. Heute würden wir deutlicher zwischen <strong>Rechtsträgerschaft, Vertretung, Verfahren und tatsächlicher Wirkung</strong> unterscheiden.</p>
          <p>Auch Aussagen wie, besondere Vertretungs- oder Klagemechanismen seien nicht erforderlich, würden wir heute nicht mehr pauschal formulieren. Ob Rechte der Natur wirksam werden, hängt wesentlich davon ab, wie sie institutionell aufgenommen und vertreten werden.</p>
          <p>Das schwächt die ursprüngliche Idee nicht. Es macht sie belastbarer.</p>
        </div>
      </section>

      <section className={styles.bridge}>
        <p className={styles.label}>Vom ersten Versuch zur lernenden Plattform</p>
        <h2>Bayern bleibt der Ausgangspunkt – aber nicht die Schablone für alle anderen Länder.</h2>
        <p>Für jedes Bundesland müssen Rechtslage, Verfahren, politische Situation und mögliche Formulierungen neu geprüft werden. Genau dafür entsteht die neue bundesweite Plattform.</p>
        <Link href="/#deutschland">Zu den 16 Ländern →</Link>
      </section>

      <section className={styles.archive}>
        <div><p className={styles.label}>Historischer Bestand</p><h2>Nichts soll verschwinden.</h2></div>
        <div><p>Die bisherige WordPress-Seite bleibt als Referenz erhalten. Dort finden sich der damalige Antrag, Begründungen, Unterschriftensammlung und weitere Materialien im ursprünglichen Kampagnenkontext.</p><a href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Historische Bayern-Seite öffnen ↗</a></div>
      </section>

      <footer className={styles.footer}><Link href="/">← Zur neuen Hauptplattform</Link><span>Rechte der Natur · Bayern · Preview</span></footer>
    </main>
  );
}
