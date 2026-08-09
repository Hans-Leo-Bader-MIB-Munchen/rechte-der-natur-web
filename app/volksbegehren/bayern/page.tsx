import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import styles from "./page.module.css";

const milestones = [
  { year: "2021", title: "Start der Unterschriftensammlung", text: "Am 24. September 2021 begann die Sammlung für den Antrag auf Zulassung des Volksbegehrens." },
  { year: "seitdem", title: "Die Sammlung läuft weiter", text: "Die Unterstützungsunterschriften werden weiterhin gesammelt. Die gemeindliche Bestätigung des Stimmrechts für die Einreichung des Zulassungsantrags ist noch nicht abgeschlossen." },
  { year: "parallel", title: "Kampagne und fachliche Weiterentwicklung", text: "Während die Sammlung weiterläuft, haben internationale Erfahrungen und die eigene rechtliche Arbeit dazu geführt, einige frühe Aussagen heute präziser zu formulieren." },
];

export default function BayernPage() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Volksbegehren Bayern" />

      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Bayern · laufende Sammelphase</p>
          <h1>Eine Stimme für Isar, Lech und Loisach.</h1>
          <p className={styles.lead}>Das Volksbegehren „Rechte der Natur“ läuft weiter. Wir sammeln Unterstützungsunterschriften für den Zulassungsantrag – mit dem Ziel, der natürlichen Mitwelt in der Bayerischen Verfassung eine eigenständige rechtliche Stellung zu geben.</p>
          <div className={styles.actions}><a href="#stand">Aktueller Stand</a><a className={styles.secondary} href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Bisherige Kampagnenseite ↗</a></div>
        </div>
        <div className={styles.visual} aria-hidden="true"><span>Isar</span><span>Lech</span><span>Loisach</span><div className={styles.water}/><div className={styles.hill}/></div>
      </section>

      <section className={styles.intro} id="stand">
        <p className={styles.label}>Aktueller Stand</p>
        <div><h2>Wir sind weiterhin in der Sammlung für den Zulassungsantrag.</h2><p>Für einen Zulassungsantrag in Bayern sind 25.000 Unterschriften von Stimmberechtigten erforderlich. Das Stimmrecht der Unterzeichnenden muss für die Einreichung durch die zuständigen Gemeinden bestätigt werden.</p><p>Diese gemeindliche Bestätigung und die Einreichung des vollständigen Zulassungsantrags stehen bei unserer Kampagne noch aus. Deshalb läuft derzeit auch noch nicht die 14-tägige Eintragungsfrist des eigentlichen Volksbegehrens.</p><p className={styles.note}>Die Sammlung ist also nicht abgeschlossen oder historisch. Sie ist die aktuelle Kampagnenphase.</p></div>
      </section>

      <section className={styles.intro} id="ziel">
        <p className={styles.label}>Unser Ziel</p>
        <div><h2>Die Bayerische Verfassung soll Natur eine eigenständige rechtliche Stellung geben.</h2><p>Der vorliegende Ansatz zielt auf eine Änderung von Artikel 101 der Bayerischen Verfassung und verbindet damit die Anerkennung der Rechtssubjektivität der natürlichen Mitwelt.</p><p className={styles.note}>Die Kampagne läuft auf dieser Grundlage weiter. Gleichzeitig formulieren wir einzelne rechtliche Folgerungen heute präziser als zu Beginn.</p></div>
      </section>

      <section className={styles.process} id="weg">
        <div className={styles.sectionHead}><p className={styles.label}>Der demokratische Weg</p><h2>Wir befinden uns noch vor der Einreichung des Zulassungsantrags.</h2></div>
        <div className={styles.steps}>
          <article><span>1</span><h3>Jetzt: Unterstützungsunterschriften</h3><p>Wir sammeln die erforderlichen Unterschriften für den Zulassungsantrag. Für die Einreichung muss das Stimmrecht der Unterzeichnenden durch die Gemeinden nachgewiesen werden.</p></article>
          <article><span>2</span><h3>Danach: Zulassung und Volksbegehren</h3><p>Erst nach Einreichung und Zulassung wird die gesetzliche Eintragungsfrist für das eigentliche Volksbegehren festgesetzt. Diese Eintragungsfrist beträgt 14 Tage.</p></article>
          <article><span>3</span><h3>Dann: Volksentscheid</h3><p>Erreicht das Volksbegehren die gesetzlichen Voraussetzungen und übernimmt der Landtag den Entwurf nicht, kann es zum Volksentscheid kommen. Eine Verfassungsänderung muss in Bayern dem Volk zur Entscheidung vorgelegt werden.</p></article>
        </div>
        <p className={styles.sourceNote}>Nach Art. 63 LWG benötigt der Zulassungsantrag 25.000 Unterschriften; § 72 LWO regelt die gemeindliche Bestätigung des Stimmrechts. Die 14-tägige Eintragungsfrist wird erst nach Zulassung nach Art. 65 LWG festgesetzt.</p>
      </section>

      <section className={styles.timeline}>
        <div className={styles.sectionHead}><p className={styles.label}>Seit 2021</p><h2>Die Kampagne läuft – und entwickelt sich weiter.</h2></div>
        <div className={styles.timelineGrid}>{milestones.map(m => <article key={m.year}><strong>{m.year}</strong><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>

      <section className={styles.today} id="heute">
        <div><p className={styles.label}>Was wir heute genauer sehen</p><h2>Eine laufende Kampagne darf dazulernen.</h2></div>
        <div className={styles.todayText}>
          <p>Zu Beginn lag der Schwerpunkt stark auf der verfassungsrechtlichen Anerkennung selbst. Heute unterscheiden wir deutlicher zwischen <strong>Rechtsträgerschaft, Vertretung, Verfahren und tatsächlicher Wirkung</strong>.</p>
          <p>Auch Aussagen wie, besondere Vertretungs- oder Klagemechanismen seien nicht erforderlich, würden wir heute nicht mehr pauschal formulieren. Ob Rechte der Natur wirksam werden, hängt wesentlich davon ab, wie sie institutionell aufgenommen und vertreten werden.</p>
          <p>Das ist keine Abkehr vom Volksbegehren. Es ist die fachliche Weiterentwicklung einer weiterhin laufenden Kampagne.</p>
        </div>
      </section>

      <section className={styles.bridge}>
        <p className={styles.label}>Bayern und die 16 Länder</p>
        <h2>Bayern ist der laufende Ausgangspunkt – nicht ein abgeschlossener Lernfall.</h2>
        <p>Die Erfahrungen aus der laufenden Sammlung helfen uns, weitere Landeswege realistischer zu planen. Andere Bundesländer brauchen dennoch eigene rechtliche Prüfungen, Netzwerke und Kampagnenstrategien.</p>
        <Link href="/deutschland">Zu den 16 Ländern →</Link>
      </section>

      <section className={styles.archive}>
        <div><p className={styles.label}>Bisherige Kampagnenmaterialien</p><h2>Nichts soll verschwinden.</h2></div>
        <div><p>Die bisherige WordPress-Seite bleibt erreichbar. Dort finden sich Antrag, Begründungen, Unterschriftenmaterialien und weitere Dokumente der laufenden Bayern-Kampagne.</p><a href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Bisherige Bayern-Seite öffnen ↗</a></div>
      </section>

      <section className={styles.bridge}>
        <p className={styles.label}>Jetzt mitmachen</p>
        <h2>Die Unterschriftensammlung läuft. Dafür brauchen wir Menschen.</h2>
        <p>Mitstreiter können beim Sammeln, Organisieren, Ansprechen von Unterstützern, bei Veranstaltungen, Kommunikation und beim Aufbau weiterer Strukturen helfen.</p>
        <Link href="/mitmachen">Mitmachen →</Link>
      </section>

      <footer className={styles.footer}><Link href="/volksbegehren">← Zu den Volksbegehren</Link><span>Rechte der Natur · Bayern · laufende Sammelphase · Preview</span></footer>
    </main>
  );
}
