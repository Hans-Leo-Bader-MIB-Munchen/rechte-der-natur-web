import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import BrandMark from "./components/BrandMark";

const stories = [
  { place: "Spanien", title: "Mar Menor", text: "Eine Lagune bekommt eigene Rechte. Der Fall zeigt, wie Rechtsträgerschaft, Vertretung und Institutionen zusammenspielen müssen.", mark: "Wasser" },
  { place: "Aotearoa / Neuseeland", title: "Whanganui", text: "Der Fluss besitzt Rechtspersönlichkeit innerhalb einer eigenen Vertretungsordnung – ein völlig anderer Weg als ein klassischer Naturschutzstatus.", mark: "Fluss" },
  { place: "Ecuador", title: "Natur in der Verfassung", text: "Seit 2008 erkennt die Verfassung Rechte der Natur an. Entscheidend bleibt, wie diese Rechte in konkreten Entscheidungen wirksam werden.", mark: "Land" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="heritageStrip"><span>Gib der Natur Recht.</span><span className="heritageColors"><i/><i/><i/><i/></span><span>Eine Kampagne für die Mitwelt.</span></section>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Rechte der Natur</p>
          <h1>Was wäre, wenn ein Fluss eigene Rechte hätte?</h1>
          <p className="lead">Wir schützen Natur – und behandeln sie im Recht trotzdem meist als Sache, Eigentum oder Ressource. Wir wollen das verändern: mit einer Kampagne für eigene Rechte der Natur und neue Volksbegehren in Deutschland.</p>
          <div className="heroActions"><Link className="buttonPrimary" href="/mitmachen">Mitmachen</Link><a className="textLink" href="#idee">Erst einmal verstehen ↓</a></div>
        </div>
        <div className="heroNature" aria-hidden="true"><div className="sun"/><div className="river riverOne"/><div className="river riverTwo"/><div className="land landOne"/><div className="land landTwo"/><span>Isar</span><span>Loisach</span><span>Lech</span><div className="heroSeal"><BrandMark/><em>Gib der Natur<br/>Recht.</em></div></div>
      </section>

      <section className="plainIdea" id="idee">
        <p className="sectionLabel">Die Idee</p>
        <h2>Natur soll nicht nur geschützt werden, weil sie uns nützt.</h2>
        <p className="bigText">Ein Wald, ein Fluss oder ein Ökosystem kann einen eigenen Wert haben – und dieser Wert kann im Recht eine eigene Stimme bekommen. Wir sprechen deshalb von <strong>Mitwelt</strong>: Natur ist nicht bloß die „Umwelt“ des Menschen.</p>
      </section>

      <section className="explainGrid">
        <article><span className="symbol">01</span><h3>Eigene Rechte</h3><p>Natur wird nicht nur zum Objekt menschlicher Interessen. Ihre Existenz, Regeneration und ökologischen Funktionen können selbst rechtlich zählen.</p></article>
        <article><span className="symbol">02</span><h3>Eine Stimme im Recht</h3><p>Menschen oder Institutionen können die Rechte eines Flusses, Waldes oder Ökosystems vertreten und in Entscheidungen einbringen.</p></article>
        <article><span className="symbol">03</span><h3>Dann wird es praktisch</h3><p>Rechte müssen politisch erstritten, institutionell verankert und tatsächlich genutzt werden. Genau dafür braucht es Kampagnen, Bündnisse und Mitstreiter.</p></article>
      </section>

      <section className="questionBand"><p>Der Perspektivwechsel</p><h2>Nicht nur: „Was dürfen wir mit der Natur tun?“</h2><strong>Sondern: „Was braucht sie, um zu leben?“</strong></section>

      <section className="world" id="weltweit">
        <div className="sectionIntro"><p className="sectionLabel">Weltweit</p><h2>Andere haben längst angefangen.</h2><p>Rechte der Natur existieren bereits in unterschiedlichen Rechtsordnungen. Wir schauen genau hin, was daraus für eine Kampagne in Deutschland gelernt werden kann.</p><div className="heroActions"><Link className="buttonPrimary" href="/weltweit">Zur weltweiten Falllandschaft</Link></div></div>
        <div className="storyGrid">{stories.map(s=><article className="story" key={s.title}><div className={`storyVisual visual${s.mark}`}><span>{s.mark}</span></div><div className="storyCopy"><span className="place">{s.place}</span><h3>{s.title}</h3><p>{s.text}</p></div></article>)}</div>
      </section>

      <section className="germanyLead" id="deutschland">
        <div className="germanyLeadCopy"><p className="sectionLabel">Deutschland</p><h2>16 Länder. Viele Wege. Eine Kampagne, die wachsen kann.</h2><p>Bayern war der Anfang. Jetzt bauen wir eine gemeinsame Plattform, auf der für jedes Bundesland geprüft werden kann, welcher Weg trägt – und wo daraus eine reale Initiative mit Mitstreitern und Unterschriftensammlung entstehen kann.</p><div className="heroActions"><Link className="buttonPrimary" href="/deutschland">Die 16 Länder ansehen</Link><Link className="textLink" href="/volksbegehren">Wie Volksbegehren entstehen →</Link></div></div>
        <div className="sixteen">16</div>
      </section>

      <section className="bavariaFeature">
        <div className="bavariaNumber"><BrandMark/></div>
        <div className="bavariaCopy"><p className="sectionLabel">Woher wir kommen</p><h2>Bayern: Eine Stimme für Isar, Lech und Loisach.</h2><p>Das Volksbegehren „Rechte der Natur“ war unser Ausgangspunkt. Dort begann auch ganz praktisch, was Kampagne bedeutet: Menschen überzeugen, Unterstützer gewinnen und Unterschriften sammeln.</p><div className="bavariaLinks"><Link href="/volksbegehren/bayern">Bayern ansehen →</Link><a href="https://gibdernaturrecht.muc-mib.de/vb_bayern" target="_blank" rel="noreferrer">Historische Originalseite →</a></div></div>
      </section>

      <section className="campaignCall"><span className="tiny">Der nächste Schritt</span><h2>Rechte der Natur brauchen Mitstreiter.</h2><p>Ob juristische Prüfung, Landesnetzwerk, Veranstaltungen, Kommunikation oder später die Unterschriftensammlung: Eine Kampagne lebt davon, dass Menschen Verantwortung übernehmen.</p><div className="heroActions"><Link className="buttonPrimary" href="/mitmachen">Ich will mitmachen →</Link></div></section>

      <section className="join"><p className="sectionLabel">Weiterlesen</p><h2>Die Kampagne hat mehrere Ebenen.</h2><div className="joinLinks"><Link href="/aktuelles">Was sich gerade bewegt <span>→</span></Link><Link href="/weltweit">Internationale Erfahrungen <span>→</span></Link><Link href="/deutschland">Die 16 Bundesländer <span>→</span></Link><Link href="/ueber-uns">Wer wir sind und wie wir arbeiten <span>→</span></Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Kampagne</small></div></div><p>Eine Kampagne für eigene Rechte der Natur und eine andere Beziehung zur Mitwelt.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
