import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const items = [
  { date: "21.09.2026", tag: "Hintergrund", title: "Braucht die Spree eigene Rechte – obwohl es schon so viele Schutzinstrumente gibt?", text: "Die Spree zeigt, warum bestehender Gewässerschutz und eigene Rechte keine einfache Entweder-oder-Frage sind. Die Prüfung schärft den möglichen zusätzlichen Wert von Rechtssubjektivität.", href: "/aktuelles/spree-eigene-rechte" },
  { date: "19.09.2026", tag: "Hintergrund", title: "Woher wissen wir, welche Arten wir nicht brauchen?", text: "Artenvielfalt als biologischer Möglichkeitsraum: Was Einheitsnutzflächen sichtbar machen – und welche Fähigkeiten und Beziehungen wir verlieren könnten, bevor wir sie kennen.", href: "/aktuelles/artenvielfalt-moeglichkeitsraum" },
  { date: "16.09.2026", tag: "Hintergrund", title: "B12: Was „überragendes öffentliches Interesse“ verändert – und was nicht", text: "Der Ausbau der B12 zeigt, warum gesetzliche Priorisierung, Umweltverbandsklage, Art. 20a GG und Rechte der Mitwelt unterschiedliche Rechtsfunktionen erfüllen.", href: "/aktuelles/b12-ueberragendes-oeffentliches-interesse" },
  { date: "14.09.2026", tag: "Hintergrund", title: "Braucht die Loisach eigene Rechte, wenn die Menschen miteinander reden?", text: "Ohlstadt, Mar Menor und Whanganui: drei unterschiedliche Erfahrungen führen zu einer praktischen Frage – wer spricht eigentlich für den Fluss?", href: "/aktuelles/ohlstadt-loisach-rechte-der-natur" },
  { date: "09.08.2026", tag: "In Prüfung", title: "Kolumbien: neuer Flussrechte-Entwurf", text: "Ein neuer Gesetzentwurf zu Flussrechten steht im Fokus. Geprüft werden Verfahrensstand, Inhalt und institutionelle Architektur.", href: "https://systemische-rechtsentwicklung.de/resonanzraum/von-einzelnen-fluessen-zum-system-kolumbien", external: true },
  { date: "2026", tag: "Hintergrund", title: "Mar Menor: Was die Anerkennung praktisch verlangt", text: "Die spanische Lagune zeigt besonders deutlich, wie Anerkennung, Vertretung, institutionelle Zuständigkeit und tatsächliche Wirkung zusammenwirken.", href: "/weltweit" },
  { date: "2026", tag: "Kampagne", title: "16 Länder – unterschiedliche Wege", text: "Die Deutschlandseite verbindet rechtliche Ausgangslagen und politische Möglichkeiten zu eigenständigen Landeswegen.", href: "/deutschland" },
];

const labels = [
  ["Bestätigt", "Belastbar geprüfter aktueller Sachstand."],
  ["In Prüfung", "Aktuelle Entwicklung mit laufender Quellenprüfung."],
  ["Hintergrund", "Einordnung in den größeren rechtlichen und politischen Zusammenhang."],
  ["Kampagne", "Aktuelle Entwicklung der Volksbegehren und der gemeinsamen Plattform."],
];

export default function Aktuelles() {
  return (
    <main className="newsPage">
      <SiteHeader section="Aktuelles" claimLead="Was sich bewegt." claimTrail="Geprüft. Eingeordnet. In Bewegung." />

      <section className="newsHero"><p className="eyebrow">Aktuelles</p><h1>Was neu ist – und was daraus<br/>für die Kampagne folgt.</h1><p className="lead">Neue Urteile, Gesetze und Initiativen prägen die Entwicklung der Rechte der Natur. Hier zeigen wir Entwicklungen mit besonderer Bedeutung für die Kampagne.</p></section>

      <section className="newsItems" id="beitraege">{items.map((item,i)=><article className="newsItem" key={item.title}><div className="newsMeta"><span>{item.date}</span><strong>{item.tag}</strong></div><div className="newsBody"><span className="newsNo">{String(i+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.text}</p>{item.external ? <a href={item.href} target="_blank" rel="noreferrer">Weiterlesen →</a> : <Link href={item.href}>Weiterlesen →</Link>}</div></article>)}</section>

      <section className="newsLabels"><div className="stateHeader"><p className="sectionLabel">Orientierung</p><h2>Vier Begriffe für schnelle Orientierung.</h2></div><div className="labelGrid">{labels.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="newsBridge"><div><p className="sectionLabel">Vom Wissen zum Handeln</p><h2>Aktuelle Entwicklungen können Kampagnen verändern.</h2></div><div><p>Neue Urteile und Gesetze können Zieltexte, institutionelle Gestaltung und politische Strategie unmittelbar weiterentwickeln.</p><div className="heroActions"><Link className="buttonPrimary" href="/weltweit">Internationale Fälle</Link><Link className="textLink" href="/mitmachen">Kampagne mit aufbauen →</Link></div></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Aktuelles</small></div></div><p>Aktuelle Entwicklungen für Rechte der Natur und die Volksbegehren.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
