import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const paths = [
  { title: "Mitdenken", text: "Du kennst ein Bundesland, einen Naturraum, ein Verfahren oder eine juristische Besonderheit? Teile dein Wissen und bring neue Perspektiven in die Kampagne ein." },
  { title: "Mitprüfen", text: "Wer juristisch, wissenschaftlich oder institutionell beitragen kann, hilft bei Länderprüfungen, internationalen Fällen und belastbaren Zieltexten." },
  { title: "Mitaufbauen", text: "Eine Landesinitiative wächst durch Menschen vor Ort, die Kontakte knüpfen, Treffen organisieren und Verantwortung übernehmen." },
  { title: "Mitgestalten", text: "Kampagne heißt auch Sprache, Bilder, Veranstaltungen, Pressearbeit und Materialien. Gute Kommunikation entscheidet mit darüber, ob Menschen mitgehen." },
  { title: "Mitsammeln", text: "In Bayern läuft die Sammlung von Unterstützungsunterschriften für den Zulassungsantrag bereits. Dafür braucht es Menschen, die sammeln, erklären, Kontakte herstellen und neue Unterstützer gewinnen." },
];

export default function Mitmachen() {
  return (
    <main className="joinPage">
      <SiteHeader section="Mitmachen" claimLead="Gib der Natur Recht." claimTrail="Mitdenken. Mitstreiten. Mitsammeln." />

      <section className="joinHero">
        <p className="eyebrow">Mitmachen</p>
        <h1>Aus einer Idee wird mit Menschen eine Kampagne.</h1>
        <p className="lead">Rechte der Natur werden durch Menschen, Wissen, Netzwerke und Öffentlichkeit Wirklichkeit. In Bayern sammeln wir bereits Unterstützungsunterschriften für den Zulassungsantrag. Weitere Länder können auf dieser Erfahrung aufbauen.</p>
        <div className="heroActions"><a className="buttonPrimary" href="#wege">Wie kann ich helfen?</a><Link className="textLink" href="/deutschland">Mein Bundesland ansehen →</Link></div>
      </section>

      <section className="joinWays" id="wege">
        {paths.map((p,i)=><article key={p.title}><span>{String(i+1).padStart(2,"0")}</span><h2>{p.title}</h2><p>{p.text}</p></article>)}
      </section>

      <section className="joinRule"><div><p className="sectionLabel">Unser Anspruch</p><h2>Überzeugung und Sorgfalt gehören zusammen.</h2></div><div><p>Wir gewinnen Menschen für Rechte der Natur auf einer belastbaren Grundlage: mit klaren Zielen, guten Quellen und realistischen nächsten Schritten.</p><p>So entsteht eine Kampagne, die mobilisieren und zugleich dauerhaft tragen kann.</p></div></section>

      <section className="joinStates"><div><p className="sectionLabel">16 Länder</p><h2>Du willst in deinem Bundesland anfangen?</h2><p>Dann brauchen wir beides: einen tragfähigen rechtlichen Weg und Menschen, die ihn politisch möglich machen.</p></div><div className="joinSteps"><span>01 · Mitstreiter und lokale Kontakte zusammenbringen</span><span>02 · Rechtslage und Verfahren klären</span><span>03 · Zieltext und Kampagne vorbereiten</span><span>04 · Öffentlichkeit und Bündnisse aufbauen</span><span>05 · Unterschriftensammlung organisieren</span></div></section>

      <section className="joinContact"><p className="sectionLabel">Jetzt konkret werden</p><h2>Bayern sammelt bereits. Weitere Länder können folgen.</h2><p>Du kannst in Bayern beim Sammeln helfen, fachlich beitragen, Kontakte in deinem Bundesland zusammenbringen oder eine Landesinitiative mit aufbauen. Wähle deinen Einstieg.</p><div className="heroActions"><Link className="buttonPrimary" href="/volksbegehren/bayern">In Bayern mitmachen →</Link><Link className="textLink" href="/deutschland">Anderes Bundesland auswählen →</Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Mitmachen</small></div></div><p>Mitstreiter, Wissen und Kampagnenkraft zusammenbringen.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
