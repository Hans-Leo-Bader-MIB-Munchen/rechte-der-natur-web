import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { federalStates } from "../lib/states";
import styles from "./page.module.css";

const template = [
  ["01", "Ausgangslage", "Welche rechtliche und politische Situation besteht im Land?"],
  ["02", "Rechtlicher Weg", "Welche Form von Volksgesetzgebung ist möglich und welche Hürden gelten?"],
  ["03", "Zieltext", "Was soll konkret geändert werden – und warum genau so?"],
  ["04", "Mitstreiter", "Wer trägt die Initiative vor Ort gesellschaftlich, fachlich und organisatorisch?"],
  ["05", "Mobilisierung", "Wie erreichen wir Menschen, gewinnen Unterstützer und organisieren die nötigen Unterschriften?"],
  ["06", "Lernen", "Welche Erfahrungen aus Bayern und anderen Rechtsordnungen helfen – und wo braucht es Anpassungen?"],
];

export default function Volksbegehren() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Volksbegehren" claimLead="Gib der Natur Recht." claimTrail="16 Bundesländer. Viele Wege. Eine gemeinsame Idee." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Volksbegehren</p>
          <h1>16 Bundesländer. Viele mögliche Wege.</h1>
          <p className={styles.heroText}>Jedes Bundesland hat eigene Regeln für direkte Demokratie. Verfassungen, Verfahren und Fristen unterscheiden sich – und damit auch der Weg zu einem Volksbegehren für die Rechte der Natur. Bayern ist unser laufender Ausgangspunkt.</p>
          <div className={styles.actions}><Link className={styles.button} href="/mitmachen">Mitstreiter werden</Link><Link className={styles.textLink} href="/deutschland">Stand der 16 Bundesländer →</Link></div>
        </div>
      </section>

      <section className={styles.principle}>
        <div><p className={styles.label}>Die gemeinsame Idee</p><h2>Rechte der Natur dort verankern, wo Menschen unmittelbar über Landesrecht mitentscheiden können.</h2></div>
        <div><p>Jedes Bundesland entwickelt seinen eigenen rechtlichen und politischen Weg. Was sich teilen lässt, sind Wissen, Kampagnenerfahrung, Gestaltung, Netzwerke und die Erfahrungen aus bereits laufenden Initiativen.</p><p>So wächst aus einer gemeinsamen Idee eine föderale Kampagne mit unterschiedlichen Landeswegen.</p></div>
      </section>

      <section className={styles.statesSection}>
        <div className={styles.statesInner}>
          <div className={styles.sectionHead}><p className={styles.label}>Deutschland</p><h2>Wo stehen die Bundesländer?</h2><span>Bayern befindet sich in der Antragsphase mit aktiver Sammlung. Für die übrigen Länder werden die jeweiligen rechtlichen und politischen Ausgangslagen aufgebaut und geprüft.</span></div>
          <div className={styles.states}>
            {federalStates.map(({name,status},i)=><article className={name === "Bayern" ? `${styles.state} ${styles.stateActive}` : styles.state} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><strong>{status}</strong>{name === "Bayern" ? <Link href="/volksbegehren/bayern">Zur laufenden Bayern-Kampagne →</Link> : <em>Nächster Schritt: Prüfung und Aufbau</em>}</article>)}
          </div>
        </div>
      </section>

      <section className={styles.templateSection}>
        <div className={styles.sectionHead}><p className={styles.label}>Vom Start zur Kampagne</p><h2>Sechs Bausteine für einen tragfähigen Landesweg.</h2></div>
        <div className={styles.templateGrid}>{template.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className={styles.bayern}>
        <div className={styles.bayernInner}>
          <div className={styles.bayernMark}>BY</div>
          <div><p className={styles.label}>Bayern · Antragsphase · aktive Sammlung</p><h2>Bayern sammelt weiter.</h2><p>Für den Zulassungsantrag reichen formal 25.000 gültige Unterstützungsunterschriften. Die Kampagne verfolgt ein politisches Sammelziel von mindestens 250.000 Unterschriften vor der Einreichung. Das schafft Öffentlichkeit und stärkt die gesellschaftliche Basis für die späteren Verfahrensstufen.</p><Link href="/volksbegehren/bayern">Bayern und die Sammelstrategie ansehen →</Link></div>
        </div>
      </section>

      <section className={styles.call}><p className={styles.label}>Ein Bundesland starten?</p><h2>Prüfen. Vernetzen. Mobilisieren.</h2><span>Wer in seinem Bundesland mitarbeiten, ein Netzwerk aufbauen oder eine spätere Unterschriftensammlung vorbereiten will, kann Teil der gemeinsamen Kampagne werden.</span><div className={styles.actions}><Link className={styles.button} href="/mitmachen">Jetzt mitmachen →</Link></div></section>

      <footer className={styles.footer}><Link href="/">Startseite</Link><Link href="/deutschland">Deutschland</Link><Link href="/mitmachen">Mitmachen</Link><span>Preview · interne Arbeitsfassung</span></footer>
    </main>
  );
}
