import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import styles from "./page.module.css";

const cases = [
  { region: "Ecuador", title: "Natur in der Verfassung", type: "Verfassung", year: "2008", text: "Ecuador verankerte Rechte der Natur auf Verfassungsebene. Damit wurde aus einer politischen Idee ein verfassungsrechtlicher Bezugspunkt, dessen Wirkung sich in Anwendung und Rechtsprechung entfaltet." },
  { region: "Ecuador", title: "Los Cedros", type: "Gericht", year: "2021", text: "Im Fall des Schutzwalds Los Cedros wurde sichtbar, wie Rechte der Natur in einer konkreten gerichtlichen Entscheidung Bedeutung entfalten können." },
  { region: "Kolumbien", title: "Río Atrato", type: "Gericht + Vertretung", year: "2016", text: "Der Atrato wurde als Rechtssubjekt anerkannt. Seine Vertretungsordnung zeigt, wie Anerkennung und konkrete Wahrnehmung der Flussinteressen miteinander verbunden werden können." },
  { region: "Aotearoa / Neuseeland", title: "Whanganui", type: "Gesetz + Vertretung", year: "2017", text: "Der Whanganui erhielt eine eigene Rechtspersönlichkeit innerhalb einer gesetzlich geregelten Vertretungsordnung. Das Modell verbindet staatliches Recht mit einer anderen Beziehung zwischen Menschen und Fluss." },
  { region: "Aotearoa / Neuseeland", title: "Te Urewera", type: "Gesetz + Governance", year: "2014", text: "Te Urewera wurde aus staatlichem Eigentum in eine eigenständige rechtliche Ordnung überführt. Die Konstruktion ordnet Verantwortung und Governance neu und erweitert den Blick auf unterschiedliche Naturgebilde." },
  { region: "Spanien", title: "Mar Menor", type: "Gesetz + Institutionen", year: "2022", text: "Die Lagune Mar Menor erhielt eigene Rechte. Der Fall zeigt besonders deutlich, wie Rechtsträgerschaft, Vertretung, Aufsicht und tatsächliche ökologische Wirkung zusammenwirken." },
];

const lenses = [
  ["Anerkennung", "Hat Natur eine eigene rechtliche Stellung – und auf welcher Ebene: Verfassung, Gesetz oder Gericht?"],
  ["Vertretung", "Wer darf oder muss für das betroffene Ökosystem handeln?"],
  ["Institutionen", "Welche Gremien, Verfahren und Zuständigkeiten sorgen dafür, dass die Rechte in Entscheidungen vorkommen?"],
  ["Wirkung", "Verändert sich eine konkrete Entscheidung, ein Vollzug oder der Zustand des Ökosystems tatsächlich?"],
];

const focusCases = [
  {
    id: "mar-menor",
    region: "Spanien · 2022",
    title: "Mar Menor",
    subtitle: "Rechte brauchen Institutionen.",
    intro: "Die Lagune Mar Menor erhielt durch Gesetz eigene Rechte. Damit bleibt es nicht bei einer abstrakten Anerkennung: Vertretung, Aufsicht und institutionelle Zuständigkeiten gehören zum Modell.",
    points: [
      ["Rechtsform", "Gesetzliche Anerkennung eigener Rechte der Lagune."],
      ["Organisation", "Vertretung und Aufsicht werden institutionell geordnet."],
      ["Lernpunkt", "Rechte werden belastbar, wenn klar ist, wer sie wahrnimmt und wie sie in Verfahren wirken."],
    ],
  },
  {
    id: "whanganui",
    region: "Aotearoa / Neuseeland · 2017",
    title: "Whanganui",
    subtitle: "Rechtspersönlichkeit und Vertretung gehören zusammen.",
    intro: "Der Whanganui erhielt eine eigene Rechtspersönlichkeit innerhalb einer gesetzlich geregelten Vertretungsordnung. Der Fluss wird damit rechtlich als eigenständige Einheit behandelt und erhält eine konkrete Stimme im Recht.",
    points: [
      ["Rechtsform", "Gesetzlich geregelte eigene Rechtspersönlichkeit."],
      ["Vertretung", "Die Interessen des Flusses werden durch eine eigene Vertretungsordnung wahrgenommen."],
      ["Lernpunkt", "Die Anerkennung wird durch eine dauerhaft angelegte Vertretungsstruktur handlungsfähig."],
    ],
  },
  {
    id: "ecuador",
    region: "Ecuador · seit 2008",
    title: "Natur in der Verfassung",
    subtitle: "Verfassungsrang schafft einen starken Bezugspunkt.",
    intro: "Ecuador verankerte Rechte der Natur auf Verfassungsebene. Seitdem zeigt sich ihre Bedeutung besonders dort, wo Gerichte diese Rechte auf konkrete Konflikte anwenden – etwa im Fall Los Cedros.",
    points: [
      ["Rechtsform", "Rechte der Natur stehen unmittelbar in der Verfassung."],
      ["Anwendung", "Gerichtliche Entscheidungen konkretisieren, was diese Rechte in einzelnen Fällen bedeuten."],
      ["Lernpunkt", "Verfassungsrang eröffnet einen starken Maßstab; seine Wirkung entsteht in Anwendung, Verfahren und Entscheidungen."],
    ],
  },
];

