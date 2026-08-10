import SiteHeader from "../components/SiteHeader";

export default function Impressum() {
  return (
    <main className="legalPage">
      <SiteHeader section="Impressum" claimLead="Gib der Natur Recht." claimTrail="Verantwortung gehört dazu." />

      <section className="legalHero">
        <p className="sectionLabel">Impressum</p>
        <h1>Angaben zu Anbieter, Kontakt und redaktioneller Verantwortung.</h1>
        <p>Rechte der Natur – Die Volksbegehren ist eine zivilgesellschaftliche Kampagne. Inhaltlich getragen wird sie von der Trägergruppe Rechte der Natur – Die Volksbegehren.</p>
      </section>

      <section className="legalContent">
        <h2>Anbieter und Kontakt</h2>
        <p>
          Hans Leo Bader<br />
          c/o Rechte der Natur – Die Volksbegehren<br />
          Heisenbergstraße 2b<br />
          80937 München<br />
          Deutschland
        </p>
        <p>
          Telefon: <a href="tel:+491777606660">+49 177 760 66 60</a><br />
          E-Mail: <a href="mailto:info@dubistdieer.de">info@dubistdieer.de</a>
        </p>

        <h2>Trägergruppe</h2>
        <p><strong>Trägergruppe Rechte der Natur – Die Volksbegehren</strong></p>
        <p>Die Trägergruppe trägt die Kampagne inhaltlich und organisatorisch. Ansprechpartner und Anbieter dieser Website ist Hans Leo Bader unter der oben genannten Anschrift.</p>

        <h2>Redaktionell verantwortlich</h2>
        <p>
          Verantwortlich für journalistisch-redaktionell gestaltete Inhalte gemäß § 18 Abs. 2 Medienstaatsvertrag (MStV):<br />
          <strong>Hans Leo Bader</strong><br />
          Heisenbergstraße 2b<br />
          80937 München
        </p>

        <h2>Hinweise zu externen Links</h2>
        <p>Diese Website enthält Links zu externen Angeboten. Für die Inhalte der verlinkten Seiten sind die jeweiligen Anbieter verantwortlich.</p>

        <p className="legalNote">Stand: August 2026. Die Anbieterkennzeichnung wurde für die neue Kampagnenwebsite gegenüber der bisherigen historischen Seite eigenständig zusammengeführt.</p>
      </section>
    </main>
  );
}
