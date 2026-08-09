import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import styles from "./page.module.css";

const milestones = [
  { year: "2019", title: "Die Idee entsteht", text: "Hans Leo Bader entwickelt die Idee für eine bayerische Initiative zu den Rechten der Natur. Daraus entsteht in den folgenden Jahren das Volksbegehren." },
  { year: "24.09.2021", title: "Start der Unterschriftensammlung", text: "Seit diesem Tag werden Unterstützungsunterschriften für den Antrag auf Zulassung des Volksbegehrens gesammelt." },
  { year: "heute", title: "Die Antragsphase läuft weiter", text: "Der Zulassungsantrag ist noch nicht eingereicht. Die Kampagne sammelt weiter und verfolgt bewusst ein politisches Sammelziel deutlich oberhalb des gesetzlichen Minimums." },
  { year: "parallel", title: "Kampagne und fachliche Weiterentwicklung", text: "Während die Sammlung weiterläuft, werden internationale Erfahrungen, rechtliche Fragen und institutionelle Wirkungsbedingungen genauer ausgewertet." },
];

export default function BayernPage() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Volksbegehren Bayern" claimLead="Gib der Natur Recht." claimTrail="Bayern sammelt weiter." />

      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Bayern · Antragsphase · aktive Unterschriftensammlung</p>
          <h1>Eine Stimme für Isar, Lech und Loisach.</h1>
          <p className={styles.lead}>Das Volksbegehren „Rechte der Natur“ läuft weiter. Seit dem 24. September 2021 sammeln wir Unterstützungsunterschriften für den Zulassungsantrag – mit dem Ziel, die Rechte der natürlichen Mitwelt in der Bayerischen Verfassung zu verankern.</p>
          <div className={styles.actions}><a href="#sammeln">Warum wir weiter sammeln</a><a className={styles.secondary} href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Bisherige Kampagnenseite ↗</a></div>
        </div>
        <div className={styles.visual} aria-hidden="true"><span>Isar</span><span>Lech</span><span>Loisach</span><div className={styles.water}/><div className={styles.hill}/></div>
      </section>

      <section className={styles.intro} id="stand">
        <p className={styles.label}>Aktueller Stand</p>
        <div>
          <h2>Bayern ist nicht Vergangenheit. Bayern sammelt.</h2>
          <p>Für den Antrag auf Zulassung eines Volksbegehrens sind in Bayern mindestens 25.000 gültige Unterstützungsunterschriften von Stimmberechtigten erforderlich. Für die Einreichung muss das Stimmrecht der Unterzeichnenden durch die zuständigen Gemeinden bestätigt werden.</p>
          <p>Der vollständige Zulassungsantrag ist noch nicht eingereicht. Deshalb läuft auch noch nicht die spätere 14-tägige Eintragungsfrist des eigentlichen Volksbegehrens.</p>
          <p className={styles.note}>Der aktuelle Status lautet: Antragsphase mit laufender Unterschriftensammlung.</p>
        </div>
      </section>

      <section className={styles.patrons} id="schirmherrschaft">
        <div className={styles.patronHead}>
          <p className={styles.label}>Schirmherrschaft der Volksbegehren</p>
          <h2>Zwei internationale Wege. Eine gemeinsame Idee.</h2>
          <p>Alberto Acosta und Teresa Vicente haben die Schirmherrschaft für die gesamte Kampagne „Rechte der Natur – Die Volksbegehren“ übernommen. Sie stehen damit nicht nur für Bayern, sondern begleiten den gemeinsamen Weg zu Volksbegehren in allen 16 Bundesländern.</p>
        </div>
        <div className={styles.patronGrid}>
          <article className={styles.patronCard}>
            <div className={styles.patronImage}>
              <img src="https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/07/Acosta_Schirmherr.png" alt="Alberto Acosta, Schirmherr der Kampagne Rechte der Natur – Die Volksbegehren" />
            </div>
            <div className={styles.patronText}>
              <p className={styles.patronRole}>Schirmherr</p>
              <h3>Alberto Acosta</h3>
              <p>Alberto Acosta Espinosa war 2007/08 Präsident der Verfassungsgebenden Versammlung Ecuadors. In dieser Zeit wurde die neue ecuadorianische Verfassung erarbeitet, die die Rechte der Natur verfassungsrechtlich verankerte.</p>
              <p className={styles.patronLink}>Ecuador → Die Volksbegehren</p>
            </div>
          </article>

          <article className={styles.patronCard}>
            <div className={styles.patronImage}>
              <img src="https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/08/Teresa-Vicente.jpg" alt="Teresa Vicente, Schirmfrau der Kampagne Rechte der Natur – Die Volksbegehren" />
            </div>
            <div className={styles.patronText}>
              <p className={styles.patronRole}>Schirmfrau</p>
              <h3>Teresa Vicente</h3>
              <p>Teresa Vicente ist Professorin für Rechtsphilosophie an der Universität Murcia. Sie führte die Bürgerbewegung an, aus der 2022 das spanische Gesetz hervorging, das dem Ökosystem Mar Menor eigene Rechte und Rechtspersönlichkeit zuerkannte.</p>
              <p className={styles.patronLink}>Mar Menor → Die Volksbegehren</p>
            </div>
          </article>
        </div>
        <p className={styles.patronFoot}>Ecuador und Mar Menor zeigen zwei unterschiedliche Wege, Rechte der Natur rechtlich zu verankern. Ihre Schirmherrschaft verbindet diese internationale Erfahrung mit der gesamten bundesweiten Kampagne und ihren unterschiedlichen Wegen in den 16 Ländern.</p>
      </section>

      <section className={styles.process} id="sammeln">
        <div className={`${styles.sectionHead} ${styles.sectionHeadCompact}`}>
          <p className={styles.label}>Warum nicht bei 25.000 aufhören?</p>
          <h2>25.000 sind das gesetzliche Minimum. 250.000 sind unser politisches Sammelziel.</h2>
          <span>Die historische Kampagnenstrategie ist bewusst ambitionierter als die formale Zulassungshürde.</span>
        </div>
        <div className={styles.goalCards}>
          <article><span>25.000</span><h3>Zulassungshürde</h3><p>So viele gültige Unterstützungsunterschriften braucht der Zulassungsantrag mindestens.</p></article>
          <article><span>250.000</span><h3>Unser Sammelziel</h3><p>Wir wollen den Antrag erst einreichen, wenn mindestens 250.000 Unterschriften gesammelt sind – um Öffentlichkeit zu schaffen und einen breiten gesellschaftlichen Diskurs auszulösen.</p></article>
          <article><span>≈ 2,5 Mio.</span><h3>Der spätere Volksentscheid</h3><p>Eine Verfassungsänderung braucht am Ende nicht nur mehr Ja- als Nein-Stimmen, sondern zusätzlich die Zustimmung von mindestens 25 Prozent aller Stimmberechtigten. Deshalb muss gesellschaftliche Mobilisierung lange vor dem Volksentscheid beginnen.</p></article>
        </div>
        <p className={styles.sourceNote}>Die Größenordnung von rund 2,5 Millionen Ja-Stimmen ist die politische Übersetzung des 25-Prozent-Zustimmungsquorums, wie sie die bisherige Kampagnenseite verwendet. Maßgeblich bleibt das gesetzliche Quorum, nicht eine dauerhaft feste absolute Zahl.</p>
      </section>

      <section className={styles.intro} id="ziel">
        <p className={styles.label}>Unser Ziel</p>
        <div>
          <h2>Artikel 101 der Bayerischen Verfassung soll um die Rechte der natürlichen Mitwelt erweitert werden.</h2>
          <p>Der Kampagnenansatz verbindet die allgemeine Handlungsfreiheit mit den Rechten anderer und den Rechten der natürlichen Mitwelt. Damit soll Natur nicht nur Schutzobjekt bleiben, sondern als Trägerin eigener Rechte in die verfassungsrechtliche Ordnung einbezogen werden.</p>
          <p>Die ursprüngliche Begründung versteht das als Veränderung des rechtlichen Maßstabs für Gesetzgebung, Verwaltung und Rechtsprechung – bis hin zur Frage, wie Eigentum und andere Freiheitsrechte innerhalb ökologischer Grenzen ausgeübt werden können.</p>
          <p className={styles.note}>Die laufende Kampagne hält an diesem verfassungsrechtlichen Ziel fest. Einzelne Aussagen zur Vertretung, Einklagbarkeit und institutionellen Umsetzung formulieren wir heute differenzierter als zu Beginn.</p>
        </div>
      </section>

      <section className={styles.process} id="weg">
        <div className={styles.sectionHead}><p className={styles.label}>Der demokratische Weg</p><h2>Drei Stufen – und wir sind noch in Stufe eins.</h2></div>
        <div className={styles.steps}>
          <article><span>1</span><h3>Antrag auf Zulassung</h3><p>Jetzt werden Unterstützungsunterschriften gesammelt. Vor der Einreichung müssen die Stimmrechtsnachweise der Unterzeichnenden gemeindlich bestätigt werden.</p></article>
          <article><span>2</span><h3>Volksbegehren</h3><p>Erst nach Zulassung folgt eine gesetzlich festgesetzte 14-tägige Eintragungsfrist. In dieser Zeit müssen sich mindestens zehn Prozent der Stimmberechtigten in die amtlichen Eintragungslisten eintragen.</p></article>
          <article><span>3</span><h3>Volksentscheid</h3><p>Kommt es zum Volksentscheid, braucht eine Verfassungsänderung eine Mehrheit der abgegebenen Stimmen und zusätzlich das Zustimmungsquorum von 25 Prozent aller Stimmberechtigten.</p></article>
        </div>
      </section>

      <section className={styles.today} id="guides">
        <div><p className={styles.label}>Unterschriften-Guides</p><h2>Die Sammlung war von Anfang an dezentral gedacht.</h2></div>
        <div className={styles.todayText}>
          <p>Die bisherige Kampagne sucht in allen Postleitzahlregionen Bayerns Menschen, die als <strong>Unterschriften-Guides</strong> vor Ort sammeln und weitere Menschen ansprechen.</p>
          <p>Die Guides erhalten Informationen und Original-Unterschriftenlisten. Auf einem Bogen sollen nur Personen unterschreiben, deren Stimmrecht von derselben Gemeindeverwaltung bestätigt werden kann.</p>
          <p>Die bisherigen Bögen dürfen wegen der formalen Vorgaben nicht einfach kopiert oder selbst ausgedruckt werden. Benötigte Originalbögen werden über die Kampagne bereitgestellt.</p>
          <a href="https://gibdernaturrecht.muc-mib.de/unterschriften-sammeln" target="_blank" rel="noreferrer">Bisherige Informationen zum Unterschriftensammeln ↗</a>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.sectionHead}><p className={styles.label}>Seit 2019</p><h2>Aus einer Idee wurde eine laufende Kampagne.</h2></div>
        <div className={styles.timelineGrid}>{milestones.map(m => <article key={m.year}><strong>{m.year}</strong><h3>{m.title}</h3><p>{m.text}</p></article>)}</div>
      </section>

      <section className={styles.today} id="menschen">
        <div><p className={styles.label}>Initiierung und Verantwortung</p><h2>Idee, Kampagne und formale Verantwortung.</h2></div>
        <div className={styles.todayText}>
          <p><strong>Hans Leo Bader</strong> entwickelte 2019 die Idee für die bayerische Rechte-der-Natur-Initiative und initiierte daraus das Volksbegehren.</p>
          <p><strong>Hans Leo Bader ist zugleich Hauptbeauftragter des Volksbegehrens.</strong> Damit liegt bei ihm die maßgebliche formale Vertretung des Zulassungsantrags im Verfahren. Die Rolle als Hauptbeauftragter ist von der Entstehungsgeschichte und von der Mitarbeit weiterer Unterstützer zu unterscheiden.</p>
          <p>Im Aufbau der Kampagne wirkten und wirken weitere Menschen mit unterschiedlichen fachlichen und praktischen Hintergründen mit. Einzelne frühere Beiträge dokumentieren diese Mitarbeit, begründen aber keine gemeinsame Urheberschaft an der 2019 entstandenen Kampagnenidee.</p>
        </div>
      </section>

      <section className={styles.today} id="heute">
        <div><p className={styles.label}>Was wir heute genauer sehen</p><h2>Eine laufende Kampagne darf dazulernen.</h2></div>
        <div className={styles.todayText}>
          <p>Zu Beginn lag der Schwerpunkt stark auf der verfassungsrechtlichen Anerkennung selbst. Heute unterscheiden wir deutlicher zwischen <strong>Rechtsträgerschaft, Vertretung, Verfahren, institutioneller Aufnahme und tatsächlicher Wirkung</strong>.</p>
          <p>Die ältere Begründung hielt besondere Vertretungs- oder Klagemechanismen nicht für zwingende Voraussetzung der verfassungsrechtlichen Wirkung. Heute würden wir diese Frage nicht mehr pauschal beantworten, sondern als eigenständige Ausgestaltungsfrage behandeln.</p>
          <p>Das ist keine Abkehr vom Volksbegehren. Es ist die fachliche Weiterentwicklung einer weiterhin laufenden Kampagne.</p>
        </div>
      </section>

      <section className={styles.bridge}>
        <p className={styles.label}>Bayern und die 16 Länder</p>
        <h2>Bayern ist der laufende Ausgangspunkt – nicht ein abgeschlossener Lernfall.</h2>
        <p>Die Erfahrungen aus der aktiven Sammlung helfen uns, weitere Landeswege realistischer zu planen. Andere Bundesländer brauchen dennoch eigene rechtliche Prüfungen, Netzwerke und Kampagnenstrategien.</p>
        <Link href="/deutschland">Zu den 16 Ländern →</Link>
      </section>

      <section className={styles.archive}>
        <div><p className={styles.label}>Bisheriger Bestand</p><h2>Nichts soll verschwinden.</h2></div>
        <div><p>Die bisherige WordPress-Seite bleibt als Referenz erreichbar. Dort finden sich Antrag und Begründung, Informationen zur Sammlung, Grundlagenmaterial, Presse, Veranstaltungen, Bündnispartner und die Entwicklung der Initiative.</p><a href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Bisherige Bayern-Seite öffnen ↗</a></div>
      </section>

      <section className={styles.bridge}>
        <p className={styles.label}>Jetzt mitmachen</p>
        <h2>250.000 Unterschriften sammeln sich nicht von allein.</h2>
        <p>Wir brauchen Menschen, die unterschreiben, Originalbögen verteilen, als Unterschriften-Guides sammeln, Veranstaltungen organisieren, Kontakte herstellen und die Idee in ihre Gemeinde tragen.</p>
        <div className={styles.actions}><a href="https://gibdernaturrecht.muc-mib.de/unterschriften-sammeln" target="_blank" rel="noreferrer">Unterschriften sammeln ↗</a><Link className={styles.secondary} href="/mitmachen">Weitere Möglichkeiten mitzumachen →</Link></div>
      </section>

      <footer className={styles.footer}><Link href="/volksbegehren">← Zu den Volksbegehren</Link><span>Rechte der Natur · Bayern · aktive Antragsphase · Preview</span></footer>
    </main>
  );
}
