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

  return (
    <main className={styles.page}>
      <SiteHeader section={entwurf.name} claimLead="Vorarbeit ist da." claimTrail="Jetzt kann der Landesweg weiterwachsen." />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{entwurf.name} · Vorarbeit</p>
        <h1>Ein Textentwurf als Startpunkt für die weitere Entwicklung.</h1>
        <p className={styles.lead}>{entwurf.einordnung}</p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <div>
            <p className={styles.label}>Textentwurf</p>
            <h2>{entwurf.artikel}</h2>
          </div>
          <div>
            <p>Für {entwurf.name} liegt bereits ein konkreter Verfassungstext vor. Er schafft eine belastbare Grundlage, auf der die weitere rechtliche und politische Entwicklung aufbauen kann.</p>
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
            <p className={styles.label}>Weiterentwicklung</p>
            <h2>Aus Vorarbeit kann ein neuer Landesweg wachsen.</h2>
          </div>
          <div>
            <p>Der nächste Schritt verbindet den vorhandenen Entwurf mit der heutigen Verfassungslage, dem jeweiligen Verfahren direkter Demokratie und den Erfahrungen aus der Systemischen Rechtsentwicklung.</p>
            <p>Daraus kann ein tragfähiger Text mit passender Vertretung, institutioneller Einbindung und klarer Kampagnenstruktur entstehen.</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link className={styles.button} href="/deutschland">Alle Bundesländer ansehen</Link>
          <Link className={styles.textLink} href="/mitmachen">Landesweg mit aufbauen →</Link>
        </div>
      </section>
    </main>
  );
}
