import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";
import { federalStates } from "../lib/states";

const status = [
  ["Startpunkt", "Die aktuelle Länderprüfung beginnt hier."],
  ["Frühere Initiative", "Das Land war bereits Teil der früheren Volksbegehrens-Idee. Der heutige Stand wird neu eingeordnet."],
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
          <h1>Ein Land. 16 Bundesländer. Viele mögliche Wege.</h1>
          <p className="lead">Jedes Bundesland hat eigene Regeln für direkte Demokratie. Verfassungen, Verfahren und Fristen unterscheiden sich – und damit auch der Weg zu einem Volksbegehren für die Rechte der Natur. Bayern ist dabei ein besonderer Fall: Hier kann die Sammlung der Unterstützungsunterschriften über einen längeren Zeitraum laufen, bevor der Zulassungsantrag eingereicht wird. In den anderen Bundesländern gelten jeweils eigene Verfahren und Fristen.</p>
          <div className="heroActions"><a className="buttonPrimary" href="#laender">Die Länder ansehen</a><Link className="textLink" href="/volksbegehren">Zur Kampagnenidee →</Link></div>
        </div>
        <div className="deBig16">16</div>
      </section>

      <section className="dePrinciple">
        <p className="sectionLabel">Unser Grundsatz</p>
        <h2>Überall dieselbe Frage. In jedem Land der passende Weg.</h2>
        <p>Welche rechtliche Form stärkt die Eigenbelange der Mitwelt in diesem Land tatsächlich? Aus einer tragfähigen Antwort kann eine Kampagne mit Mitstreitenden, Öffentlichkeit und einem konkreten Verfahren wachsen.</p>
      </section>

      <section className="deThree">
        <article><span>01</span><h3>Recht prüfen</h3><p>Was erlaubt die jeweilige Landesverfassung? Welche Form direkter Demokratie gibt es? Wo liegen Grenzen und echte Gestaltungsspielräume?</p></article>
        <article><span>02</span><h3>Menschen gewinnen</h3><p>Welche Initiativen, Verbände, Fachleute und engagierten Menschen können vor Ort Verantwortung übernehmen? Genau daraus wächst eine Kampagne.</p></article>
        <article><span>03</span><h3>Kampagne starten</h3><p>Wenn Ziel, Verfahren und Netzwerk tragen, wird es konkret: Öffentlichkeit herstellen, Unterstützer gewinnen und – wo vorgesehen – die nötigen Unterschriften sammeln.</p></article>
      </section>

      <section className="deMap" id="laender">
        <div className="stateHeader"><p className="sectionLabel">Landkarte</p><h2>16 Bundesländer. 16 unterschiedliche Ausgangspunkte.</h2><p>Frühere Initiativen markieren vorhandene Erfahrungen. Bayern befindet sich bereits in der aktiven Sammlung von Unterstützungsunterschriften für den Zulassungsantrag.</p></div>
        <div className="stateGrid">
          {federalStates.map(({name,status},i)=><article className={`stateCard ${name === "Bayern" ? "stateActive" : ""}`} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><p>{status}</p>{name === "Bayern" ? <Link href="/volksbegehren/bayern"><strong>Zur laufenden Kampagne →</strong></Link> : <strong>{status}</strong>}</article>)}
        </div>
      </section>

      <section className="statusSection">
        <div className="statusIntro"><p className="sectionLabel">Vom Startpunkt zur Kampagne</p><h2>Jedes Land hat seinen nächsten Schritt.</h2><p>Die Landkarte macht sichtbar, wo bereits Erfahrungen, rechtliche Prüfungen, Netzwerke oder konkrete Kampagnen bestehen.</p></div>
        <div className="statusList">{status.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="deBayern"><div><p className="sectionLabel">Bayern · laufende Kampagne</p><h2>Hier wird weiter gesammelt.</h2></div><div><p>Für den Zulassungsantrag werden weiterhin Unterstützungsunterschriften gesammelt. Im nächsten Schritt werden die Stimmrechte gemeindlich bestätigt und der vollständige Zulassungsantrag eingereicht. Daran schließen sich die weiteren gesetzlichen Verfahrensschritte an.</p><Link className="buttonPrimary" href="/volksbegehren/bayern">Bayern ansehen →</Link></div></section>

      <section className="campaignCall"><span className="tiny">Der Horizont</span><h2>16 Länder sind unser Horizont.</h2><p>Wo ein tragfähiger Weg entsteht, kann aus der Landkarte eine reale Initiative werden. Bayern zeigt, was Kampagnenarbeit braucht: sammeln, vernetzen, erklären und den formalen Weg sauber vorbereiten.</p></section>

      <section className="join"><p className="sectionLabel">Ein Land in Bewegung bringen</p><h2>Du willst in deinem Bundesland mit anfangen?</h2><div className="joinLinks"><Link href="/mitmachen">Mitstreiten und mitaufbauen <span>→</span></Link><Link href="/volksbegehren">Von der Idee zur Landesinitiative <span>→</span></Link><Link href="/volksbegehren/bayern">Bayern: laufende Sammelphase <span>→</span></Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Deutschland</small></div></div><p>Eine Kampagnenplattform für unterschiedliche rechtliche und politische Wege.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
