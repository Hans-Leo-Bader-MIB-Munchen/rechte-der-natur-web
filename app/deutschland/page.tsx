import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { federalStates } from "../lib/states";
import { landesEntwuerfe } from "./land-entwuerfe";
import styles from "./page.module.css";

const status = [
  ["Intern geprüfter Normstand", "Für jedes Bundesland liegt eine projektintern geprüfte Verfassungsfassung als Grundlage der weiteren Entwicklung vor. Eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen."],
  ["Aktive Sammlung", "Bayern verbindet diesen Arbeitsstand bereits mit einer laufenden Sammlung von Unterstützungsunterschriften."],
];

const draftByState = Object.fromEntries(landesEntwuerfe.map((item) => [item.name, item.slug]));

export default function Deutschland() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Deutschland" claimLead="Gib der Natur Recht." claimTrail="16 Länder. Passende Verfassungswege." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Deutschland</p>
          <h1>16 Bundesländer.<br className={styles.desktopBreak}/> 16 intern geprüfte Verfassungswege.</h1>
          <p className={styles.lead}>Die Landesverfassungen unterscheiden sich deutlich. Deshalb gibt es keinen starren Einheitstext. Die 16-Länder-Arbeit verbindet ein gemeinsames Ziel – eigene Rechte der natürlichen Mitwelt – mit einer jeweils passenden verfassungsrechtlichen Lösung. Der aktuelle Stand ist projektintern geprüft; eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen.</p>
          <div className={styles.actions}><a className={styles.button} href="#laender">Die Länder ansehen</a><Link className={styles.textLink} href="/volksbegehren">Zur Kampagnenidee →</Link></div>
        </div>
      </section>

      <section className={styles.principle}>
        <p className={styles.label}>Gemeinsames Ziel</p>
        <h2>Eigene Rechte der natürlichen Mitwelt – passend zur jeweiligen Landesverfassung.</h2>
        <p>In einigen Ländern lässt sich der Vorschlag an eine bereits bestehende Freiheitsregel anknüpfen. In anderen Ländern ist eine eigenständige Verfassungsbestimmung die klarere Lösung. Entscheidend ist nicht ein bundesweit identischer Satz, sondern die ausdrückliche Anerkennung eigener Rechte der natürlichen Mitwelt.</p>
      </section>

      <section className={styles.three}>
        <article><span>01</span><h3>Verfassung ernst nehmen</h3><p>Ausgangspunkt sind Wortlaut und Aufbau der jeweiligen Landesverfassung. Zusätzliche Änderungen, die für die Rechte der natürlichen Mitwelt nicht erforderlich sind, werden vermieden.</p></article>
        <article><span>02</span><h3>Eigene Rechte verankern</h3><p>Die natürliche Mitwelt soll nicht nur geschützt, sondern als Trägerin eigener Rechte verfassungsrechtlich anerkannt werden.</p></article>
        <article><span>03</span><h3>Verfahren getrennt prüfen</h3><p>Die Anerkennung eigener Rechte beantwortet noch nicht automatisch Fragen der Vertretung, gerichtlichen Geltendmachung oder des konkreten Weges zur Verfassungsänderung.</p></article>
      </section>

      <section className={styles.map} id="laender">
        <div className={styles.sectionHead}><p className={styles.label}>Landkarte</p><h2>Für alle 16 Länder liegt jetzt ein intern geprüfter Normvorschlag vor.</h2><p>Die Vorschläge wurden projektintern mit der jeweiligen Landesverfassung abgeglichen und zu einem gemeinsamen 16-Länder-Arbeitsstand zusammengeführt. Eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen. Bayern befindet sich zusätzlich in der laufenden Sammelphase.</p></div>
        <div className={styles.stateGrid}>{federalStates.map(({name,status},i)=>{
          const draftSlug = draftByState[name];
          const stateTone = name === "Bayern" ? styles.active : styles.prepared;
          return <article className={`${styles.stateCard} ${stateTone}`} key={name}>
            <span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>
            {draftSlug ? <Link href={`/deutschland/${draftSlug}`}><strong>Normvorschlag ansehen</strong><br/><small>Landesfassung →</small></Link> : null}
            {name === "Bayern" ? <Link href="/volksbegehren/bayern"><small>Laufende Kampagne →</small></Link> : null}
          </article>;
        })}</div>
      </section>

      <section className={styles.status}>
        <div className={styles.sectionHead}><p className={styles.label}>Vom Normvorschlag zum Landesweg</p><h2>Interne Prüfung abgeschlossen – externe Gegenprüfung folgt.</h2><p>Die derzeitigen Texte sind eine fachliche Arbeitsgrundlage. Vor einer endgültigen verfahrens- oder kampagnenbezogenen Freigabe ist eine zusätzliche externe bzw. universitäre Gegenprüfung vorgesehen. Auch Verfahren, Trägerkreis und Kampagnenaufbau werden in jedem Bundesland gesondert entwickelt.</p></div>
        <div className={styles.statusGrid}>{status.map(([title,text],i)=><article className={i === 0 ? styles.legendPrepared : styles.legendActive} key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className={styles.bayern}><div><p className={styles.label}>Bayern · Ausgangspunkt und laufende Kampagne</p><h2>Vom bayerischen Entwurf zu 16 Landeswegen.</h2></div><div><p>Der bayerische Art.-101-Ansatz ist der historische Ausgangspunkt der Entwicklung. Die heutige Formulierung benennt ausdrücklich die „Rechte der natürlichen Mitwelt“. Aus den Erfahrungen in Bayern ist die Idee entstanden, auch für die anderen Landesverfassungen jeweils eine passende Fassung zu entwickeln.</p><Link className={styles.button} href="/deutschland/bayern">Bayern-Normvorschlag ansehen →</Link><br/><Link className={styles.textLink} href="/volksbegehren/bayern">Zur laufenden Sammelphase →</Link></div></section>

      <section className={styles.join}><p className={styles.label}>Landeswege aufbauen</p><h2>Die Normvorschläge sind da. Jetzt braucht es Gegenprüfung, Menschen und Strukturen vor Ort.</h2><div className={styles.joinLinks}><Link href="/mitmachen">Mitstreiten und mitaufbauen →</Link><Link href="/volksbegehren">Von der Idee zur Landesinitiative →</Link><Link href="/volksbegehren/bayern">Bayern: laufende Sammelphase →</Link></div></section>

      <footer className={styles.footer}><Link href="/">Startseite</Link><Link href="/volksbegehren">Volksbegehren</Link><Link href="/mitmachen">Mitmachen</Link><span>16-Länder-Arbeitsstand · intern geprüft</span></footer>
    </main>
  );
}
