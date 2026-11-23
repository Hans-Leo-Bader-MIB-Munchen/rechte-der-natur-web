import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uranium Filmfestivaltag München 2027 – Entwurf",
  description: "Film, Ausstellung und Gespräche über das Atomzeitalter, langfristige Verantwortung und die Rechte der Natur. Interner Entwurf.",
  robots: { index: false, follow: false },
};

const festival = "https://uraniumfilmfestival.org/de";
const film = "https://uraniumfilmfestival.org/de/film/quebec-2015-berlin-2014-passau-2014-rio-2014/final-picture";

export default function UraniumFilmfestivaltagEntwurf() {
  return (
    <main style={{ background: "#111c21", color: "#f4f3ed", minHeight: "100vh", fontFamily: "inherit" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(24px, 5vw, 70px)" }}>
        <p style={{ color: "#d7e58c", fontSize: 13, fontWeight: 700, letterSpacing: "0.14em" }}>INTERNER ENTWURF · NICHT FREIGEGEBEN</p>
        <p style={{ fontSize: 14, marginTop: 32 }}>MÜNCHEN · 2027 · TERMIN UND ORT IN PLANUNG</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "24px 0" }}>URANIUM<br />FILMFESTIVALTAG<br /><span style={{ color: "#d7e58c" }}>MÜNCHEN</span></h1>
        <p style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", lineHeight: 1.35, maxWidth: 760 }}>Die Folgen bleiben. Die Verantwortung auch.</p>
        <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 760, color: "#d9dfdc" }}>Ein geplanter Tag mit Film, Ausstellung und Diskussionen über das Atomzeitalter und die Frage, wie wir Menschen, natürliche Lebensgrundlagen und künftige Generationen wirksam schützen können.</p>
        <section style={{ marginTop: 70, paddingTop: 30, borderTop: "1px solid #52615e" }}>
          <h2 style={{ fontSize: 32 }}>Film im Programmvorschlag</h2>
          <p style={{ color: "#d7e58c", fontWeight: 700 }}>FINAL PICTURE</p>
          <p>Deutschland · 2013 · Regie: Michael von Hohenberg</p>
          <p style={{ lineHeight: 1.7, maxWidth: 760 }}>Ein Spielfilm über das Überleben nach einem Atomkrieg. Die geplante Vorführung soll ein Gespräch über nukleare Risiken, langfristige Verantwortung und den Schutz der natürlichen Mitwelt eröffnen.</p>
          <p style={{ fontSize: 14, color: "#cbd5d1" }}>Vorführung, Filmfassung, Gäste und Aufführungsrechte sind noch nicht bestätigt.</p>
          <a href={film} target="_blank" rel="noopener noreferrer" style={{ color: "#d7e58c" }}>Film auf der Website des International Uranium Film Festivals ansehen ↗</a>
        </section>
        <section style={{ marginTop: 65, paddingTop: 30, borderTop: "1px solid #52615e" }}>
          <h2 style={{ fontSize: 32 }}>Rechte der Natur</h2>
          <p style={{ lineHeight: 1.7, maxWidth: 760 }}>Was bedeutet Verantwortung, wenn Schäden an Gewässern, Böden und Lebensgemeinschaften über Generationen bestehen bleiben? Die Rechte der Natur eröffnen eine rechtliche Perspektive auf den Eigenwert natürlicher Systeme und ihre Berücksichtigung in Entscheidungen. Sie sind nicht bloß ein Klageinstrument.</p>
          <p style={{ lineHeight: 1.7, maxWidth: 760 }}>Geplant ist eine Verbindung mit der Wanderausstellung „Rechte der Natur“ und einem Gespräch über Vorsorge, bestehende Schutzinstrumente und mögliche zusätzliche Rechtsansätze.</p>
        </section>
        <section style={{ marginTop: 65, paddingTop: 30, borderTop: "1px solid #52615e" }}>
          <h2 style={{ fontSize: 32 }}>Geplantes Format</h2>
          <p style={{ lineHeight: 1.7 }}>Zwei bis drei ausgewählte Filme · Ausstellung · Gespräche mit Filmschaffenden und Fachleuten. Als Spielstätte werden Kino und geeignete ehemalige Bunkeranlagen geprüft.</p>
          <p style={{ lineHeight: 1.7 }}>München war bereits 2013 Veranstaltungsort des International Uranium Film Festivals. Der geplante Festivaltag knüpft an diese Geschichte an.</p>
          <a href={festival} target="_blank" rel="noopener noreferrer" style={{ color: "#d7e58c" }}>International Uranium Film Festival ↗</a>
        </section>
        <footer style={{ marginTop: 75, paddingTop: 25, borderTop: "1px solid #52615e", color: "#cbd5d1", fontSize: 13, lineHeight: 1.7 }}>
          <p>Konzeptentwurf. Keine offizielle Veranstaltungsankündigung. Termin, Veranstalter, Kooperationen, Marken- und Filmrechte, Spielstätte und Finanzierung sind noch zu klären. Keine Anmeldung und kein Ticketverkauf.</p>
          <p>Textentwurf in Kooperation mit KI (GPT, OpenAI). Inhaltliche Verantwortung: Hans Leo Bader. CC BY-NC-SA 4.0. Rechte an Filmen, Festivalnamen und Fremdmaterial bleiben bei den jeweiligen Berechtigten.</p>
        </footer>
      </div>
    </main>
  );
}
