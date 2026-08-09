import SiteHeader from "../components/SiteHeader";

export default function Unterstuetzen() {
  return (
    <main className="supportPage">
      <SiteHeader section="Unterstützen" claimLead="Gib der Natur Recht." claimTrail="Unterstützung macht Arbeit möglich." />

      <section className="supportHero">
        <p className="eyebrow">Unterstützen</p>
        <h1>Zwei Wege, unsere Arbeit zu unterstützen.</h1>
        <p className="lead">Sie können das Volksbegehren in Bayern direkt unterstützen oder einen freiwilligen Beitrag zur fachlichen Arbeit an systemischer Rechtsentwicklung leisten.</p>
      </section>

      <section className="supportGrid">
        <article className="supportCard supportCampaign">
          <p className="sectionLabel">Volksbegehren Bayern</p>
          <h2>Die Kampagne unterstützen.</h2>
          <p>Beiträge für die Kampagnenarbeit können per Überweisung geleistet werden.</p>
          <div className="supportBank">
            <span>Kontoinhaber</span><strong>Hans Bader</strong>
            <span>IBAN</span><strong>DE71 7016 6486 0001 0259 29</strong>
            <span>Verwendungszweck</span><strong>Initiative Rechte der Natur – Das Volksbegehren</strong>
          </div>
        </article>

        <article className="supportCard supportSre">
          <p className="sectionLabel">Systemische Rechtsentwicklung</p>
          <h2>Fachliche Arbeit ermöglichen.</h2>
          <p>Freiwillige Unterstützungsbeiträge helfen, juristische Texte, Eingaben, Übersetzungen und weitere fachliche Arbeiten zur ökologischen Rechtsentwicklung zu finanzieren.</p>
          <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="business" value="webmaster@muc-mib.de" />
            <input type="hidden" name="no_recurring" value="0" />
            <input type="hidden" name="item_name" value="Unterstuetzungsbeitrag fuer Mitweltrecht und Rechte der Natur" />
            <input type="hidden" name="currency_code" value="EUR" />
            <button className="supportPayPal" type="submit">Mit PayPal unterstützen →</button>
          </form>
          <p className="supportNote">Es handelt sich um einen freiwilligen Unterstützungsbeitrag und nicht um eine Spende im Sinne des § 10b EStG. Beiträge sind steuerpflichtige Einnahmen.</p>
        </article>
      </section>

      <section className="supportClosing">
        <p className="sectionLabel">Wofür Unterstützung wirkt</p>
        <h2>Kampagne und fachliche Arbeit brauchen unterschiedliche Ressourcen.</h2>
        <p>Die Volksbegehren brauchen Sichtbarkeit, Material und Menschen vor Ort. Die Systemische Rechtsentwicklung braucht Zeit für Recherche, juristische Präzision, Übersetzungen und belastbare Veröffentlichungen.</p>
      </section>
    </main>
  );
}
