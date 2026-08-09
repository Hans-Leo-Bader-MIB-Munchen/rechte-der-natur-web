import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const paths = [
  { title: "Mitdenken", text: "Du kennst ein Bundesland, einen Naturraum, ein Verfahren oder eine juristische Besonderheit, die wir berücksichtigen sollten? Hinweise sind willkommen – Anregung und Beleg bleiben sauber getrennt." },
  { title: "Mitprüfen", text: "Wer juristisch, wissenschaftlich oder institutionell beitragen kann, hilft bei Länderprüfungen, internationalen Fällen und belastbaren Zieltexten." },
  { title: "Mitaufbauen", text: "Eine Landesinitiative entsteht nicht aus einer Website. Wir brauchen Menschen vor Ort, die Kontakte knüpfen, Treffen organisieren und Verantwortung übernehmen." },
  { title: "Mitgestalten", text: "Kampagne heißt auch Sprache, Bilder, Veranstaltungen, Pressearbeit und Materialien. Gute Kommunikation entscheidet mit darüber, ob Menschen mitgehen." },
  { title: "Mitsammeln", text: "Wenn ein Volksbegehren die formale Phase erreicht, werden Unterstützungsunterschriften und später Eintragungen ganz konkret. Dann braucht es viele Hände, Orte und Gespräche." },
];

export default function Mitmachen() {
  return (
    <main className="joinPage">
      <SiteHeader section="Mitmachen" />
      <section className="heritageStrip"><span>Gib der Natur Recht.</span><span className="heritageColors"><i/><i/><i/><i/></span><span>Mitdenken. Mitstreiten. Mitsammeln.</span></section>

      <section className="joinHero">
        <p className="eyebrow">Mitmachen</p>
        <h1>Aus einer Idee wird nur mit Menschen eine Kampagne.</h1>
        <p className="lead">Rechte der Natur werden nicht durch eine Website Wirklichkeit. Wir brauchen Mitstreiter, Fachwissen, lokale Netzwerke, Öffentlichkeit – und wenn ein Volksbegehren startet, ganz praktisch Menschen, die Unterschriften sammeln.</p>
        <div className="heroActions"><a className="buttonPrimary" href="#wege">Wie kann ich helfen?</a><Link className="textLink" href="/deutschland">Mein Bundesland ansehen →</Link></div>
      </section>

      <section className="joinWays" id="wege">
        {paths.map((p,i)=><article key={p.title}><span>{String(i+1).padStart(2,"0")}</span><h2>{p.title}</h2><p>{p.text}</p></article>)}
      </section>

      <section className="joinRule"><div><p className="sectionLabel">Unser Anspruch</p><h2>Eine glaubwürdige Kampagne darf genau hinschauen.</h2></div><div><p>Wir wollen Menschen für Rechte der Natur gewinnen. Gerade deshalb müssen rechtlicher Stand, internationale Erfahrungen und Kampagnenstatus belastbar sein.</p><p>Prüfung ersetzt keine Mobilisierung. Sie verhindert nur, dass wir mit falschen Versprechen mobilisieren.</p></div></section>

      <section className="joinStates"><div><p className="sectionLabel">16 Länder</p><h2>Du willst in deinem Bundesland anfangen?</h2><p>Dann brauchen wir beides: einen tragfähigen rechtlichen Weg und Menschen, die ihn politisch möglich machen.</p></div><div className="joinSteps"><span>01 · Mitstreiter und lokale Kontakte zusammenbringen</span><span>02 · Rechtslage und Verfahren klären</span><span>03 · Zieltext und Kampagne vorbereiten</span><span>04 · Öffentlichkeit und Bündnisse aufbauen</span><span>05 · wenn es soweit ist: Unterschriften sammeln</span></div></section>

      <section className="joinContact"><p className="sectionLabel">Jetzt konkret werden</p><h2>Wir bauen gerade die Beteiligungswege auf.</h2><p>Die direkte Kontakt- und Landesinitiative-Funktion kommt als nächster funktionaler Schritt. Sie soll unterscheiden können, ob du fachlich helfen, eine Landesgruppe aufbauen, Kampagnenarbeit übernehmen oder bei einer späteren Sammlung mitmachen möchtest.</p><div className="heroActions"><Link className="buttonPrimary" href="/deutschland">Bundesland auswählen →</Link><Link className="textLink" href="/volksbegehren">Wie Volksbegehren aufgebaut werden →</Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Mitmachen</small></div></div><p>Mitstreiter, Wissen und Kampagnenkraft zusammenbringen.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
