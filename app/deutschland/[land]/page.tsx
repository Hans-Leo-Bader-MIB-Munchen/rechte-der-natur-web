import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { landesEntwurfNachSlug, landesEntwuerfe } from "../land-entwuerfe";
import styles from "./page.module.css";

export function generateStaticParams() {
  return landesEntwuerfe.map((item) => ({ land: item.slug }));
}

function oeffentlicherAnsatz(architektur: string) {
  if (architektur.startsWith("Relationale")) {
    return "Der Vorschlag knüpft an eine bestehende Freiheitsregel der Landesverfassung an und ergänzt dort ausdrücklich die Rechte der natürlichen Mitwelt.";
  }
  return "Der Vorschlag schafft eine eigenständige Verfassungsbestimmung, die der natürlichen Mitwelt eigene Rechte zuspricht.";
}

function oeffentlicherVerfahrensweg(verfahrensklasse: "V1" | "V2") {
  if (verfahrensklasse === "V2") {
    return "Eine Verfassungsänderung muss hier vom Landtag auf den Weg gebracht werden; anschließend ist die Zustimmung des Volkes erforderlich.";
  }
  return "Ein aus der Bevölkerung angestoßener Weg zu einer Verfassungsänderung ist grundsätzlich möglich. Die genauen Voraussetzungen unterscheiden sich je nach Bundesland und werden gesondert geprüft.";
}

export default async function LandesEntwurfSeite({ params }: { params: Promise<{ land: string }> }) {
  const { land } = await params;
  const entwurf = landesEntwurfNachSlug[land];
  if (!entwurf) notFound();
  const mailSubject = encodeURIComponent(`Landesweg ${entwurf.name} mit aufbauen`);

  return (
    <main className={styles.page}>
      <SiteHeader section={entwurf.name} claimLead="Intern geprüfter Normstand." claimTrail="Externe Gegenprüfung folgt." />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{entwurf.name} · 16-Länder-Arbeitsstand</p>
        <h1>Ein projektintern geprüfter Entwurf für die weitere Entwicklung.</h1>
        <p className={styles.lead}>{entwurf.einordnung}</p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <div>
            <p className={styles.label}>Normvorschlag</p>
            <h2>{entwurf.artikel}</h2>
          </div>
          <div>
            <p><strong>Prüfstand:</strong> projektintern geprüft; eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen.</p>
            <p><strong>Rechtlicher Ansatz:</strong> {oeffentlicherAnsatz(entwurf.architektur)}</p>
            <p><strong>Weg zur Verfassungsänderung:</strong> {oeffentlicherVerfahrensweg(entwurf.verfahrensklasse)}</p>
          </div>
        </div>

        <div className={styles.draftBox}>
          {entwurf.abschnitte.map((abschnitt, index) => (
            <p key={`${abschnitt.label ?? "text"}-${index}`} className={abschnitt.added ? styles.added : undefined}>
              {abschnitt.label ? <strong>{abschnitt.label} </strong> : null}{abschnitt.text}
            </p>
          ))}
        </div>

        <div className={styles.today}>
          <div>
            <p className={styles.label}>Was dieser Entwurf leistet</p>
            <h2>Eigene Rechte der natürlichen Mitwelt – passend zur jeweiligen Landesverfassung.</h2>
          </div>
          <div>
            <p>Alle 16 Vorschläge verfolgen dasselbe Ziel: Die natürliche Mitwelt soll nicht nur geschützt, sondern als Trägerin eigener Rechte in der jeweiligen Landesverfassung anerkannt werden.</p>
            <p>Wie das geschieht, hängt von der Verfassung des einzelnen Landes ab. Manche Länder können an eine bereits vorhandene Freiheitsregel anknüpfen; in anderen ist eine eigenständige Rechte-Bestimmung die klarere Lösung.</p>
            <p><strong>Wichtig:</strong> Die Anerkennung eigener Rechte regelt noch nicht automatisch, wer diese Rechte vor Gericht geltend machen oder die natürliche Mitwelt vertreten kann. Solche Verfahrens- und Vertretungsfragen werden gesondert geprüft. Rechte der natürlichen Mitwelt sind kein Klageinstrument.</p>
          </div>
        </div>

        <div className={styles.coordination}>
          <p className={styles.label}>Stand der 16-Länder-Arbeit</p>
          <h2>Ein gemeinsames Ziel – 16 verfassungsrechtlich unterschiedliche Wege.</h2>
          <p>Die Entwürfe wurden projektintern mit dem geltenden Aufbau und Wortlaut der jeweiligen Landesverfassung abgeglichen. Frühere Fassungen wurden dort korrigiert, wo sie nicht mehr zum aktuellen Verfassungstext oder zum gewählten Ansatz passten.</p>
          <p>Eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen. Auch die konkreten gesetzlichen Voraussetzungen, Fristen und Quoren für einen späteren politischen oder direktdemokratischen Weg werden für jedes Bundesland gesondert geprüft.</p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.button} href="/deutschland">Alle Bundesländer ansehen</Link>
          {entwurf.slug === "bayern" ? <Link className={styles.textLink} href="/volksbegehren/bayern">Bayern: laufende Kampagne →</Link> : <a className={styles.textLink} href={`mailto:info@dubistdieer.de?subject=${mailSubject}`}>Landesweg mit aufbauen →</a>}
        </div>
      </section>
    </main>
  );
}
