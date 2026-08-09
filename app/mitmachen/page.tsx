import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const paths = [
  {
    title: "In Bayern sammeln",
    text: "Die Unterschriftensammlung für den Zulassungsantrag läuft. Wer mitmachen will, kann Originalbögen verteilen, sammeln, erklären und weitere Unterstützer gewinnen.",
    href: "https://gibdernaturrecht.muc-mib.de/unterschriften-sammeln",
    action: "Unterschriften sammeln →",
    external: true,
  },
  {
    title: "Im eigenen Bundesland anfangen",
    text: "Jedes Bundesland hat eigene Regeln und politische Bedingungen. Der erste Schritt ist, Menschen vor Ort zusammenzubringen und den passenden rechtlichen Weg zu klären.",
    href: "/deutschland",
    action: "Mein Bundesland ansehen →",
  },
  {
    title: "Als Organisation mittragen",
    text: "Organisationen und Initiativen können die Volksbegehren sichtbar unterstützen, Erfahrungen einbringen und Teil des bestehenden Bündnisses werden.",
    href: "/buendnispartner",
    action: "Zum Bündnis →",
  },
  {
    title: "Fachlich beitragen",
    text: "Juristische, wissenschaftliche und institutionelle Expertise hilft, Länderwege, Zieltexte und Wirkungsbedingungen belastbar weiterzuentwickeln.",
    href: "https://systemische-rechtsentwicklung.de",
    action: "Zur fachlichen Arbeit →",
    external: true,
  },
];

export default function Mitmachen() {
  return (
    <main className="joinPage">
      <SiteHeader section="Mitmachen" claimLead="Gib der Natur Recht." claimTrail="Mitdenken. Mitgestalten. Mitsammeln." />

      <section className="joinHero">
        <p className="eyebrow">Mitmachen</p>
        <h1>Vier Wege, jetzt konkret mitzumachen.</h1>
        <p className="lead">In Bayern läuft die Unterschriftensammlung. In anderen Bundesländern können neue Wege entstehen. Organisationen können das Bündnis stärken, Fachleute die rechtliche und institutionelle Arbeit vertiefen.</p>
        <div className="heroActions"><a className="buttonPrimary" href="#wege">Meinen Einstieg wählen</a><Link className="textLink" href="/deutschland">Die 16 Bundesländer ansehen →</Link></div>
      </section>

      <section className="joinWays" id="wege">
        {paths.map((p,i)=><article key={p.title}><span>{String(i+1).padStart(2,"0")}</span><h2>{p.title}</h2><p>{p.text}</p>{p.external?<a className="joinWayLink" href={p.href} target="_blank" rel="noreferrer">{p.action}</a>:<Link className="joinWayLink" href={p.href}>{p.action}</Link>}</article>)}
      </section>

      <section className="joinStates"><div><p className="sectionLabel">Ein neues Bundesland</p><h2>Aus Interesse wird ein tragfähiger Landesweg.</h2><p>Neue Initiativen beginnen mit Menschen vor Ort. Danach werden Rechtslage, Verfahren, Zieltext, Bündnisse und Kampagnenaufbau Schritt für Schritt verbunden.</p></div><div className="joinSteps"><span>01 · Mitstreiter und lokale Kontakte zusammenbringen</span><span>02 · Rechtslage und Verfahren klären</span><span>03 · Zieltext und Kampagne vorbereiten</span><span>04 · Öffentlichkeit und Bündnisse aufbauen</span><span>05 · Unterschriftensammlung organisieren</span></div></section>

      <section className="joinRule"><div><p className="sectionLabel">Unser Anspruch</p><h2>Überzeugung und Sorgfalt gehören zusammen.</h2></div><div><p>Wir gewinnen Menschen für Rechte der Natur auf einer belastbaren Grundlage: mit klaren Zielen, guten Quellen und realistischen nächsten Schritten.</p><p>So entsteht eine Kampagne, die mobilisieren und dauerhaft tragen kann.</p></div></section>

      <section className="joinContact"><p className="sectionLabel">Direkt loslegen</p><h2>Der nächste Schritt ist nur einen Klick entfernt.</h2><p>Wer in Bayern sammeln, ein Bundesland aufbauen oder als Organisation mittragen will, findet hier direkt den passenden Einstieg.</p><div className="heroActions"><a className="buttonPrimary" href="https://gibdernaturrecht.muc-mib.de/unterschriften-sammeln" target="_blank" rel="noreferrer">In Bayern sammeln →</a><Link className="textLink" href="/deutschland">Bundesland auswählen →</Link><Link className="textLink" href="/buendnispartner">Bündnispartner werden →</Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Mitmachen</small></div></div><p>Mitstreiter, Wissen und Kampagnenkraft zusammenbringen.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
