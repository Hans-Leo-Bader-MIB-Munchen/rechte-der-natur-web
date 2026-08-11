import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

export const metadata = {
  title: "Newsletter vom 11. August 2026 – Rechte der Natur",
  description: "Archivfassung des Newsletters Rechte der Natur – Die Volksbegehren vom 11. August 2026."
};

const sections = [
  {
    label: "Nach der Pause",
    title: "Warum es hier länger still war",
    html: `In den vergangenen Monaten hat sich unsere Arbeit deutlich erweitert. Aus Fragen, die beim Volksbegehren immer wieder auftauchten, sind neue Arbeitslinien entstanden – darunter die <strong>Systemische Rechtsentwicklung</strong> und der <strong>ZukunftsCheck</strong>.<br/><br/>Dabei ging es nicht darum, das Thema Rechte der Natur zu verlassen. Im Gegenteil: Je genauer wir auf konkrete Fälle, rechtliche Entwicklungen und politische Entscheidungen geschaut haben, desto deutlicher wurde, dass dieselbe Grundfrage immer wieder auftaucht: <strong>Wie müssen Recht, Institutionen und Entscheidungen gestaltet sein, damit ökologische Zusammenhänge nicht erst dann berücksichtigt werden, wenn Schäden bereits entstanden sind?</strong><br/><br/>Aus dieser Vertiefung sind neue Werkzeuge, Texte, Fallanalysen und Verbindungen entstanden. Vieles davon lief eine Zeit lang parallel. Jetzt führen wir diese Stränge wieder stärker zusammen – mit den Rechten der Natur als Ausgangspunkt und mit einem genaueren Blick darauf, was aus einer guten Idee werden muss, damit sie in der Wirklichkeit tatsächlich etwas verändert.`
  },
  {
    label: "Neuer Auftritt",
    title: "Rechte der Natur – Die Volksbegehren",
    image: "/newsletter/Natur_Leben_Web_2026.jpg",
    html: `Auch die Kampagne bekommt deshalb einen neuen gemeinsamen Auftritt. Die neue Website <strong>Rechte der Natur – Die Volksbegehren</strong> verbindet den bayerischen Ausgangspunkt mit der größeren Perspektive: Rechte der Natur sollen nicht an einer Landesgrenze enden.<br/><br/>Die bisherige Kampagnenseite bleibt als historische Referenz erhalten. Neu ist der Blick nach vorn: verständlicher, aktueller und offen für weitere Initiativen in Deutschland.`,
    href: "https://rechtedernatur.de",
    button: "Neue Website ansehen"
  },
  {
    label: "Bayern",
    title: "Der Weg des Volksbegehrens ist nicht beendet",
    image: "/brand/IMG_6256_16zu9.jpg",
    html: `Seit 2021 versuchen wir in Bayern, Eigenrechte der Natur auf die politische und rechtliche Tagesordnung zu setzen. Dabei ging es nie nur um einen einzelnen Gesetzestext. Die Auseinandersetzung hat Fragen sichtbar gemacht, die weit darüber hinausreichen: <strong>Wer kann die Interessen eines Flusses, eines Waldes oder eines Ökosystems geltend machen? Wer muss zuhören? Und was folgt rechtlich daraus?</strong><br/><br/>Genau an diesen Fragen arbeiten wir weiter – politisch, juristisch und öffentlich.`,
    href: "/volksbegehren/bayern",
    button: "Zum Volksbegehren Bayern"
  },
  {
    label: "Systemische Rechtsentwicklung",
    title: "Rechte allein reichen nicht – sie müssen wirksam werden",
    html: `International gibt es inzwischen zahlreiche Anerkennungen von Natur als Rechtssubjekt. Doch die entscheidende Frage beginnt oft erst danach: <strong>Wer vertritt diese Rechte? Welche Behörden müssen sie berücksichtigen? Welche Verfahren werden ausgelöst? Und wer kann eingreifen, wenn nichts geschieht?</strong><br/><br/>Genau an dieser Lücke zwischen rechtlicher Anerkennung und tatsächlicher Wirkung setzt die Systemische Rechtsentwicklung an.`,
    href: "https://systemische-rechtsentwicklung.de",
    button: "Zur Systemischen Rechtsentwicklung"
  },
  {
    label: "Mar Menor",
    title: "Das Mar Menor hat Rechte – aber verändern sie auch das Recht?",
    image: "/newsletter/MarMenor-2026-08-10-14.07.35.jpeg",
    html: `Seit 2022 ist die spanische Salzwasserlagune selbst Rechtssubjekt. Unser neuer Beitrag fragt, was daraus praktisch folgt: <strong>Wann werden anerkannte Rechte tatsächlich wirksam?</strong><br/><br/>Der ausführliche Artikel erscheint <strong>in Kürze auf den Seiten des Netzwerks Rechte der Natur</strong>. Wir informieren, sobald er dort online ist.`
  },
  {
    label: "Kolumbien",
    title: "Von einzelnen Flüssen zum System",
    html: `Kolumbien zeigt besonders gut, warum sich der Blick inzwischen erweitert hat. Dort geht es längst nicht mehr nur um einzelne gerichtliche Anerkennungen von Flüssen oder Ökosystemen. Sichtbar wird eine weitergehende Entwicklung: <strong>Vertretung, Governance, institutionelle Zuständigkeit und die Frage, wie solche Rechte dauerhaft wirksam werden.</strong><br/><br/>Genau solche Entwicklungslinien untersuchen wir im Resonanzraum der Systemischen Rechtsentwicklung.`,
    href: "https://systemische-rechtsentwicklung.de/resonanzraum/von-einzelnen-fluessen-zum-system-kolumbien",
    button: "Kolumbien: den Beitrag lesen"
  },
  {
    label: "ZukunftsCheck",
    title: "Früher fragen – bevor Entscheidungen feststehen",
    html: `Der <strong>ZukunftsCheck</strong> setzt an einem anderen Punkt an. Er fragt nicht erst, ob eine bereits entwickelte Entscheidung rechtlich zulässig ist. Er setzt früher an: Welche langfristigen Folgen, Abhängigkeiten und Zielkonflikte entstehen? Welche Perspektiven fehlen? Welches Wissen müsste verbunden werden, bevor eine Entscheidung getroffen wird?<br/><br/>Damit ergänzt er die Arbeit an den Rechten der Natur: nicht als Ersatz, sondern als Werkzeug, um komplexe Entscheidungen früher und systemischer zu prüfen.`,
    href: "https://zukunftscheck.org",
    button: "Zum ZukunftsCheck"
  },
  {
    label: "Ein Fall vor unserer Haustür",
    title: "Eine Eiche – und was unser Recht daraus macht",
    html: `Ein aktueller Grenzbaumfall aus Regensburg macht die Grundfrage erstaunlich anschaulich. Eine alte Eiche durfte nicht einfach gefällt werden. Nicht, weil der Baum eigene Rechte hatte, sondern weil das bestehende Zivilrecht Grenzen setzt.<br/><br/>Im ersten Beitrag erzählen wir den konkreten Fall: <strong>„Die Eiche, die bleiben darf“.</strong><br/><br/>Der Folgeartikel geht einen Schritt weiter: <strong>„Der Baum, den das Recht in Stücke zerlegt“</strong> – und zeigt, wie eigentumsrechtliche Kategorien einen lebenden Organismus juristisch aufteilen.`
  },
  {
    label: "Buchprojekt",
    title: "Systemische Rechtsentwicklung – das Buch entsteht",
    image: "/newsletter/systemische-rechtsentwicklung-buch.jpg",
    html: `Aus der Analyse der vielen Einzelfälle ist inzwischen ein Buchprojekt geworden: <strong>„Systemische Rechtsentwicklung – Wie Recht ökologische Interessen wirksam macht“.</strong><br/><br/>Das Buch erzählt nicht einfach eine Sammlung von Fällen. Es fragt systematisch: Was geschieht zwischen einer rechtlichen Anerkennung und tatsächlicher Wirkung? Welche Rolle spielen Vertretung, Institutionen, Verfahren, Wissen und Durchsetzung?<br/><br/>Für die erste Ausgabe prüfen wir derzeit einen <strong>Subskriptionspreis von 14,99 €</strong>; der spätere gebundene Ladenpreis soll <strong>24,99 €</strong> betragen. Für Newsletter-Leser möchten wir die ersten Exemplare außerdem <strong>auf Wunsch signieren</strong>.<br/><br/><em>Die endgültigen Konditionen und der Bestellweg folgen, sobald Preisfestsetzung, Erscheinungstermin und Auslieferung verbindlich feststehen.</em>`
  },
  {
    label: "Europäische Ebene",
    title: "Und dann ist da noch Europa",
    image: "/newsletter/EBI_Logo.png",
    html: `Auch auf europäischer Ebene wird an einer <strong>Europäischen Bürgerinitiative für Rechte der Natur</strong> gearbeitet. <strong>Die Frage nach Rechten der Natur endet weder an der bayerischen noch an der deutschen Grenze.</strong> Sobald die europäische Kampagne klarer konturiert ist, berichten wir ausführlicher.`
  },
  {
    label: "Ausblick",
    title: "Vielleicht führt das noch einen Schritt weiter",
    html: `Wenn wir Recht, Entscheidungen, ökologische Zusammenhänge und regionale Entwicklung gemeinsam denken, stellt sich irgendwann eine größere Frage: <strong>Wie könnte eine Region aussehen, die nicht nur Schäden vermeidet oder Nachhaltigkeitsziele erfüllt, sondern ihre natürlichen und sozialen Lebensgrundlagen tatsächlich regeneriert?</strong><br/><br/>Mit dieser Idee einer <strong>regenerativen Region</strong> beschäftigen wir uns derzeit noch offen. Sie ist kein fertiges Konzept – aber möglicherweise ein nächster Baustein, der Rechte der Natur, ZukunftsCheck und regionale Entwicklung miteinander verbindet.`
  },
  {
    label: "Bitte testen",
    title: "Findet unsere Fehler.",
    html: `Unsere neuen Webseiten sind inzwischen ziemlich weit – und genau deshalb brauchen wir jetzt eure Augen. <strong>Bitte testet sie ausführlich auf Desktop und Smartphone.</strong><br/><br/>Achtet zum Beispiel auf <strong>fehlerhafte oder tote Links, Schleifen in der Navigation, unklare Wege, abgeschnittene Inhalte, Darstellungsfehler, schlechte mobile Ansichten, missverständliche Texte</strong> oder Stellen, an denen ihr nicht wisst, wie es weitergeht.<br/><br/>Auch Hinweise wie „Das habe ich nicht verstanden“, „Hier hätte ich etwas anderes erwartet“ oder „Das funktioniert auf meinem Gerät nicht“ helfen uns sehr. Je konkreter, desto besser.`,
    href: "mailto:info@dubistdieer.de?subject=Feedback%20zu%20unseren%20Webseiten",
    button: "Feedback per E-Mail"
  },
  {
    label: "Mitmachen",
    title: "Die nächste Etappe braucht Menschen, die sie mittragen",
    html: `Rechte der Natur werden nicht dadurch selbstverständlich, dass irgendwo ein guter Satz im Gesetz steht. Sie brauchen öffentliche Debatte, politische Initiative, juristische Arbeit – und Menschen, die das Thema weitertragen.<br/><br/>Wenn du Kontakte, Veranstaltungen, regionale Initiativen oder konkrete Ideen hast, melde dich. Und wenn du unsere Arbeit sinnvoll findest: <strong>Leite diesen Newsletter weiter und erzähle anderen davon.</strong>`,
    href: "/mitmachen",
    button: "Kontakt & Mitmachen"
  }
];

