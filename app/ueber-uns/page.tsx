import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

export default function UeberUns() {
  return (
    <main className="aboutPage">
      <SiteHeader section="Über uns" claimLead="Gib der Natur Recht." claimTrail="Menschen, Erfahrung und Verantwortung." />

      <section className="aboutHero"><p className="eyebrow">Über uns</p><h1>Aus einer Idee wurde eine Kampagne für die Rechte der Natur.</h1><p className="lead">Die Initiative begann 2019. Heute verbindet „Rechte der Natur – Die Volksbegehren“ Kampagnenerfahrung, internationale Perspektiven und Menschen, die in den Bundesländern eigene Wege zu den Rechten der Natur entwickeln.</p></section>

      <section className="aboutOrigin"><div><p className="sectionLabel">Herkunft und Gegenwart</p><h2>2019 begann die Idee. Bayern wurde der erste konkrete Weg.</h2></div><div><p>Hans Leo Bader entwickelte 2019 den Ausgangspunkt für die bayerische Rechte-der-Natur-Initiative und initiierte daraus das Volksbegehren. Im weiteren Aufbau kamen Mitstreiter mit unterschiedlichen fachlichen und praktischen Hintergründen hinzu.</p><p>In Bayern werden weiterhin Unterstützungsunterschriften für den Zulassungsantrag gesammelt. Gleichzeitig ist daraus eine bundesweite Kampagnenplattform entstanden, die unterschiedliche Landeswege ermöglicht.</p><Link href="/volksbegehren/bayern">Zur laufenden Bayern-Kampagne →</Link></div></section>

      <section className="aboutPatrons" id="schirmherrschaft">
        <div className="aboutPatronHead"><p className="sectionLabel">Schirmherrschaft der Volksbegehren</p><h2>Zwei internationale Erfahrungen begleiten die gesamte Kampagne.</h2><p>Alberto Acosta und Teresa Vicente haben die Schirmherrschaft für „Rechte der Natur – Die Volksbegehren“ übernommen. Ihre Schirmherrschaft gilt der gesamten Kampagne und ihren möglichen Wegen in allen 16 Bundesländern.</p></div>
        <div className="aboutPatronGrid">
          <article className="aboutPatronCard">
            <div className="aboutPatronImage"><img src="https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/07/Acosta_Schirmherr.png" alt="Alberto Acosta, Schirmherr der Kampagne Rechte der Natur – Die Volksbegehren" /></div>
            <div><p className="aboutPatronRole">Schirmherr</p><h3>Alberto Acosta</h3><p>Alberto Acosta Espinosa war 2007/08 Präsident der Verfassungsgebenden Versammlung Ecuadors. In dieser Zeit wurde die neue ecuadorianische Verfassung erarbeitet, die Rechte der Natur verfassungsrechtlich verankerte.</p><Link href="/weltweit#ecuador">Ecuador →</Link></div>
          </article>
          <article className="aboutPatronCard">
            <div className="aboutPatronImage"><img src="https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/08/Teresa-Vicente.jpg" alt="Teresa Vicente, Schirmfrau der Kampagne Rechte der Natur – Die Volksbegehren" /></div>
            <div><p className="aboutPatronRole">Schirmfrau</p><h3>Teresa Vicente</h3><p>Teresa Vicente ist Professorin für Rechtsphilosophie an der Universität Murcia. Sie führte die Bürgerbewegung an, aus der 2022 das spanische Gesetz hervorging, das dem Ökosystem Mar Menor eigene Rechte und Rechtspersönlichkeit zuerkannte.</p><Link href="/weltweit#mar-menor">Mar Menor →</Link></div>
          </article>
        </div>
      </section>

      <section className="aboutDelegates" id="beauftragte">
        <div className="aboutDelegatesHead"><p className="sectionLabel">Beauftragte</p><h2>Verantwortung für das Volksbegehren.</h2></div>
        <article className="aboutLeadDelegate">
          <div className="aboutLeadDelegateImage"><img src="/brand/IMG_6256_16zu9.jpg" alt="Hans Leo Bader, Hauptbeauftragter des bayerischen Volksbegehrens Rechte der Natur" /></div>
          <div className="aboutLeadDelegateCopy"><p className="aboutPatronRole">Hauptbeauftragter</p><h3>Hans Leo Bader</h3><p>Initiator der Volksbegehren und Hauptbeauftragter des bayerischen Zulassungsantrags.</p></div>
        </article>
        <div className="aboutDelegatesFoot"><a href="https://gibdernaturrecht.muc-mib.de/beauftragt" target="_blank" rel="noreferrer">Weitere Beauftragte ansehen →</a></div>
      </section>

      <section className="aboutLayers">
        <article><span>01</span><div className="aboutLayerLogo aboutLayerLogoTall"><img src="/brand/logo_D_hochkant.png" alt="Logo Rechte der Natur – Die Volksbegehren" /></div><h3>Kampagne</h3><p>Die Rechte-der-Natur-Plattform erklärt, mobilisiert, verbindet und unterstützt konkrete Volksbegehren und politische Initiativen.</p></article>
        <article><span>02</span><div className="aboutLayerLogo"><img src="/brand/Netzwerk_Rechte_der_Natur_qgr-1ce3fa0e.png" alt="Logo Netzwerk Rechte der Natur" /></div><h3>Netzwerk</h3><p>Die Arbeit lebt von Menschen und Organisationen, die Erfahrungen, Kontakte, Öffentlichkeit und praktische Kampagnenkraft einbringen.</p></article>
        <article><span>03</span><div className="aboutLayerLogo"><img src="/brand/SR_Logo_rund.png" alt="Logo Systemische Rechtsentwicklung" /></div><h3>Fachliche Vertiefung</h3><p>Die Systemische Rechtsentwicklung untersucht Rechtsformen und Wirkungsbedingungen eigenständig. Ihre Aufgabe ist belastbare Erkenntnis und die Weiterentwicklung rechtlicher Lösungen.</p></article>
      </section>

      <section className="aboutSeparation"><div><p className="sectionLabel">Kampagne und Facharbeit</p><h2>Zwei Rollen, die sich gegenseitig stärken.</h2></div><div><p>Diese Plattform gewinnt Menschen für Rechte der Natur und bringt konkrete Kampagnen voran.</p><p>Die Systemische Rechtsentwicklung vertieft die fachlichen Fragen eigenständig und entwickelt daraus belastbare rechtliche und institutionelle Lösungen.</p><a href="https://systemische-rechtsentwicklung.de" target="_blank" rel="noreferrer">Zur Systemischen Rechtsentwicklung →</a></div></section>

      <section className="aboutPrinciples"><p className="sectionLabel">Was uns wichtig ist</p><div><strong>Menschen gewinnen.</strong><strong>Quellen ernst nehmen.</strong><strong>Wirkung ins Zentrum stellen.</strong><strong>Mitwelt als eigenständigen Wert anerkennen.</strong><strong>Mit neuem Wissen weiterlernen.</strong></div></section>

      <section className="aboutOpen"><p className="sectionLabel">Die Plattform wächst</p><h2>Unser Ziel ist Bewegung.</h2><p>Wir wollen die laufende Bayern-Kampagne stärken, neue Mitstreiter finden, weitere Landesinitiativen ermöglichen und dort, wo ein Volksbegehren tragfähig vorbereitet ist, auch die praktische Kampagnenarbeit unterstützen – bis hin zur Unterschriftensammlung.</p><div className="heroActions"><Link className="buttonPrimary" href="/mitmachen">Mitmachen</Link><Link className="textLink" href="/aktuelles">Aktuellen Stand ansehen →</Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Über uns</small></div></div><p>Kampagne, Netzwerk und fachliche Vertiefung verbinden.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
