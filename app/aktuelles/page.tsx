import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const items = [
  { date: "09.08.2026", tag: "In Prüfung", title: "Kolumbien: neuer Flussrechte-Entwurf", text: "Ein aktueller Hinweis auf einen neuen Gesetzentwurf wird derzeit anhand amtlicher Quellen geprüft. Solange Verfahrensstand, Inhalt und institutionelle Architektur nicht belastbar geklärt sind, bleibt der Beitrag ausdrücklich als Prüfung gekennzeichnet.", href: "#" },
  { date: "2026", tag: "Hintergrund", title: "Mar Menor: Was die Anerkennung praktisch verlangt", text: "Die spanische Lagune zeigt besonders deutlich, warum Anerkennung, Vertretung, institutionelle Zuständigkeit und tatsächliche Wirkung getrennt betrachtet werden müssen.", href: "/weltweit" },
  { date: "2026", tag: "Kampagne", title: "16 Länder – unterschiedliche Wege", text: "Die neue Deutschlandseite bildet die Grundlage dafür, neue Landesinitiativen nicht einfach zu kopieren, sondern rechtlich sauber und politisch tragfähig aufzubauen.", href: "/deutschland" },
];

const labels = [
  ["Bestätigt", "Aussage und Verfahrensstand sind belastbar geprüft und können als aktueller Sachstand veröffentlicht werden."],
  ["In Prüfung", "Es gibt einen relevanten Hinweis, aber noch keine ausreichende Primärquellenbasis. Wir kennzeichnen das offen."],
  ["Hintergrund", "Kein News-Ereignis, sondern eine Einordnung, die hilft, aktuelle Entwicklungen zu verstehen."],
  ["Kampagne", "Aktuelle Entwicklung innerhalb unserer eigenen Volksbegehrens- und Plattformarbeit."],
];

export default function Aktuelles() {
  return (
    <main className="newsPage">
      <SiteHeader section="Aktuelles" />
      <section className="heritageStrip"><span>Was sich bewegt.</span><span className="heritageColors"><i/><i/><i/><i/></span><span>Geprüft – und trotzdem Kampagne.</span></section>

      <section className="newsHero"><p className="eyebrow">Aktuelles</p><h1>Was neu ist – und was daraus für die Kampagne folgt.</h1><p className="lead">Neue Urteile, Gesetze und Initiativen können unsere Arbeit verändern. Wir wollen schnell reagieren, aber nicht ungeprüft weitererzählen. Deshalb zeigen wir neben dem Inhalt auch, wie belastbar der jeweilige Stand ist.</p></section>

      <section className="newsRule"><div><p className="sectionLabel">Redaktioneller Grundsatz</p><h2>Hinweis ist nicht Beleg.</h2></div><div><p>Wir unterscheiden zwischen bestätigten Entwicklungen, laufender Prüfung, Hintergrund und eigener Kampagnenarbeit.</p><p>Das bremst die Kampagne nicht. Es schützt ihre Glaubwürdigkeit.</p></div></section>

      <section className="newsItems" id="beitraege">{items.map((item,i)=><article className="newsItem" key={item.title}><div className="newsMeta"><span>{item.date}</span><strong>{item.tag}</strong></div><div className="newsBody"><span className="newsNo">{String(i+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.text}</p>{item.href !== "#" ? <Link href={item.href}>Weiterlesen →</Link> : <span className="newsPending">Vollständige Einordnung folgt nach Abschluss der Prüfung.</span>}</div></article>)}</section>

      <section className="newsLabels"><div className="stateHeader"><p className="sectionLabel">Kennzeichnung</p><h2>Vier Begriffe, damit klar ist, was du gerade liest.</h2></div><div className="labelGrid">{labels.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="newsBridge"><div><p className="sectionLabel">Vom Wissen zum Handeln</p><h2>Aktuelle Entwicklungen können Kampagnen verändern.</h2></div><div><p>Ein neues Urteil oder Gesetz ist für uns besonders dann relevant, wenn daraus Konsequenzen für Zieltexte, institutionelle Gestaltung oder politische Strategie entstehen.</p><div className="heroActions"><Link className="buttonPrimary" href="/weltweit">Internationale Fälle</Link><Link className="textLink" href="/mitmachen">Kampagne mit aufbauen →</Link></div></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Aktuelles</small></div></div><p>Aktuelle Entwicklungen für eine glaubwürdige Kampagne einordnen.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
