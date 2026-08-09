import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";

export default function UeberUns() {
  return (
    <main className="aboutPage">
      <SiteHeader section="Über uns" claimLead="Gib der Natur Recht." claimTrail="Aus einer Kampagne wächst eine Plattform." />

      <section className="aboutHero"><p className="eyebrow">Über uns</p><h1>Wir sind Kampagne. Und wir entwickeln sie weiter.</h1><p className="lead">Die Idee für die bayerische Initiative entstand 2019 bei Hans Leo Bader. Daraus entwickelte sich das Volksbegehren „Rechte der Natur“ in Bayern – und diese Kampagne läuft weiter. Heute verbinden wir Kampagnenerfahrung mit internationaler Recherche und der Frage, wie Rechte der Natur politisch tragfähig und rechtlich wirksam ausgestaltet werden können.</p></section>

      <section className="aboutOrigin"><div><p className="sectionLabel">Herkunft und Gegenwart</p><h2>2019 begann die Idee. Bayern ist weiterhin aktiv.</h2></div><div><p>Hans Leo Bader entwickelte 2019 den Ausgangspunkt für die bayerische Rechte-der-Natur-Initiative und initiierte daraus das Volksbegehren. Im weiteren Aufbau kamen Mitstreiter mit unterschiedlichen fachlichen und praktischen Hintergründen hinzu.</p><p>Das Volksbegehren will Rechte der Natur in der Bayerischen Verfassung verankern. Dafür werden weiterhin Unterstützungsunterschriften für den Zulassungsantrag gesammelt.</p><p>Parallel ist eine größere Plattform entstanden: für neue Landesinitiativen, internationale Beispiele, aktuelle Entwicklungen und Menschen, die mitmachen wollen.</p><Link href="/volksbegehren/bayern">Zur laufenden Bayern-Kampagne →</Link></div></section>

      <section className="aboutLayers"><article><span>01</span><h3>Kampagne</h3><p>Die Rechte-der-Natur-Plattform erklärt, mobilisiert, verbindet und unterstützt konkrete Volksbegehren und politische Initiativen.</p></article><article><span>02</span><h3>Netzwerk</h3><p>Die Arbeit lebt von Menschen und Organisationen, die Erfahrungen, Kontakte, Öffentlichkeit und praktische Kampagnenkraft einbringen.</p></article><article><span>03</span><h3>Fachliche Vertiefung</h3><p>Die Systemische Rechtsentwicklung prüft Rechtsformen und Wirkungsbedingungen eigenständig. Ihre Aufgabe ist Erkenntnis – nicht Kampagnenbestätigung.</p></article></section>

      <section className="aboutSeparation"><div><p className="sectionLabel">Zwei Aufgaben, eine wichtige Grenze</p><h2>Kampagne darf überzeugen. Prüfung muss offen bleiben.</h2></div><div><p>Auf dieser Plattform vertreten wir das politische Anliegen der Rechte der Natur und wollen dafür Mitstreiter gewinnen.</p><p>Die fachliche Prüfung bleibt davon unterscheidbar. Sie kann Rechte der Natur stützen, präzisieren oder auch zeigen, dass in einer konkreten Situation andere institutionelle Lösungen geeigneter sind.</p><a href="https://systemische-rechtsentwicklung.de" target="_blank" rel="noreferrer">Zur Systemischen Rechtsentwicklung →</a></div></section>

      <section className="aboutPrinciples"><p className="sectionLabel">Was uns wichtig ist</p><div><strong>Menschen gewinnen.</strong><strong>Quellen vor Behauptungen.</strong><strong>Wirkung vor Symbolik.</strong><strong>Mitwelt nicht nur als Ressource denken.</strong><strong>Fehler korrigieren, wenn wir heute mehr wissen.</strong></div></section>

      <section className="aboutOpen"><p className="sectionLabel">Die Plattform wächst</p><h2>Das Ziel ist nicht nur Information.</h2><p>Wir wollen die laufende Bayern-Kampagne stärken, neue Mitstreiter finden, weitere Landesinitiativen ermöglichen und dort, wo ein Volksbegehren tragfähig vorbereitet ist, auch die praktische Kampagnenarbeit unterstützen – bis hin zur Unterschriftensammlung.</p><div className="heroActions"><Link className="buttonPrimary" href="/mitmachen">Mitmachen</Link><Link className="textLink" href="/aktuelles">Aktuellen Stand ansehen →</Link></div></section>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Über uns</small></div></div><p>Kampagne, Netzwerk und fachliche Prüfung transparent unterscheiden.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
