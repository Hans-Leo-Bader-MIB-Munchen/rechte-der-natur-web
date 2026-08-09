import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { federalStates } from "../lib/states";
import styles from "./page.module.css";

const status = [
  ["Startpunkt", "Hier beginnt der Aufbau eines Landeswegs."],
  ["Frühere Initiative", "Frühere Erfahrungen bilden einen Ausgangspunkt für die heutige Länderarbeit."],
  ["Rechtliche Prüfung", "Verfassung, direkte Demokratie und mögliche Regelungswege werden zu einem tragfähigen Landesweg verbunden."],
  ["Netzwerkaufbau", "Menschen und Organisationen im Land beginnen, einen tragfähigen Weg zu entwickeln."],
  ["Vorbereitung", "Ziel, Text, Verfahren und Kampagnenstruktur sind so weit geklärt, dass eine Initiative vorbereitet werden kann."],
  ["Laufende Sammelphase", "Die Kampagne sammelt Unterstützungsunterschriften für den Zulassungsantrag. Bayern befindet sich derzeit in dieser Phase."],
  ["Aktive Kampagne", "Eine konkrete Initiative läuft – mit Organisation, Mobilisierung und der im jeweiligen Verfahren vorgesehenen Unterschriftensammlung."],
];

export default function Deutschland() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Deutschland" claimLead="Gib der Natur Recht." claimTrail="Deutschland neu denken." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Deutschland</p>
          <h1>Ein Land. 16 Bundesländer. Viele mögliche Wege.</h1>
          <p className={styles.lead}>Jedes Bundesland hat eigene Regeln für direkte Demokratie. Verfassungen, Verfahren und Fristen prägen den jeweiligen Weg zu einem Volksbegehren für die Rechte der Natur. Bayern ist dabei ein besonderer Fall: Hier kann die Sammlung der Unterstützungsunterschriften über einen längeren Zeitraum laufen, bevor der Zulassungsantrag eingereicht wird.</p>
          <div className={styles.actions}><a className={styles.button} href="#laender">Die Länder ansehen</a><Link className={styles.textLink} href="/volksbegehren">Zur Kampagnenidee →</Link></div>
        </div>
      </section>

      <section className={styles.principle}>
        <p className={styles.label}>Unser Grundsatz</p>
        <h2>Überall dieselbe Frage. In jedem Land der passende Weg.</h2>
        <p>Welche rechtliche Form stärkt die Eigenbelange der Mitwelt in diesem Land tatsächlich? Aus einer tragfähigen Antwort kann eine Kampagne mit Mitstreitenden, Öffentlichkeit und einem konkreten Verfahren wachsen.</p>
      </section>

      <section className={styles.three}>
        <article><span>01</span><h3>Recht prüfen</h3><p>Welche Gestaltungsspielräume eröffnet die jeweilige Landesverfassung? Welche Formen direkter Demokratie stehen zur Verfügung?</p></article>
        <article><span>02</span><h3>Menschen gewinnen</h3><p>Initiativen, Verbände, Fachleute und engagierte Menschen übernehmen vor Ort Verantwortung. Daraus wächst eine Kampagne.</p></article>
        <article><span>03</span><h3>Kampagne starten</h3><p>Wenn Ziel, Verfahren und Netzwerk tragen, wird es konkret: Öffentlichkeit herstellen, Unterstützer gewinnen und die vorgesehenen Unterschriften sammeln.</p></article>
      </section>

      <section className={styles.map} id="laender">
        <div className={styles.sectionHead}><p className={styles.label}>Landkarte</p><h2>16 Bundesländer. 16 unterschiedliche Ausgangspunkte.</h2><p>Frühere Initiativen markieren vorhandene Erfahrungen. Bayern sammelt bereits Unterstützungsunterschriften für den Zulassungsantrag.</p></div>
        <div className={styles.stateGrid}>{federalStates.map(({name,status},i)=><article className={`${styles.stateCard} ${name === "Bayern" ? styles.active : ""}`} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>{name === "Bayern" ? <Link href="/volksbegehren/bayern"><strong>Zur laufenden Kampagne →</strong></Link> : status === "Frühere Initiative" ? <div><strong>Startpunkt</strong><br/><small>Textentwurf</small></div> : <strong>{status}</strong>}</article>)}</div>
      </section>

      <section className={styles.status}>
        <div className={styles.sectionHead}><p className={styles.label}>Vom Startpunkt zur Kampagne</p><h2>Jedes Land hat seinen nächsten Schritt.</h2><p>Die Landkarte zeigt vorhandene Erfahrungen, rechtliche Prüfungen, Netzwerke und konkrete Kampagnen.</p></div>
        <div className={styles.statusGrid}>{status.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className={styles.bayern}><div><p className={styles.label}>Bayern · laufende Kampagne</p><h2>Hier wird weiter gesammelt.</h2></div><div><p>Für den Zulassungsantrag werden weiterhin Unterstützungsunterschriften gesammelt. Danach werden die Stimmrechte gemeindlich bestätigt und der vollständige Zulassungsantrag eingereicht. Es folgen die gesetzlich vorgesehenen Verfahrensstufen.</p><Link className={styles.button} href="/volksbegehren/bayern">Bayern ansehen →</Link></div></section>

      <section className={styles.join}><p className={styles.label}>Ein Land in Bewegung bringen</p><h2>Du willst in deinem Bundesland anfangen?</h2><div className={styles.joinLinks}><Link href="/mitmachen">Mitstreiten und mitaufbauen →</Link><Link href="/volksbegehren">Von der Idee zur Landesinitiative →</Link><Link href="/volksbegehren/bayern">Bayern: laufende Sammelphase →</Link></div></section>

      <footer className={styles.footer}><Link href="/">Startseite</Link><Link href="/volksbegehren">Volksbegehren</Link><Link href="/mitmachen">Mitmachen</Link><span>Preview · interne Arbeitsfassung</span></footer>
    </main>
  );
}
