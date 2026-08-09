import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const items = [
  { date: "09.08.2026", tag: "In Prüfung", title: "Kolumbien: neuer Flussrechte-Entwurf", text: "Ein aktueller Hinweis auf einen neuen Gesetzentwurf wird anhand amtlicher Quellen geprüft. Im Fokus stehen Verfahrensstand, Inhalt und institutionelle Architektur.", href: "#" },
  { date: "2026", tag: "Hintergrund", title: "Mar Menor: Was die Anerkennung praktisch verlangt", text: "Die spanische Lagune zeigt besonders deutlich, warum Anerkennung, Vertretung, institutionelle Zuständigkeit und tatsächliche Wirkung getrennt betrachtet werden müssen.", href: "/weltweit" },
  { date: "2026", tag: "Kampagne", title: "16 Länder – unterschiedliche Wege", text: "Die neue Deutschlandseite schafft die Grundlage für rechtlich saubere und politisch tragfähige Landesinitiativen mit jeweils eigenem Weg.", href: "/deutschland" },
];

const labels = [
  ["Bestätigt", "Aussage und Verfahrensstand sind belastbar geprüft und können als aktueller Sachstand veröffentlicht werden."],
  ["In Prüfung", "Ein relevanter Hinweis wird anhand der verfügbaren Primärquellen weiter geklärt."],
  ["Hintergrund", "Eine Einordnung, die aktuelle Entwicklungen in ihren größeren Zusammenhang stellt."],
  ["Kampagne", "Aktuelle Entwicklung innerhalb unserer eigenen Volksbegehrens- und Plattformarbeit."],
];

export default function Aktuelles() {
  return (
    <main className="newsPage">
      <SiteHeader section="Aktuelles" claimLead="Was sich bewegt." claimTrail="Geprüft. Eingeordnet. In Bewegung." />

      <section className="newsHero"><p className="eyebrow">Aktuelles</p><h1>Was neu ist – und was daraus für die Kampagne folgt.</h1><p className="lead">Neue Urteile, Gesetze und Initiativen prägen die Entwicklung der Rechte der Natur. Wir ordnen ein, was für die Kampagne relevant ist, und kennzeichnen den jeweiligen Stand klar.</p></section>

      <section className="newsRule"><div><p className="sectionLabel">Orientierung</p><h2>Aktuelles mit Substanz.</h2></div><div><p>Bestätigte Entwicklungen, laufende Prüfungen, Hintergründe und eigene Kampagnenarbeit sind klar gekennzeichnet.</p><p>So bleibt schnell sichtbar, was gesichert ist und was sich gerade entwickelt.</p></div></section>

      <section className="newsItems" id="beitraege">{items.map((item,i)=><article className="newsItem" key={item.title}><div className="newsMeta"><span>{item.date}</span><strong>{item.tag}</strong></div><div className="newsBody"><span className="newsNo">{String(i+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.text}</p>{item.href !== "#" ? <Link href={item.href}>Weiterlesen →</Link> : <span className="newsPending">Vollständige Einordnung folgt nach Abschluss der Prüfung.</span>}</div></article>)}</section>

      <section className="newsLabels"><div className="stateHeader"><p className="sectionLabel">Kennzeichnung</p><h2>Vier Begriffe für schnelle Orientierung.</h2></div><div className="labelGrid">{labels.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="newsBridge"><div><p className="sectionLabel">Vom Wissen zum Handeln</p><h2>Aktuelle Entwicklungen können Kampagnen verändern.</h2></div><div><p>Ein neues Urteil oder Gesetz ist für uns besonders dann relevant, wenn daraus Konsequenzen für Zieltexte, institutionelle Gestaltung oder politische Strategie entstehen.</p><div className="heroActions"><Link className="buttonPrimary" href="/weltweit">Internationale Fälle</Link><Link className="textLink" href="/mitmachen">Kampagne mit aufbauen →</Link></div></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Aktuelles</small></div></div><p>Aktuelle Entwicklungen für eine glaubwürdige Kampagne einordnen.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
