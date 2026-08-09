import SiteHeader from "../components/SiteHeader";

export default function Datenschutz() {
  return (
    <main className="legalPage">
      <SiteHeader section="Datenschutz" claimLead="Gib der Natur Recht." claimTrail="Transparenz gehört dazu." />
      <section className="legalHero">
        <p className="sectionLabel">Datenschutz</p>
        <h1>Hinweise zum Datenschutz dieser Website.</h1>
        <p>Diese Seite befindet sich derzeit im Preview-Betrieb. Vor der Veröffentlichung wird die Datenschutzerklärung anhand der endgültigen technischen Konfiguration nochmals geprüft.</p>
      </section>
      <section className="legalContent">
        <h2>Verantwortung und Kontakt</h2>
        <p>Verantwortlich für die Kampagnenseite ist Hans Leo Bader. Die bestehenden Kontakt- und Impressumsangaben sind bis zur endgültigen Übernahme auf der historischen Kampagnenseite erreichbar.</p>
        <a href="https://gibdernaturrecht.muc-mib.de/contact-us" target="_blank" rel="noreferrer">Kontakt und Impressum öffnen ↗</a>

        <h2>Bereitstellung der Website</h2>
        <p>Die Preview wird über Vercel bereitgestellt. Beim Abruf einer Website fallen technisch bedingte Verbindungs- und Systemdaten an, die durch die Hosting-Infrastruktur verarbeitet werden können.</p>
        <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Datenschutzhinweise von Vercel ↗</a>

        <h2>Tracking und Formulare</h2>
        <p>In der derzeitigen Version dieser Website ist kein eigenes Analyse- oder Tracking-System eingebunden. Die neue Website enthält derzeit auch kein eigenes Kontaktformular.</p>

        <h2>Externe Inhalte und Links</h2>
        <p>Einzelne Bilder werden derzeit noch aus der bestehenden Kampagnen-Mediathek geladen. Beim Abruf solcher Bilder entsteht technisch eine Verbindung zur historischen Kampagnenseite. Externe Links werden erst aufgerufen, wenn sie angeklickt werden.</p>

        <p className="legalNote">Diese Hinweise beschreiben den aktuellen technischen Preview-Stand. Vor dem Wechsel auf die endgültige Domain werden Hosting, externe Medien, Kontaktwege und etwaige zusätzliche Dienste nochmals vollständig geprüft und die Datenschutzerklärung entsprechend finalisiert.</p>
      </section>
    </main>
  );
}
