import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";
import { federalStates } from "../lib/states";

const status = [
  ["Noch offen", "Noch keine aktuelle Länderprüfung auf dieser Plattform."],
  ["Historische Spur", "Das Land war bereits Teil der früheren Volksbegehrens-Idee. Das sagt noch nichts über den heutigen Stand."],
  ["Rechtliche Prüfung", "Verfassung, direkte Demokratie und mögliche Regelungswege werden konkret geprüft."],
  ["Netzwerkaufbau", "Menschen und Organisationen im Land beginnen, einen tragfähigen Weg zu entwickeln."],
  ["Vorbereitung", "Ziel, Text, Verfahren und Kampagnenstruktur sind so weit geklärt, dass eine Initiative vorbereitet werden kann."],
  ["Aktive Kampagne", "Eine konkrete Initiative läuft – mit realer Organisation, Mobilisierung und, wo das Verfahren es verlangt, Unterschriftensammlung."],
];

export default function Deutschland() {
  return (
    <main className="countryPage">
      <SiteHeader section="Deutschland" />
      <section className="heritageStrip">
        <span>Gib der Natur Recht.</span><span className="heritageColors"><i/><i/><i/><i/></span><span>Deutschland neu denken.</span>
      </section>

      <section className="deHero">
        <div>
          <p className="eyebrow">Deutschland</p>
          <h1>Ein Land. 16 Länder. Viele mögliche Wege.</h1>
          <p className="lead">Rechte der Natur lassen sich in Deutschland nicht mit einem einzigen Kampagnenrezept verwirklichen. Verfassungen, Verfahren direkter Demokratie, politische Konstellationen und Landschaften unterscheiden sich. Genau deshalb beginnen wir mit einer Landkarte – damit dort, wo die Voraussetzungen tragen, aus Prüfung eine echte Kampagne werden kann.</p>
          <div className="heroActions"><a className="buttonPrimary" href="#laender">Die Länder ansehen</a><Link className="textLink" href="/volksbegehren">Zur Kampagnenidee →</Link></div>
        </div>
        <div className="deBig16">16</div>
      </section>

      <section className="dePrinciple">
        <p className="sectionLabel">Unser Grundsatz</p>
        <h2>Nicht überall dasselbe fordern. Überall dieselbe Frage ernst nehmen.</h2>
        <p>Welche rechtliche Form stärkt die Eigenbelange der Mitwelt – also der Natur, die nicht bloß „Umwelt“ des Menschen ist – in diesem Land tatsächlich? Wenn diese Frage belastbar beantwortet ist, kann daraus eine Kampagne mit Mitstreitenden, Öffentlichkeit und konkretem Verfahren werden.</p>
      </section>

      <section className="deThree">
        <article><span>01</span><h3>Recht prüfen</h3><p>Was erlaubt die jeweilige Landesverfassung? Welche Form direkter Demokratie gibt es? Wo liegen Grenzen und echte Gestaltungsspielräume?</p></article>
        <article><span>02</span><h3>Menschen gewinnen</h3><p>Welche Initiativen, Verbände, Fachleute und engagierten Menschen können vor Ort Verantwortung übernehmen? Eine Kampagne braucht Träger, nicht nur Zustimmung.</p></article>
        <article><span>03</span><h3>Kampagne starten</h3><p>Wenn Ziel, Verfahren und Netzwerk tragen, wird es konkret: Öffentlichkeit herstellen, Unterstützer gewinnen und – wo vorgesehen – die nötigen Unterschriften sammeln.</p></article>
      </section>

      <section className="deMap" id="laender">
        <div className="stateHeader"><p className="sectionLabel">Arbeitslandkarte</p><h2>16 Bundesländer. Der Stand darf unterschiedlich sein.</h2><p>„Historische Spur“ bezeichnet die frühere Kampagnenarchitektur; Bayern ist derzeit der ausgearbeitete Referenzfall dieser neuen Plattform.</p></div>
        <div className="stateGrid">
          {federalStates.map(({name,status},i)=><article className={`stateCard ${name === "Bayern" ? "stateActive" : ""}`} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>{name === "Bayern" ? <Link href="/volksbegehren/bayern"><strong>Referenzfall ansehen →</strong></Link> : <strong>{status}</strong>}</article>)}
        </div>
      </section>

      <section className="statusSection">
        <div className="statusIntro"><p className="sectionLabel">Statuslogik</p><h2>Wir zeigen nur, was wirklich da ist.</h2><p>Damit aus einer ambitionierten Kampagne keine Selbsttäuschung wird, bekommt jedes Land einen nachvollziehbaren Arbeitsstatus.</p></div>
        <div className="statusList">{status.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="deBayern"><div><p className="sectionLabel">Referenzfall Bayern</p><h2>Wir fangen nicht bei null an.</h2></div><div><p>Das bayerische Volksbegehren ist Herkunft, Erfahrung und Lernmaterial. Es zeigt zugleich, dass eine Kampagne irgendwann sehr praktisch wird: Menschen überzeugen, Strukturen aufbauen und die formalen Hürden eines Volksbegehrens tatsächlich nehmen.</p><Link className="buttonPrimary" href="/volksbegehren/bayern">Bayern ansehen →</Link></div></section>

      <section className="campaignCall"><span className="tiny">Der Horizont</span><h2>16 Länder sind kein Versprechen. Aber sie dürfen ein Ziel sein.</h2><p>Wo ein tragfähiger Weg entsteht, soll aus der Landkarte eine reale Initiative werden. Prüfung ist für uns kein Ersatz für Kampagne – sie soll dafür sorgen, dass die Kampagne trägt.</p></section>

      <section className="join"><p className="sectionLabel">Ein Land in Bewegung bringen</p><h2>Du willst in deinem Bundesland mit anfangen?</h2><div className="joinLinks"><Link href="/mitmachen">Mitstreiten und mitaufbauen <span>→</span></Link><Link href="/volksbegehren">Wie die gemeinsame Kampagnenarchitektur funktioniert <span>→</span></Link><Link href="/volksbegehren/bayern">Was wir aus Bayern lernen <span>→</span></Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Deutschland</small></div></div><p>Eine Kampagnenplattform für unterschiedliche rechtliche und politische Wege.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
