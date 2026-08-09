import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import BrandMark from "./components/BrandMark";
import styles from "./page.module.css";

const stories = [
  { place: "Spanien", title: "Mar Menor", text: "Eine Lagune mit eigenen Rechten. Der Fall zeigt, wie Rechtsträgerschaft, Vertretung und Institutionen zusammenwirken.", mark: "Wasser", href: "/weltweit#mar-menor" },
  { place: "Aotearoa / Neuseeland", title: "Whanganui", text: "Der Fluss besitzt Rechtspersönlichkeit und eine eigene Vertretungsordnung. So bekommt er eine konkrete Stimme im Recht.", mark: "Fluss", href: "/weltweit#whanganui" },
  { place: "Ecuador", title: "Natur in der Verfassung", text: "Seit 2008 erkennt die Verfassung Rechte der Natur an. Gerichtliche Entscheidungen konkretisieren ihre Wirkung.", mark: "Land", href: "/weltweit#ecuador" },
];

const steps = [
  ["01", "Unterstützen", "In Bayern werden weiter Unterstützungsunterschriften für den Zulassungsantrag gesammelt."],
  ["02", "Zulassungsantrag", "Nach der Sammelphase werden die Stimmrechte bestätigt und der Antrag vollständig eingereicht."],
  ["03", "Prüfung und Zulassung", "Anschließend folgen die gesetzlich vorgesehenen Prüfungs- und Zulassungsschritte."],
  ["04", "Volksbegehren", "Mit der Zulassung beginnt die nächste Stufe des direktdemokratischen Verfahrens."],
  ["05", "Volksentscheid", "Am Ende entscheidet die Bevölkerung über die Verfassungsänderung."],
];

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <SiteHeader claimLead="Gib der Natur Recht." claimTrail="Eine Kampagne für die Mitwelt." />

      <section className={styles.perspective}>
        <div className={styles.perspectiveInner}>
          <p className={styles.eyebrow}>Der Perspektivwechsel</p>
          <p className={styles.question}>„Was braucht Natur, um zu leben?“</p>
          <p className={styles.perspectiveText}>Wenn diese Frage im Recht Gewicht bekommt, verändert sich unser Blick auf Flüsse, Wälder und Ökosysteme – und auf die Verantwortung, die wir für unsere gemeinsame Mitwelt tragen.</p>
        </div>
      </section>

      <section className={styles.idea} id="idee">
        <div>
          <p className={styles.label}>Die Idee</p>
          <h2>Natur hat einen eigenen Wert – und verdient eine eigene Stimme im Recht.</h2>
          <p className={styles.ideaText}>Ein Wald, ein Fluss oder ein Ökosystem hat einen eigenen Wert. Dieser Wert kann im Recht eine eigene Stimme bekommen. <strong>Mitwelt</strong> beschreibt diese gemeinsame Welt, in der Natur um ihrer selbst willen zählt.</p>
          <div className={styles.ideaActions}><Link className={styles.button} href="/ueber-uns">Mehr zur Idee</Link></div>
        </div>
        <figure className={styles.ideaFigure}>
          <div className={styles.natureFrame}>
            <img src="/brand/IMG_6256_16zu9.jpg" alt="Hans Leo Bader mit der Frage ‚Was bedeutet Natur für mich?‘ bei einer Kampagnenaktion zu den Rechten der Natur" />
          </div>
          <figcaption>Hans Leo Bader, Initiator der Volksbegehren, bei einer Sammelaktion für die Rechte der Natur.</figcaption>
        </figure>
      </section>

      <section className={styles.principles}>
        <article><span>01</span><h3>Eigene Rechte</h3><p>Natur kann Trägerin eigener Rechte sein. Ihre Existenz, Regeneration und ökologischen Funktionen bekommen damit eigenständiges rechtliches Gewicht.</p></article>
        <article><span>02</span><h3>Eine Stimme im Recht</h3><p>Menschen oder Institutionen können die Rechte eines Flusses, Waldes oder Ökosystems vertreten und in Entscheidungen einbringen.</p></article>
        <article><span>03</span><h3>Rechte werden praktisch</h3><p>Rechte entfalten Wirkung durch Vertretung, Verfahren, Institutionen und Menschen, die sie politisch und praktisch tragen.</p></article>
      </section>

      <section className={styles.stories} id="weltweit">
        <div className={styles.storiesInner}>
          <div className={styles.sectionHead}><p className={styles.label}>Weltweit</p><h2>Viele Rechtswege. Viele Erfahrungen.</h2><p>Rechte der Natur existieren bereits in unterschiedlichen Rechtsordnungen. Diese Erfahrungen helfen, tragfähige Wege für Deutschland zu entwickeln.</p></div>
          <div className={styles.storyGrid}>{stories.map(s=><article className={styles.story} key={s.title}><div className={styles.storyVisual}><span>{s.mark}</span></div><div className={styles.storyCopy}><span className={styles.place}>{s.place}</span><h3>{s.title}</h3><p>{s.text}</p><Link className={styles.storyLink} href={s.href}>Mehr erfahren →</Link></div></article>)}</div>
        </div>
      </section>

      <section className={styles.germany} id="deutschland">
        <div><p className={styles.label}>Deutschland</p><h2>Ein Land. 16 Bundesländer. Viele mögliche Wege.</h2><p>Jedes Bundesland hat eigene Regeln für direkte Demokratie. Verfassungen, Verfahren und Fristen prägen den jeweiligen Weg zu einem Volksbegehren für die Rechte der Natur.</p><div className={styles.bayernLinks}><Link className={styles.button} href="/deutschland">Die 16 Bundesländer ansehen</Link><Link className={styles.textLink} href="/volksbegehren">Zur Kampagnenidee →</Link></div></div>
        <div className={styles.sixteen}>16</div>
      </section>

      <section className={styles.bayern}>
        <div className={styles.bayernInner}>
          <div className={styles.bayernTop}><div><p className={styles.label}>Bayern · laufende Sammelphase</p><h2>Bayern sammelt weiter.</h2></div><p>Für den Zulassungsantrag werden weiter Unterstützungsunterschriften gesammelt. Ziel sind mindestens 250.000 Unterschriften – für Öffentlichkeit, gesellschaftlichen Rückhalt und eine starke Basis für die nächsten Verfahrensstufen.</p></div>
          <div className={styles.steps}>{steps.map(([num,title,text])=><article className={styles.step} key={num}><span className={styles.stepNum}>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className={styles.bayernLinks}><Link className={styles.button} href="/volksbegehren/bayern">Zur Bayern-Kampagne</Link><a className={styles.textLink} href="https://gibdernaturrecht.muc-mib.de/unterschriften-sammeln" target="_blank" rel="noreferrer">Unterschriften sammeln →</a></div>
        </div>
      </section>

      <section className={styles.partners}>
        <div>
          <p className={styles.label}>Bündnispartner & Unterstützer</p>
          <h2>Viele tragen die Volksbegehren mit.</h2>
          <p>Menschen, Organisationen und Initiativen unterstützen die Ziele der Kampagne und machen die Rechte der Natur gemeinsam sichtbar.</p>
        </div>
        <Link className={styles.button} href="/buendnispartner">Galerie ansehen →</Link>
      </section>

      <section className={styles.join}><p className={styles.label}>Mitmachen</p><h2>Rechte der Natur brauchen Menschen.</h2><p>Unterschriften sammeln, juristisch mitprüfen, Kontakte aufbauen, Veranstaltungen organisieren oder die Kampagne sichtbar machen: Aus einer Idee wird Bewegung, wenn Menschen Verantwortung übernehmen.</p><Link className={styles.button} href="/mitmachen">Ich will mitmachen →</Link></section>

      <footer className={styles.footer}><div className={styles.footerIdentity}><BrandMark/><div><strong>Rechte der Natur</strong><small>Kampagne</small></div></div><p>Eine Kampagne für eigene Rechte der Natur und eine andere Beziehung zur Mitwelt.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
