import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const brevoFormUrl = "https://03d1bbc7.sibforms.com/v2/serve/MUIFAEZHtmq9J2FBXbhrsrZ9WZuGP52DCEMTVYD96pL3ssK-HJEASZhpXPkBzoBbDx3PEYqdcu-Edvn2nxNLgp8DtyJGn4aZPHVA3xRcliI-WxSuqbQ0y-AF9HANFA2GhGyUaUx7dN6wP-dckXhRkqr9PEi5o3txhBj-RDnXx57C1aqNewX18NzoGWwSpXJiQB9rv3d7aB45MzCg";

export default function NewsletterPage() {
  return (
    <main id="top" className="joinPage">
      <SiteHeader section="Newsletter" claimLead="Rechte der Natur." claimTrail="Aktuell bleiben." />

      <section className="joinHero">
        <p className="eyebrow">Newsletter</p>
        <h1>Newsletter Rechte der Natur</h1>
        <p className="lead">Neuigkeiten zu den Volksbegehren, internationalen Entwicklungen, Systemischer Rechtsentwicklung und unserer Arbeit.</p>
        <div className="heroActions">
          <a className="buttonPrimary" href="#anmeldung">Newsletter abonnieren ↓</a>
          <Link className="textLink" href="/datenschutz">Hinweise zum Datenschutz →</Link>
        </div>
      </section>

      <section className="joinContact" id="anmeldung">
        <p className="sectionLabel">Anmeldung</p>
        <h2>Newsletter abonnieren.</h2>
        <p>Die Anmeldung wird über unseren bestehenden Brevo-Newsletter-Verteiler abgewickelt. Nach der Anmeldung erhältst du die dort eingerichtete Bestätigung.</p>
        <div style={{ width: "100%", maxWidth: 640, margin: "28px auto 0" }}>
          <iframe
            title="Newsletter-Anmeldung Rechte der Natur"
            width="540"
            height="305"
            src={brevoFormUrl}
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ display: "block", width: "100%", maxWidth: "540px", marginLeft: "auto", marginRight: "auto", border: 0 }}
          />
        </div>
        <p style={{ marginTop: 18, fontSize: "0.95rem" }}>Du kannst dich jederzeit über den Abmeldelink in jeder Newsletter-E-Mail wieder austragen. Weitere Informationen findest du in unseren <Link href="/datenschutz">Datenschutzhinweisen</Link>.</p>
      </section>

      <section className="joinRule">
        <div>
          <p className="sectionLabel">Ein Verteiler</p>
          <h2>Keine parallele Empfängerliste.</h2>
        </div>
        <div>
          <p>Die Anmeldung läuft über denselben Newsletter-Verteiler für <strong>Rechte der Natur – Die Volksbegehren</strong>, über den auch unsere bisherigen Newsletter versendet werden.</p>
          <p>Damit bleiben Anmeldung, Versand und Abmeldung an einer Stelle gebündelt.</p>
        </div>
      </section>

      <section className="joinContact">
        <p className="sectionLabel">Was dich erwartet</p>
        <h2>Neue Fälle, neue Wege und konkrete nächste Schritte.</h2>
        <p>Wir berichten über die Volksbegehren, internationale Entwicklungen zu Rechten der Natur, neue Beiträge und Fallanalysen sowie über die Systemische Rechtsentwicklung und den ZukunftsCheck.</p>
        <div className="heroActions">
          <a className="buttonPrimary" href="#anmeldung">Jetzt Newsletter abonnieren ↑</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
