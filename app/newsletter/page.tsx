import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const existingSignupUrl = "https://gibdernaturrecht.muc-mib.de/newsletter-rechte-der-natur-das-volksbegehren";

export default function NewsletterPage() {
  return (
    <main id="top" className="joinPage">
      <SiteHeader section="Newsletter" claimLead="Rechte der Natur." claimTrail="Aktuell bleiben." />

      <section className="joinHero">
        <p className="eyebrow">Newsletter</p>
        <h1>Newsletter Rechte der Natur</h1>
        <p className="lead">Neuigkeiten zu den Volksbegehren, internationalen Entwicklungen, Systemischer Rechtsentwicklung und unserer Arbeit.</p>
        <div className="heroActions">
          <a className="buttonPrimary" href={existingSignupUrl} target="_blank" rel="noreferrer">Newsletter abonnieren →</a>
          <Link className="textLink" href="/datenschutz">Hinweise zum Datenschutz →</Link>
        </div>
      </section>

      <section className="joinRule">
        <div>
          <p className="sectionLabel">Ein Verteiler</p>
          <h2>Die Anmeldung führt in unseren bestehenden Newsletter-Verteiler.</h2>
        </div>
        <div>
          <p>Wir führen keinen zweiten Newsletter und keine parallele Empfängerliste. Die Anmeldung wird weiterhin über den bestehenden Brevo-Verteiler für <strong>Rechte der Natur – Die Volksbegehren</strong> abgewickelt.</p>
          <p>Du kannst dich jederzeit über den Abmeldelink in jeder Newsletter-E-Mail wieder austragen.</p>
        </div>
      </section>

      <section className="joinContact">
        <p className="sectionLabel">Was dich erwartet</p>
        <h2>Neue Fälle, neue Wege und konkrete nächste Schritte.</h2>
        <p>Wir berichten über die Volksbegehren, internationale Entwicklungen zu Rechten der Natur, neue Beiträge und Fallanalysen sowie über die Systemische Rechtsentwicklung und den ZukunftsCheck.</p>
        <div className="heroActions">
          <a className="buttonPrimary" href={existingSignupUrl} target="_blank" rel="noreferrer">Jetzt Newsletter abonnieren →</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
