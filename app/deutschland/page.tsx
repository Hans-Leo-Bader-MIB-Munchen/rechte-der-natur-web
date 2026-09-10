import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { federalStates } from "../lib/states";
import { landesEntwuerfe } from "./land-entwuerfe";
import styles from "./page.module.css";

const status = [
  ["Geprüfter Normstand", "Für jedes Bundesland liegt eine landesspezifisch geprüfte Verfassungsfassung als Grundlage der weiteren Entwicklung vor."],
  ["Aktive Sammlung", "Bayern verbindet den geprüften Normstand bereits mit einer laufenden Sammlung von Unterstützungsunterschriften."],
];

const draftByState = Object.fromEntries(landesEntwuerfe.map((item) => [item.name, item.slug]));

export default function Deutschland() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Deutschland" claimLead="Gib der Natur Recht." claimTrail="16 Länder. Passende Verfassungswege." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Deutschland</p>
          <h1>16 Bundesländer.<br className={styles.desktopBreak}/> 16 geprüfte Normwege.</h1>
          <p className={styles.lead}>Die Landesverfassungen unterscheiden sich deutlich. Deshalb gibt es keinen starren Einheitstext. Die 16-Länder-Arbeit verbindet einen gemeinsamen materiellen Kern – eigene Rechte der natürlichen Mitwelt – mit einer jeweils passenden verfassungsrechtlichen Architektur.</p>
          <div className={styles.actions}><a className={styles.button} href="#laender">Die Länder ansehen</a><Link className={styles.textLink} href="/volksbegehren">Zur Kampagnenidee →</Link></div>
        </div>
      </section>

      <section className={styles.principle}>
        <p className={styles.label}>Gemeinsamer Kern</p>
        <h2>Eigene Rechte der natürlichen Mitwelt – aber nicht überall dieselbe Normtechnik.</h2>
        <p>Sieben Länder arbeiten mit einer relationalen Eigenrechtsanerkennung in bestehenden Freiheits- und Schrankenbestimmungen. Neun Länder schaffen eine positive, eigenständige Statusnorm. Die konkrete Fassung folgt der jeweiligen Landesverfassung.</p>
      </section>

      <section className={styles.three}>
        <article><span>01</span><h3>Verfassung ernst nehmen</h3><p>Der geltende Landeswortlaut und die vorhandene Gliederungsarchitektur bleiben Ausgangspunkt. Fremde Standardformulierungen werden nicht importiert.</p></article>
        <article><span>02</span><h3>Eigenrechte klar verankern</h3><p>Ziel ist in allen Ländern die Anerkennung der natürlichen Mitwelt als Trägerin eigener Rechte – relational oder durch eine positive Statusnorm.</p></article>
        <article><span>03</span><h3>Prozessrecht trennen</h3><p>Eigene materielle Rechte bedeuten nicht automatisch Klagebefugnis, Prozessstandschaft oder Vertretungsregeln. Diese Ebene ist gesondert zu gestalten.</p></article>
      </section>

      <section className={styles.map} id="laender">
        <div className={styles.sectionHead}><p className={styles.label}>Landkarte</p><h2>Alle 16 Länder haben jetzt einen geprüften Normstand.</h2><p>Die Entwürfe wurden landesspezifisch rückgeprüft und zu einer bereinigten 16-Länder-Schlussfassung konsolidiert. Bayern befindet sich zusätzlich in der laufenden Sammelphase.</p></div>
        <div className={styles.stateGrid}>{federalStates.map(({name,status},i)=>{
          const draftSlug = draftByState[name];
          const stateTone = name === "Bayern" ? styles.active : styles.prepared;
          return <article className={`${styles.stateCard} ${stateTone}`} key={name}>
            <span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>
            {draftSlug ? <Link href={`/deutschland/${draftSlug}`}><strong>Geprüften Normtext ansehen</strong><br/><small>Landesfassung →</small></Link> : null}
            {name === "Bayern" ? <Link href="/volksbegehren/bayern"><small>Laufende Kampagne →</small></Link> : null}
          </article>;
        })}</div>
      </section>

      <section className={styles.status}>
        <div className={styles.sectionHead}><p className={styles.label}>Vom Normstand zum Landesweg</p><h2>Prüfung abgeschlossen – Umsetzung bleibt landesspezifisch.</h2><p>Der geprüfte Normtext ist die rechtliche Grundlage. Verfahren, Trägerkreis und Kampagnenaufbau werden in jedem Bundesland gesondert entwickelt.</p></div>
        <div className={styles.statusGrid}>{status.map(([title,text],i)=><article className={i === 0 ? styles.legendPrepared : styles.legendActive} key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className={styles.bayern}><div><p className={styles.label}>Bayern · Ausgangspunkt und laufende Kampagne</p><h2>Vom bayerischen Entwurf zur 16-Länder-Architektur.</h2></div><div><p>Der bayerische Art.-101-Ansatz ist der historische Ausgangspunkt der Entwicklung. Seine spätere Präzisierung benennt ausdrücklich die „Rechte der natürlichen Mitwelt“. Zugleich bleibt Bayern wegen der relationalen Einbettung ein Modell mit Auslegungsvorbehalt.</p><Link className={styles.button} href="/deutschland/bayern">Geprüften Bayern-Text ansehen →</Link><br/><Link className={styles.textLink} href="/volksbegehren/bayern">Zur laufenden Sammelphase →</Link></div></section>

      <section className={styles.join}><p className={styles.label}>Landeswege aufbauen</p><h2>Der Normstand ist da. Jetzt braucht es Menschen und Strukturen vor Ort.</h2><div className={styles.joinLinks}><Link href="/mitmachen">Mitstreiten und mitaufbauen →</Link><Link href="/volksbegehren">Von der Idee zur Landesinitiative →</Link><Link href="/volksbegehren/bayern">Bayern: laufende Sammelphase →</Link></div></section>

      <footer className={styles.footer}><Link href="/">Startseite</Link><Link href="/volksbegehren">Volksbegehren</Link><Link href="/mitmachen">Mitmachen</Link><span>16-Länder-Schlussfassung</span></footer>
    </main>
  );
}
