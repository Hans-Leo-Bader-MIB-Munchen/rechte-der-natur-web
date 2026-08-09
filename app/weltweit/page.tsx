import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

const cases = [
  { region: "Ecuador", title: "Natur in der Verfassung", type: "Verfassung", year: "2008", text: "Ecuador verankerte Rechte der Natur auf Verfassungsebene. Damit wurde aus einer politischen Idee ein verfassungsrechtlicher Bezugspunkt – aber noch keine Garantie für eine einheitliche Praxis." },
  { region: "Ecuador", title: "Los Cedros", type: "Gericht", year: "2021", text: "Im Fall des Schutzwalds Los Cedros wurde sichtbar, wie Rechte der Natur in einer konkreten gerichtlichen Entscheidung Bedeutung entfalten können." },
  { region: "Kolumbien", title: "Río Atrato", type: "Gericht + Vertretung", year: "2016", text: "Der Atrato wurde als Rechtssubjekt anerkannt. Entscheidend war dabei nicht nur die Anerkennung selbst, sondern auch die Frage, wer den Fluss künftig vertreten und seine Belange in Verfahren einbringen soll." },
  { region: "Aotearoa / Neuseeland", title: "Whanganui", type: "Gesetz + Vertretung", year: "2017", text: "Der Whanganui erhielt eine eigene Rechtspersönlichkeit innerhalb einer gesetzlich geregelten Vertretungsordnung. Das Modell verbindet staatliches Recht mit einer anderen Beziehung zwischen Menschen und Fluss." },
  { region: "Aotearoa / Neuseeland", title: "Te Urewera", type: "Gesetz + Governance", year: "2014", text: "Te Urewera ist nicht mehr bloß staatliches Eigentum. Die rechtliche Konstruktion ordnet Verantwortung und Governance neu und zeigt, dass Rechte der Natur nicht auf Flüsse begrenzt sind." },
  { region: "Spanien", title: "Mar Menor", type: "Gesetz + Institutionen", year: "2022", text: "Die Lagune Mar Menor erhielt eigene Rechte. Der Fall zeigt besonders deutlich, dass Rechtsträgerschaft, Vertretung, Aufsicht und tatsächliche ökologische Wirkung getrennt betrachtet werden müssen." },
];

const lenses = [
  ["Anerkennung", "Hat Natur eine eigene rechtliche Stellung – und auf welcher Ebene: Verfassung, Gesetz oder Gericht?"],
  ["Vertretung", "Wer darf oder muss für das betroffene Ökosystem handeln?"],
  ["Institutionen", "Welche Gremien, Verfahren und Zuständigkeiten sorgen dafür, dass die Rechte in Entscheidungen vorkommen?"],
  ["Wirkung", "Verändert sich eine konkrete Entscheidung, ein Vollzug oder der Zustand des Ökosystems tatsächlich?"],
];

export default function Weltweit() {
  return (
    <main className="worldPage">
      <SiteHeader section="Weltweit" claimLead="Rechte der Natur" claimTrail="Viele Rechtswege. Viele Erfahrungen." />

      <section className="worldHero"><div><p className="eyebrow">Weltweit</p><h1>Die Idee hat viele Formen angenommen.</h1><p className="lead">Verfassungen, Gesetze und Gerichte haben Natur in unterschiedlichen Rechtsordnungen eine eigenständige Stellung gegeben. Für eine Kampagne in Deutschland ist dabei besonders wichtig zu verstehen, was wirklich funktioniert – und was sich nicht einfach übertragen lässt.</p><div className="heroActions"><a className="buttonPrimary" href="#faelle">Fälle entdecken</a><Link className="textLink" href="/deutschland">Was lernen wir daraus für Deutschland? →</Link></div></div><div className="worldOrb" aria-hidden="true"><span>Wald</span><span>Fluss</span><span>Lagune</span><span>Land</span></div></section>

      <section className="worldRead" id="lesen"><div><p className="sectionLabel">Wie wir hinschauen</p><h2>Keine Sammlung von Erfolgsgeschichten.</h2></div><div><p>Rechte der Natur werden oft so erzählt, als sei die Anerkennung selbst schon der entscheidende Erfolg. Das greift zu kurz.</p><p>Wir lesen internationale Fälle deshalb entlang von vier Fragen. Genau diese Erfahrungen sollen helfen, Kampagnen in Deutschland klüger aufzubauen.</p></div></section>

      <section className="lensGrid">{lenses.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</section>

      <section className="worldCases" id="faelle"><div className="stateHeader"><p className="sectionLabel">Falllandschaft</p><h2>Sechs Fälle. Sechs unterschiedliche rechtliche Konstruktionen.</h2><p>Diese Auswahl ist kein Ranking. Sie zeigt, wie unterschiedlich Rechte der Natur ausgestaltet werden können.</p></div><div className="caseLandscape">{cases.map(c=><article key={c.title}><div className="caseMeta"><span>{c.region}</span><strong>{c.year}</strong></div><h3>{c.title}</h3><em>{c.type}</em><p>{c.text}</p><span className="caseMore">Vertiefung entsteht hier →</span></article>)}</div></section>

      <section className="worldBridge"><p className="sectionLabel">Was folgt daraus?</p><h2>Internationale Modelle sind Inspiration, keine Blaupause.</h2><p>Für eine deutsche Kampagne zählt, welche Elemente unter unseren rechtlichen und politischen Bedingungen tragfähig sind. Genau deshalb verbinden wir internationale Erfahrung mit Länderprüfung und konkreter Mobilisierung.</p><div className="heroActions"><Link className="buttonPrimary" href="/deutschland">Zur Deutschlandseite</Link><Link className="textLink" href="/volksbegehren">Zu den Volksbegehren →</Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Weltweit</small></div></div><p>Internationale Erfahrungen für konkrete Kampagnen nutzbar machen.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