export default function ArchivedNewsletter() {
  return (
    <main style={{background:'#fbfaf5',minHeight:'100vh',color:'#496b35'}}>
      <SiteHeader section="Newsletter" claimLead="Archivfassung." claimTrail="11. August 2026." />
      <section style={{maxWidth:760,margin:'0 auto',padding:'64px 22px 28px'}}>
        <p style={{fontSize:12,letterSpacing:'.13em',textTransform:'uppercase',fontWeight:700,color:'#8abb45'}}>Rechte der Natur · Die Volksbegehren</p>
        <h1 style={{fontSize:'clamp(40px,7vw,66px)',lineHeight:.98,fontWeight:500,margin:'12px 0 22px'}}>Es war eine Weile ruhig. Inzwischen ist einiges entstanden.</h1>
        <p style={{fontSize:18,lineHeight:1.65}}>Der letzte Newsletter ist eine ganze Weile her. Nicht, weil bei uns nichts passiert wäre – eher im Gegenteil.<br/><br/>Aus der Arbeit am Volksbegehren sind neue Fragen, neue Werkzeuge und neue Verbindungen entstanden. Jetzt führen wir diese Linien wieder stärker zusammen.</p>
        <div style={{marginTop:20,fontSize:13,color:'#6f8064'}}>Versanddatum: 11. August 2026 · dauerhafte Archivfassung</div>
      </section>

      <section style={{maxWidth:760,margin:'0 auto',padding:'12px 22px 72px',display:'grid',gap:18}}>
        {sections.map((s,i) => (
          <article key={s.title} style={{background:i%3===0?'#eef5e6':i%3===1?'#d9f1f8':'#f4eadf',borderRadius:20,padding:'26px 26px 24px',borderTop:`5px solid ${i%3===0?'#8abb45':i%3===1?'#159dcc':'#f39219'}`}}>
            <div style={{fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',fontWeight:700,marginBottom:12}}>{s.label}</div>
            <h2 style={{fontSize:28,lineHeight:1.08,fontWeight:500,margin:'0 0 14px'}}>{s.title}</h2>
            {s.image && <img src={s.image} alt="" style={{display:'block',width:'100%',height:'auto',borderRadius:14,margin:'0 0 20px'}} />}
            <div style={{fontSize:16,lineHeight:1.65}} dangerouslySetInnerHTML={{__html:s.html}} />
            {s.href && s.button && <div style={{marginTop:20}}><a href={s.href} style={{display:'inline-block',background:'#496b35',color:'#fff',textDecoration:'none',fontWeight:700,fontSize:14,padding:'13px 18px',borderRadius:999}}>{s.button}</a></div>}
          </article>
        ))}

        <div style={{marginTop:12,padding:'24px 26px',background:'#fff',borderRadius:18,border:'1px solid rgba(73,107,53,.15)'}}>
          <strong style={{display:'block',fontSize:18,marginBottom:8}}>Weitergeben & Rückmelden</strong>
          <p style={{fontSize:15,lineHeight:1.6,margin:'0 0 16px'}}>Diese Archivseite kann direkt geteilt werden. Feedback erreicht uns unter info@dubistdieer.de.</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <a href="mailto:?subject=Rechte%20der%20Natur%20%E2%80%93%20Newsletter&body=https%3A%2F%2Frechtedernatur.de%2Fnewsletter%2F2026-08-11" style={{background:'#8abb45',color:'#fff',textDecoration:'none',fontWeight:700,fontSize:13,padding:'12px 16px',borderRadius:999}}>Per E-Mail teilen</a>
            <a href="mailto:info@dubistdieer.de?subject=Feedback%20zum%20Newsletter%20Rechte%20der%20Natur" style={{background:'#eef5e6',color:'#496b35',textDecoration:'none',fontWeight:700,fontSize:13,padding:'12px 16px',borderRadius:999}}>Feedback geben</a>
            <Link href="/newsletter" style={{color:'#496b35',fontWeight:700,fontSize:13,padding:'12px 6px'}}>Zur Newsletter-Seite →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
