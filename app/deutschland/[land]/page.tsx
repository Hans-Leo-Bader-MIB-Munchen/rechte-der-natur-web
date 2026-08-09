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
      <SiteHeader section={entwurf.name} claimLead="Frühere Initiative." claimTrail="Ein Entwurf als neuer Startpunkt." />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{entwurf.name} · früherer Textentwurf</p>
        <h1>Ein früherer Entwurf als Ausgangspunkt für einen neuen Landesweg.</h1>
        <p className={styles.lead}>{entwurf.einordnung}</p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <div>
            <p className={styles.label}>Dokumentierter Arbeitsstand</p>
            <h2>{entwurf.artikel}</h2>
          </div>
          <div>
            <p>Der folgende Wortlaut stammt aus dem damaligen Entwurf der Initiative. Er wird hier als historischer Arbeitsstand dokumentiert und bildet Material für eine heutige rechtliche und politische Weiterentwicklung.</p>
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
            <p className={styles.label}>Heutige Weiterentwicklung</p>
            <h2>Der Entwurf ist Startmaterial, kein Endpunkt.</h2>
          </div>
          <div>
            <p>Für einen heutigen Landesweg werden die jeweilige Landesverfassung, das Verfahren direkter Demokratie sowie Fragen von Vertretung, institutioneller Einbindung und tatsächlicher Wirksamkeit neu geprüft.</p>
            <p>Damit bleibt die damalige Vorarbeit sichtbar und kann zugleich mit dem heutigen Wissen weiterentwickelt werden.</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link className={styles.button} href="/deutschland">Zurück zur Deutschlandseite</Link>
          <Link className={styles.textLink} href="/mitmachen">Landesweg mit aufbauen →</Link>
        </div>
      </section>
    </main>
  );
}
