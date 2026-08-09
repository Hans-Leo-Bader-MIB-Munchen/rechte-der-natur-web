import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";
import { federalStates } from "../lib/states";

const template = [
  ["01", "Ausgangslage", "Welche rechtliche und politische Situation besteht im Land?"],
  ["02", "Rechtlicher Weg", "Welche Form von Volksgesetzgebung ist möglich und welche Hürden gelten?"],
  ["03", "Zieltext", "Was soll konkret geändert werden – und warum genau so?"],
  ["04", "Mitstreiter", "Wer trägt die Initiative vor Ort gesellschaftlich, fachlich und organisatorisch?"],
  ["05", "Mobilisierung", "Wie erreichen wir Menschen, gewinnen Unterstützer und organisieren die nötigen Unterschriften?"],
  ["06", "Lernen", "Welche Erfahrungen aus Bayern und anderen Rechtsordnungen helfen – und welche lassen sich nicht übertragen?"],
];

export default function Volksbegehren() {
  return (
    <main className="hubPage">
      <SiteHeader section="Volksbegehren" claimLead="Gib der Natur Recht." claimTrail="Aus Prüfung wird Kampagne." />

      <section className="hubHero">
        <p className="hubEyebrow">16 Länder · 16 unterschiedliche Wege</p>
        <h1>Ein Volksbegehren lässt sich nicht kopieren.</h1>
        <p>Aber Wissen, Gestaltung, rechtliche Prüfung, Organisation und Kampagnenerfahrung lassen sich teilen. Bayern ist dabei kein abgeschlossener Fall: Dort läuft die Antragsphase mit aktiver Unterschriftensammlung weiter.</p>
        <div className="heroActions"><Link className="buttonPrimary" href="/mitmachen">Mitstreiter werden</Link><Link className="textLink" href="/deutschland">Stand der 16 Länder →</Link></div>
      </section>

      <section className="hubPrinciple">
        <div><span>Die gemeinsame Idee</span><h2>Rechte der Natur dort verankern, wo Menschen unmittelbar über Landesrecht mitentscheiden können.</h2></div>
        <div><p>Jedes Bundesland hat eigene verfassungsrechtliche Voraussetzungen, Verfahrensregeln und politische Bedingungen. Deshalb braucht jedes Land einen eigenen Weg.</p><p>Aber wenn ein Weg trägt, wird aus Analyse politische Praxis: Mitstreiter finden, Öffentlichkeit herstellen, Bündnisse aufbauen und die erforderlichen Unterschriften sammeln.</p></div>
      </section>

      <section className="hubMap">
        <div className="hubSectionHead"><p>Deutschland</p><h2>Wo stehen die Länder?</h2><span>Arbeitsdarstellung · Bayern befindet sich in der Antragsphase mit aktiver Sammlung.</span></div>
        <div className="hubStates">
          {federalStates.map(({name,status},i)=><article className={name === "Bayern" ? "hubState hubStateActive" : "hubState"} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><strong>{status}</strong>{name === "Bayern" ? <Link href="/volksbegehren/bayern">Zur laufenden Bayern-Kampagne →</Link> : <em>Prüfung und Aufbau folgen</em>}</article>)}
        </div>
      </section>

      <section className="hubTemplate">
        <div className="hubSectionHead"><p>Das Länder-Template</p><h2>Sechs Aufgaben auf dem Weg zur Kampagne.</h2></div>
        <div className="templateGrid">{template.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="hubBayern">
        <div className="hubBayernMark">BY</div>
        <div><p>Antragsphase · aktive Sammlung</p><h2>Bayern sammelt weiter – bewusst weit über das gesetzliche Minimum hinaus.</h2><p>Für den Zulassungsantrag reichen formal 25.000 gültige Unterstützungsunterschriften. Die Bayern-Kampagne hat sich aber von Beginn an ein politisches Sammelziel von mindestens 250.000 Unterschriften gesetzt, bevor der Antrag eingereicht werden soll. Der Grund: Öffentlichkeit schaffen, einen breiten Diskurs auslösen und früh die gesellschaftliche Basis für die späteren Verfahrensstufen aufbauen.</p><Link href="/volksbegehren/bayern">Bayern und die Sammelstrategie ansehen →</Link></div>
      </section>

      <section className="hubCall"><p>Ein Land starten?</p><h2>Prüfen. Vernetzen. Mobilisieren.</h2><span>Wenn du in deinem Bundesland mitarbeiten, ein Netzwerk aufbauen oder eine spätere Unterschriftensammlung vorbereiten willst, brauchen wir genau dich.</span><div className="heroActions"><Link className="buttonPrimary" href="/mitmachen">Jetzt mitmachen →</Link></div></section>

      <footer className="hubFooter"><Link href="/">Startseite</Link><Link href="/deutschland">Deutschland</Link><Link href="/mitmachen">Mitmachen</Link><span>Preview · noch keine Außenfreigabe</span></footer>
    </main>
  );
}
