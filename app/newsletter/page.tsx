import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

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
          <a className="textLink" href="#archiv">Zum Archiv →</a>
          <Link className="textLink" href="/datenschutz">Hinweise zum Datenschutz →</Link>
        </div>
      </section>

      <section className="joinContact" id="archiv">
        <p className="sectionLabel">Archiv</p>
        <h2>Versandte Newsletter dauerhaft nachlesen.</h2>
        <p>Nach dem Versand sichern wir jede Ausgabe zusätzlich als eigene Archivfassung auf rechtedernatur.de. Damit bleiben die Inhalte unabhängig von der Versandplattform erhalten und teilbar.</p>
        <div style={{marginTop:24}}>
          <Link href="/newsletter/2026-08-11" style={{display:'block',padding:'24px 26px',borderRadius:18,background:'#eef5e6',borderTop:'4px solid #8abb45',color:'#496b35',textDecoration:'none'}}>
            <span style={{display:'block',fontSize:12,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'#8abb45',marginBottom:8}}>11. August 2026</span>
            <strong style={{display:'block',fontSize:24,lineHeight:1.15,marginBottom:8}}>Es war eine Weile ruhig. Inzwischen ist einiges entstanden.</strong>
            <span style={{fontSize:15,lineHeight:1.6}}>Volksbegehren, neuer Webauftritt, Systemische Rechtsentwicklung, ZukunftsCheck und weitere Entwicklungslinien.</span>
          </Link>
        </div>
      </section>

      <section className="joinContact" id="anmeldung">
        <p className="sectionLabel">Anmeldung</p>
        <h2>Newsletter abonnieren.</h2>
        <p>Die Anmeldung wird über unseren bestehenden Brevo-Newsletter-Verteiler abgewickelt. Nach der Anmeldung erhältst du die dort eingerichtete Bestätigung.</p>
        <div style={{ width: "100%", maxWidth: 900, margin: "28px auto 0" }}>
          <iframe
            title="Newsletter-Anmeldung Rechte der Natur"
            src={brevoFormUrl}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            style={{
              display: "block",
              width: "760px",
              maxWidth: "100%",
              height: "980px",
              marginLeft: "auto",
              marginRight: "auto",
              border: 0,
              overflow: "hidden",
            }}
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
    </main>
  );
}
