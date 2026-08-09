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
  ["Laufende Sammelphase", "Die Kampagne läuft und sammelt Unterstützungsunterschriften für den Zulassungsantrag. Bayern befindet sich derzeit in dieser Phase."],
  ["Aktive Kampagne", "Eine konkrete Initiative läuft – mit realer Organisation, Mobilisierung und, wo das Verfahren es verlangt, Unterschriftensammlung."],
];

export default function Deutschland() {
  return (
    <main className="countryPage">
      <SiteHeader section="Deutschland" claimLead="Gib der Natur Recht." claimTrail="Deutschland neu denken." />

      <section className="deHero">
        <div>
          <p className="eyebrow">Deutschland</p>
          <h1>Ein Land. 16 Länder. Viele mögliche Wege.</h1>
          <p className="lead">Rechte der Natur lassen sich in Deutschland nicht mit einem einzigen Kampagnenrezept verwirklichen. Verfassungen, Verfahren direkter Demokratie, politische Konstellationen und Landschaften unterscheiden sich. Bayern zeigt dabei: Eine Kampagne kann über Jahre laufen, solange der nächste formale Verfahrensschritt noch nicht ausgelöst ist.</p>
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
        <div className="stateHeader"><p className="sectionLabel">Arbeitslandkarte</p><h2>16 Bundesländer. Der Stand darf unterschiedlich sein.</h2><p>„Historische Spur“ bezeichnet frühere Kampagnenansätze. Bayern ist ausdrücklich keine historische Spur: Dort läuft die Kampagne weiter und befindet sich in der Sammlung von Unterstützungsunterschriften für den Zulassungsantrag.</p></div>
        <div className="stateGrid">
          {federalStates.map(({name,status},i)=><article className={`stateCard ${name === "Bayern" ? "stateActive" : ""}`} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>{name === "Bayern" ? <Link href="/volksbegehren/bayern"><strong>Zur laufenden Kampagne →</strong></Link> : <strong>{status}</strong>}</article>)}
        </div>
      </section>

      <section className="statusSection">
        <div className="statusIntro"><p className="sectionLabel">Statuslogik</p><h2>Wir zeigen nur, was wirklich da ist.</h2><p>Damit aus einer ambitionierten Kampagne keine Selbsttäuschung wird, bekommt jedes Land einen nachvollziehbaren Arbeitsstatus.</p></div>
        <div className="statusList">{status.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="deBayern"><div><p className="sectionLabel">Bayern · laufende Kampagne</p><h2>Hier wird weiter gesammelt.</h2></div><div><p>Für den Zulassungsantrag werden weiterhin Unterstützungsunterschriften gesammelt. Die gemeindlichen Bestätigungen des Stimmrechts und die Einreichung des vollständigen Zulassungsantrags stehen noch aus. Erst danach folgen die weiteren gesetzlichen Verfahrensschritte.</p><Link className="buttonPrimary" href="/volksbegehren/bayern">Bayern ansehen →</Link></div></section>

      <section className="campaignCall"><span className="tiny">Der Horizont</span><h2>16 Länder sind kein Versprechen. Aber sie dürfen ein Ziel sein.</h2><p>Wo ein tragfähiger Weg entsteht, soll aus der Landkarte eine reale Initiative werden. Bayern zeigt zugleich, dass Kampagnenarbeit Ausdauer braucht: sammeln, vernetzen, erklären und den formalen Weg sauber vorbereiten.</p></section>

      <section className="join"><p className="sectionLabel">Ein Land in Bewegung bringen</p><h2>Du willst in deinem Bundesland mit anfangen?</h2><div className="joinLinks"><Link href="/mitmachen">Mitstreiten und mitaufbauen <span>→</span></Link><Link href="/volksbegehren">Wie die gemeinsame Kampagnenarchitektur funktioniert <span>→</span></Link><Link href="/volksbegehren/bayern">Bayern: laufende Sammelphase <span>→</span></Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Deutschland</small></div></div><p>Eine Kampagnenplattform für unterschiedliche rechtliche und politische Wege.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
