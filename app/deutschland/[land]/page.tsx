import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { landesEntwurfNachSlug, landesEntwuerfe } from "../land-entwuerfe";
import styles from "./page.module.css";

export function generateStaticParams() {
  return landesEntwuerfe.map((item) => ({ land: item.slug }));
}

export default async function LandesEntwurfSeite({ params }: { params: Promise<{ land: string }> }) {
  const { land } = await params;
  const entwurf = landesEntwurfNachSlug[land];
  if (!entwurf) notFound();
  const mailSubject = encodeURIComponent(`Landesweg ${entwurf.name} mit aufbauen`);

  return (
    <main className={styles.page}>
      <SiteHeader section={entwurf.name} claimLead="Geprüfter Normstand." claimTrail="Jetzt kann der Landesweg weiterwachsen." />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{entwurf.name} · 16-Länder-Schlussfassung</p>
        <h1>Ein verfassungsrechtlich geprüfter Entwurf für die weitere Entwicklung.</h1>
        <p className={styles.lead}>{entwurf.einordnung}</p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <div>
            <p className={styles.label}>Normvorschlag</p>
            <h2>{entwurf.artikel}</h2>
          </div>
          <div>
            <p><strong>Architektur:</strong> {entwurf.architektur}</p>
            <p><strong>Materieller Eigenrechtsstatus:</strong> {entwurf.eigenrechtsstatus}</p>
            <p><strong>Verfahrensklasse:</strong> {entwurf.verfahrensklasse}</p>
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
            <h2>Eigene Rechte der natürlichen Mitwelt – landesspezifisch verankert.</h2>
          </div>
          <div>
            <p>Die 16-Länder-Architektur verfolgt einen gemeinsamen materiellen Kern: Die natürliche Mitwelt soll als Trägerin eigener Rechte verfassungsrechtlich anerkannt werden. Die konkrete Normtechnik richtet sich nach der jeweiligen Landesverfassung.</p>
            <p>Relationale Modelle verankern die Rechte der natürlichen Mitwelt in bestehenden Freiheits- und Schrankenbestimmungen. Positive Modelle schaffen eine eigenständige Statusnorm. Wo die Rechtsträgerschaft nur relational formuliert ist, bleibt ein Auslegungsvorbehalt bestehen.</p>
            <p><strong>Wichtig:</strong> Materieller Eigenrechtsstatus und Prozessrecht sind getrennte Ebenen. Aus dem Verfassungstext folgen nicht automatisch Prozessfähigkeit, Klagebefugnis, Prozessstandschaft, gesetzliche Vertretung oder Verbandsklagebefugnisse. Rechte der natürlichen Mitwelt sind kein Klageinstrument.</p>
          </div>
        </div>

        <div className={styles.coordination}>
          <p className={styles.label}>Stand der 16-Länder-Arbeit</p>
          <h2>16 Landesverfassungen, zwei Grundformen, ein gemeinsamer materieller Kern.</h2>
          <p>Die Entwürfe wurden landesspezifisch gegen die jeweilige Verfassungsarchitektur geprüft und anschließend zu einer gemeinsamen 16-Länder-Schlussfassung konsolidiert. Dabei wurden überholte frühere Varianten nicht übernommen.</p>
          <p>Die Verfahrensklasse beschreibt nur die grundsätzliche verfassungsänderungsrechtliche Einordnung. Sie ersetzt keine spätere landesspezifische Zulässigkeits- oder Kampagnenprüfung.</p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.button} href="/deutschland">Alle Bundesländer ansehen</Link>
          {entwurf.slug === "bayern" ? <Link className={styles.textLink} href="/volksbegehren/bayern">Bayern: laufende Kampagne →</Link> : <a className={styles.textLink} href={`mailto:info@dubistdieer.de?subject=${mailSubject}`}>Landesweg mit aufbauen →</a>}
        </div>
      </section>
    </main>
  );
}
