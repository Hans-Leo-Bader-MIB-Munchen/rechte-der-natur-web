import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { federalStates } from "../lib/states";
import { landesEntwuerfe } from "./land-entwuerfe";
import styles from "./page.module.css";

const status = [
  ["15 Länder: projektintern geprüft", "Für 15 Bundesländer liegt eine projektintern geprüfte Verfassungsfassung vor. Eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen."],
  ["Bayern: rechtswissenschaftlich begleitet", "Der bayerische Ansatz besitzt bereits eine rechtswissenschaftliche Vorgeschichte und befindet sich in der laufenden Sammlung. Die heutige Weiterentwicklung muss sich im tatsächlichen Verfahren bewähren."],
];

const draftByState = Object.fromEntries(landesEntwuerfe.map((item) => [item.name, item.slug]));

export default function Deutschland() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Deutschland" claimLead="Gib der Natur Recht." claimTrail="16 Länder. Passende Verfassungswege." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Deutschland</p>
          <h1>16 Bundesländer.<br className={styles.desktopBreak}/> Ein gemeinsames Ziel. 16 Verfassungswege.</h1>
          <p className={styles.lead}>Die natürliche Mitwelt soll verfassungsrechtlich als Trägerin eigener Rechte anerkannt werden. Aber die Landesverfassungen unterscheiden sich in Aufbau, Grundrechten, Staatszielen und möglichen Anknüpfungspunkten. Deshalb beginnt unsere Arbeit nicht mit einem starren Einheitstext, sondern mit der Frage: Welche Rechtsfunktion soll entstehen – und wo lässt sie sich in der jeweiligen Verfassung am klarsten und sparsamsten verankern?</p>
          <div className={styles.actions}><a className={styles.button} href="#laender">Die Länder ansehen</a><Link className={styles.textLink} href="/volksbegehren">Zur Kampagnenidee →</Link></div>
        </div>
      </section>

      <section className={styles.principle}>
        <p className={styles.label}>Systemische Rechtsentwicklung</p>
        <h2>Funktionsziel vor Rechtsform.</h2>
        <p>Der gemeinsame materielle Kern steht zuerst: eigene Rechte der natürlichen Mitwelt. Erst danach wird geprüft, ob und wie die bestehende Landesverfassung diese Funktion aufnehmen kann. Das führt nicht zu 16 identischen Sätzen, sondern zu 16 verfassungsspezifischen Lösungen mit demselben rechtlichen Ziel.</p>
      </section>

      <section className={styles.three}>
        <article><span>01</span><h3>Bestehendes Recht prüfen</h3><p>Welche Rechtsfunktion soll neu geschaffen werden? Erfüllt die Landesverfassung diese Funktion bereits? Wenn nicht, bleibt ein normativer Rest, der gezielt aufgenommen werden muss.</p></article>
        <article><span>02</span><h3>Kleinstmöglichen Eingriff wählen</h3><p>Wo eine bestehende Freiheitsnorm bereits die Beziehung zwischen Freiheit und den Rechten anderer ordnet, kann dort ergänzt werden. Wo das systematisch nicht passt, ist eine eigenständige Rechte-Norm die klarere Lösung.</p></article>
        <article><span>03</span><h3>Folgen sauber trennen</h3><p>Die Anerkennung eigener Rechte ist der normative Ausgangspunkt. Vertretung, Beteiligung, gerichtliche Geltendmachung, Vollzug, Monitoring und tatsächliche ökologische Wirkung sind nachgelagerte Fragen und folgen nicht automatisch.</p></article>
      </section>

      <section className={styles.status}>
        <div className={styles.sectionHead}><p className={styles.label}>Zwei Grundformen</p><h2>Unterschiedliche Normtechnik – dasselbe materielle Ziel.</h2><p>In sieben Ländern kann die Anerkennung an eine vorhandene Freiheits- und Schrankenregel anknüpfen. In neun Ländern ist eine eigenständige Verfassungsbestimmung die systematisch klarere Lösung. Diese Unterscheidung ist kein vorgegebenes Schema, sondern das Ergebnis der Prüfung der jeweiligen Landesverfassung.</p></div>
        <div className={styles.statusGrid}>
          <article className={styles.legendPrepared}><span>01</span><div><h3>Anknüpfung an eine bestehende Freiheitsnorm</h3><p>Die vorhandene Normstruktur bleibt erhalten. Ergänzt wird, dass auch die Rechte der natürlichen Mitwelt rechtlich zu achten sind.</p></div></article>
          <article className={styles.legendActive}><span>02</span><div><h3>Eigenständige Rechte-Norm</h3><p>Wo eine Ergänzung menschlicher Grundrechte zu Doppelungen oder systematischen Spannungen führen würde, erhält die natürliche Mitwelt eine eigene Verfassungsbestimmung.</p></div></article>
        </div>
      </section>

      <section className={styles.map} id="laender">
        <div className={styles.sectionHead}><p className={styles.label}>Die 16 Länder</p><h2>Für jedes Land ist dokumentiert, wo und warum die Rechte verankert werden sollen.</h2><p>Jede Landesunterseite zeigt den konkreten Normvorschlag, die gewählte Verfassungsstelle, die landesspezifische Begründung, das bewusst unverändert bleibende Recht und den jeweiligen Prüfstand.</p></div>
        <div className={styles.stateGrid}>{federalStates.map(({name,status},i)=>{
          const draftSlug = draftByState[name];
          const stateTone = name === "Bayern" ? styles.active : styles.prepared;
          return <article className={`${styles.stateCard} ${stateTone}`} key={name}>
            <span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>
            {draftSlug ? <Link href={`/deutschland/${draftSlug}`}><strong>Normvorschlag und Herleitung</strong><br/><small>Landesfassung →</small></Link> : null}
            {name === "Bayern" ? <Link href="/volksbegehren/bayern"><small>Laufende Kampagne →</small></Link> : null}
          </article>;
        })}</div>
      </section>

      <section className={styles.principle}>
        <p className={styles.label}>Was damit noch nicht entschieden ist</p>
        <h2>Eigene Rechte sind Ausgangspunkt einer Rechtsentwicklung – nicht deren vollständige Umsetzung.</h2>
        <p>Aus der verfassungsrechtlichen Anerkennung folgen nicht automatisch Prozessfähigkeit, Klagebefugnis, Prozessstandschaft, gesetzliche Vertretung, eine neue Behörde oder ein bestimmtes Guardianship-Modell. Solche institutionellen und verfahrensrechtlichen Fragen müssen anschließend gesondert entwickelt werden. Rechte der natürlichen Mitwelt sind kein Klageinstrument.</p>
      </section>

      <section className={styles.status}>
        <div className={styles.sectionHead}><p className={styles.label}>Prüfstand</p><h2>16/16 projektintern geprüft – mit einem besonderen Status für Bayern.</h2><p>Die 16 Länder wurden intern in einer begrenzten Funktions- und Architekturprüfung vollständig geprüft. Aus dieser Prüfung ergibt sich derzeit kein Änderungsbedarf an den konsolidierten Normvorschlägen. Das ist keine Behauptung einer externen verfassungsrechtlichen Validierung aller 16 Texte.</p></div>
        <div className={styles.statusGrid}>{status.map(([title,text],i)=><article className={i === 0 ? styles.legendPrepared : styles.legendActive} key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className={styles.bayern}><div><p className={styles.label}>Bayern · Ausgangspunkt und laufende Kampagne</p><h2>Vom bayerischen Entwurf zu 16 Landeswegen.</h2></div><div><p>Der bayerische Art.-101-Ansatz ist der historische Ausgangspunkt der Entwicklung. Er wurde bereits rechtswissenschaftlich begleitet und veröffentlicht diskutiert. Die heutige Formulierung entwickelt diese Linie weiter und benennt ausdrücklich die „Rechte der natürlichen Mitwelt“. Aus den Erfahrungen in Bayern ist die Idee entstanden, für alle Landesverfassungen jeweils die systematisch passende Fassung zu entwickeln.</p><Link className={styles.button} href="/deutschland/bayern">Bayern-Normvorschlag ansehen →</Link><br/><Link className={styles.textLink} href="/volksbegehren/bayern">Zur laufenden Sammelphase →</Link></div></section>

      <section className={styles.join}><p className={styles.label}>Landeswege aufbauen</p><h2>Die Normvorschläge sind da. Jetzt braucht es Gegenprüfung, Menschen und Strukturen vor Ort.</h2><div className={styles.joinLinks}><Link href="/mitmachen">Mitstreiten und mitaufbauen →</Link><Link href="/volksbegehren">Von der Idee zur Landesinitiative →</Link><Link href="/volksbegehren/bayern">Bayern: laufende Sammelphase →</Link></div></section>

      <footer className={styles.footer}><Link href="/">Startseite</Link><Link href="/volksbegehren">Volksbegehren</Link><Link href="/mitmachen">Mitmachen</Link><span>16-Länder-Arbeitsstand · systemisch hergeleitet</span></footer>
    </main>
  );
}