export default function Weltweit() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Weltweit" claimLead="Rechte der Natur" claimTrail="Viele Rechtswege. Viele Erfahrungen." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Weltweit</p>
          <h1>Die Idee hat viele Formen angenommen.</h1>
          <p className={styles.lead}>Verfassungen, Gesetze und Gerichte haben Natur in unterschiedlichen Rechtsordnungen eine eigenständige Stellung gegeben. Für eine Kampagne in Deutschland ist besonders wichtig, welche Elemente wirken und welche Anpassungen ein eigener deutscher Weg braucht.</p>
          <div className={styles.actions}><a className={styles.button} href="#schwerpunkte">Drei Fälle genauer</a><Link className={styles.textLink} href="/deutschland">Was lernen wir daraus für Deutschland? →</Link></div>
        </div>
      </section>

      <section className={styles.read}>
        <div><p className={styles.label}>Vier Blickwinkel</p><h2>Anerkennung ist der Anfang.</h2></div>
        <div><p>Die eigentliche Wirkung zeigt sich in Vertretung, Institutionen, Entscheidungen und im Zustand des Ökosystems.</p><p>Vier Blickwinkel machen sichtbar, was internationale Erfahrungen für Kampagnen in Deutschland leisten können.</p></div>
      </section>

      <section className={styles.lenses}>{lenses.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</section>

      <section className={styles.focus} id="schwerpunkte">
        <div className={styles.focusHead}>
          <p className={styles.label}>Drei Fälle genauer</p>
          <h2>Drei Rechtswege zeigen drei unterschiedliche Stärken.</h2>
          <p>Entscheidend ist weniger, ein Modell zu kopieren, als zu verstehen, wie Anerkennung, Vertretung und Institutionen miteinander verbunden werden.</p>
        </div>
        <div className={styles.focusList}>
          {focusCases.map((c, index) => (
            <article className={styles.focusCase} id={c.id} key={c.id}>
              <div className={styles.focusNumber}>{String(index + 1).padStart(2,"0")}</div>
              <div className={styles.focusCopy}>
                <p className={styles.focusRegion}>{c.region}</p>
                <h3>{c.title}</h3>
                <strong>{c.subtitle}</strong>
                <p>{c.intro}</p>
              </div>
              <dl className={styles.focusFacts}>
                {c.points.map(([term, text]) => <div key={term}><dt>{term}</dt><dd>{text}</dd></div>)}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cases} id="faelle">
        <div className={styles.sectionHead}><p className={styles.label}>Falllandschaft</p><h2>Sechs Fälle. Sechs unterschiedliche rechtliche Konstruktionen.</h2><p>Die Auswahl spannt ein Spektrum unterschiedlicher rechtlicher Konstruktionen auf.</p></div>
        <div className={styles.caseGrid}>{cases.map(c=><article className={styles.case} key={c.title}><div className={styles.meta}><span>{c.region}</span><strong>{c.year}</strong></div><h3>{c.title}</h3><em>{c.type}</em><p>{c.text}</p></article>)}</div>
      </section>

      <aside className={styles.monitor}>
        <div>
          <p className={styles.label}>Weiter entdecken</p>
          <h2>Eco Jurisprudence Monitor</h2>
          <p>Der Eco Jurisprudence Monitor sammelt und erschließt weltweit Initiativen einer naturzentrierten Rechtsentwicklung – darunter Rechte der Natur, Rechtspersönlichkeit von Naturgebilden, indigene Rechtsmodelle und weitere Formen ökologischer Jurisprudenz. Die Datenbank macht sichtbar, wie vielfältig sich diese Entwicklung international ausprägt.</p>
        </div>
        <a className={styles.monitorLink} href="https://ecojurisprudence.org/" target="_blank" rel="noreferrer">Zum Eco Jurisprudence Monitor →</a>
      </aside>

      <section className={styles.bridge}><p className={styles.label}>Was folgt daraus?</p><h2>Internationale Modelle geben Orientierung für eigene Wege.</h2><p>Für eine deutsche Kampagne zählt, welche Elemente unter unseren rechtlichen und politischen Bedingungen tragfähig sind. Internationale Erfahrung, Länderkenntnis und konkrete Mobilisierung greifen dabei ineinander.</p><div className={styles.actions}><Link className={styles.button} href="/deutschland">Zur Deutschlandseite</Link><Link className={styles.textLink} href="/volksbegehren">Zu den Volksbegehren →</Link></div></section>

      <footer className={styles.footer}><Link href="/">Startseite</Link><Link href="/deutschland">Deutschland</Link><Link href="/volksbegehren">Volksbegehren</Link><span>Preview · interne Arbeitsfassung</span></footer>
    </main>
  );
}
