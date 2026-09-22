import SiteHeader from "../../components/SiteHeader";
import BrandMark from "../../components/BrandMark";

const image="/images/spreewitz-spreeaue-eigenrechte.jpg";
const title="Auch ohne Eigenrechte der Spree wurde der Plan aufgehoben";
const description="Was der Fall Spreewitz darüber zeigt, was eigene Rechte eines Flusses tatsächlich zusätzlich verändern könnten.";

export const metadata={
  title:`${title} | Rechte der Natur`,description,
  alternates:{canonical:"https://rechtedernatur.de/aktuelles/spreewitz-eigenrechte"},
  openGraph:{title,description,type:"article",url:"https://rechtedernatur.de/aktuelles/spreewitz-eigenrechte",siteName:"Rechte der Natur",images:[{url:image,alt:"Spreeaue als Symbolbild zum Fall Spreewitz und zur Frage eigener Rechte der Spree"}]},
  twitter:{card:"summary_large_image",title,description,images:[image]}
};

const N=({n}:{n:number})=><sup><a href={`#fn-${n}`} aria-label={`Endnote ${n}`}>[{n}]</a></sup>;

export default function Artikel(){
return <main className="newsPage">
<SiteHeader section="Aktuelles" claimLead="Was sich bewegt." claimTrail="Geprüft. Eingeordnet. In Bewegung." />
<section className="newsHero"><p className="eyebrow">Spreewitz · Rechte der Natur · 22. September 2026</p><h1>{title}</h1><p className="lead">{description}</p></section>
<div style={{maxWidth:1100,margin:"0 auto 42px",padding:"0 28px"}}><img src={image} alt="Spreeaue als Symbolbild zum Fall Spreewitz und zur Frage eigener Rechte der Spree" style={{display:"block",width:"100%",height:"auto",borderRadius:20}}/><p style={{fontSize:".78rem",lineHeight:1.5,color:"var(--earth)",marginTop:8}}>Symbolbild: Flusslandschaft. KI-generiert mit ChatGPT Images (OpenAI).</p></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"0 28px 72px",fontSize:"1.08rem",lineHeight:1.75}}>
<p>Es ist ein bemerkenswerter Ausgangspunkt für eine Untersuchung über die Rechte der Natur: Das bestehende Recht hat in einem konkreten erstinstanzlichen Verfahren erheblichen Rechtsschutz ermöglicht.<N n={1}/></p>
<p>Am 12. Juni 2026 hob das Verwaltungsgericht Dresden den Planfeststellungsbeschluss für den zweiten Bauabschnitt der sogenannten Spreestraße bei Spreewitz auf. Geplant sind auf rund 5,2 Kilometern der Neu- und Ausbau einer Kreisstraße und ein etwa 500 Meter langes Brückenbauwerk über die Spreeaue. Geklagt hatten drei betroffene Grundstückseigentümer und der BUND.<N n={1}/></p>
<p>Die Spree selbst hatte keine eigenen Rechte. Sie war keine Klägerin. Und dennoch wurde der Planfeststellungsbeschluss aufgehoben.</p>
<p>Das Urteil ist allerdings erstinstanzlich. Das Verwaltungsgericht hat die Berufung ausdrücklich zugelassen. Die vom Gericht entwickelten Maßstäbe dürfen deshalb nicht als gefestigte obergerichtliche Rechtsprechung behandelt werden.<N n={1}/></p>
<p><strong>Was hätten eigene Rechte der Spree in einem Verfahren zusätzlich verändert, in dem das bestehende Recht bereits erheblichen Rechtsschutz ermöglicht hat?</strong></p>
<p>Das ist eine strengere Frage als die häufigere Überlegung, ob Rechte der Natur dort helfen könnten, wo bestehendes Umweltrecht versagt. Denn Spreewitz zwingt dazu, zunächst alles abzuziehen, was das geltende Recht bereits leisten konnte.</p>

<h2>Was das bestehende Recht in diesem Fall leisten konnte</h2>
<p>Die Entscheidung des Verwaltungsgerichts beruhte nicht darauf, dass die Spree selbst Trägerin eines Rechts gewesen wäre.</p>
<p>Nach den veröffentlichten Entscheidungsgründen beanstandete das Gericht unter anderem die Planrechtfertigung und die zugrunde gelegte Verkehrsprognose. Strukturwandel und Kohleausstieg in der Lausitz hätten berücksichtigt werden müssen. Hinzu kamen Anforderungen an die Berücksichtigung des Klimaschutzes und der Treibhausgasemissionen.<N n={2}/><N n={3}/></p>
<p>Auch die Alternativen spielten eine wichtige Rolle. Einer Variante mit dem rund 500 Meter langen Brückenbauwerk stand eine Lösung gegenüber, die weitgehend vorhandene Straßen genutzt und eine erheblich kürzere Brücke benötigt hätte. Der Fahrzeitvergleich lag bei 23,0 gegenüber 22,2 Minuten – also 0,8 Minuten.<N n={4}/></p>
<p>Das Gericht hielt den Planfeststellungsbeschluss für rechtswidrig und hob ihn auf.<N n={1}/></p>
<p>Das zeigt zunächst etwas, das bei der Diskussion über Rechte der Natur leicht aus dem Blick geraten kann: Ökologische Belange sind im geltenden Recht keineswegs rechtlos.</p>
<p>Auch das Wasserrecht enthält bereits starke materielle Vorgaben. § 27 Wasserhaushaltsgesetz normiert für oberirdische Gewässer insbesondere das Verschlechterungsverbot und das Ziel, einen guten ökologischen und chemischen Zustand zu erhalten oder zu erreichen.<N n={5}/> Für bestimmte Verschlechterungen enthält § 31 WHG eine strukturierte Ausnahmeprüfung.<N n={6}/></p>
<p>Der Europäische Gerichtshof hat für Art. 4 Abs. 1 der Wasserrahmenrichtlinie klargestellt, dass die dortigen Umweltziele nicht bloß programmatisch sind. Vorbehaltlich einer Ausnahme darf ein Vorhaben nicht genehmigt werden, wenn es eine Verschlechterung des Zustands eines Oberflächenwasserkörpers verursachen kann oder die Erreichung eines guten Zustands beziehungsweise Potenzials gefährdet.<N n={7}/></p>
<p>Ökologische Zulassungsschranken und Alternativenanforderungen beginnen also nicht erst mit Rechten der Natur.</p>

<h2>Aber wer besitzt eigentlich das Recht?</h2>
<p>Damit verschiebt sich die Frage.</p>
<p>Ein Fluss kann durch objektives Umweltrecht intensiv geschützt werden, ohne selbst Träger derjenigen Rechte zu sein, die seinen Schutz gewährleisten.</p>
<p>Genau hier setzt der von Green Legal Impact Germany 2025 veröffentlichte Gesetzentwurf zu den „Rechten der Spree“ an.<N n={8}/></p>
<p>Der Entwurf erkennt die Spree als Rechtssubjekt beziehungsweise „ökologische Person“ an und ordnet ihr eigene materielle Rechte zu.<N n={9}/><N n={10}/></p>
<p>Das ist zunächst eine Änderung der rechtlichen Zuordnung. Nicht nur Menschen, Verbände oder Behörden würden sich auf Normen berufen, die dem Schutz der Spree dienen. Die Spree selbst wäre Trägerin bestimmter materieller Rechtspositionen.</p>
<p><strong>Rechtspersönlichkeit allein bedeutet noch keinen stärkeren ökologischen Schutz.</strong></p>
<p>Der konkrete GLI-Entwurf besteht deshalb aus wesentlich mehr als der Anerkennung der Spree als Rechtsträgerin. Er verbindet diese Stellung mit materiellen Rechten, Repräsentationsorganen, Beteiligungsregeln, behördlichen Pflichten, gerichtlicher Durchsetzung und besonderen Entscheidungsregeln.<N n={10}/><N n={11}/><N n={12}/><N n={13}/></p>
<p>Untersucht werden muss deshalb das GLI-Modell als Gesamtarchitektur – nicht die Rechtspersönlichkeit isoliert.</p>

<h2>Eigenrechte ersetzen Umweltrecht nicht</h2>
<p>Gerade der Vergleich mit dem geltenden Wasserrecht verhindert eine zu einfache Erzählung.</p>
<p>Der GLI-Entwurf führt nicht erstmals die Idee ein, dass eine Verschlechterung eines Gewässers rechtlich problematisch sein kann. Er erfindet auch nicht die Alternativenprüfung oder verbindliche ökologische Bewirtschaftungsziele.<N n={5}/><N n={6}/><N n={7}/></p>
<p>Vieles davon existiert bereits. Der Unterschied liegt an einer anderen Stelle.</p>
<p>Im bestehenden Recht sind solche Anforderungen insbesondere objektivrechtliche Bewirtschaftungsziele, Zulassungsvoraussetzungen und Kontrollmaßstäbe. Der GLI-Entwurf würde diese Schutzarchitektur um eigene materielle Rechtspositionen der Spree und deren institutionelle Repräsentation ergänzen.<N n={9}/><N n={10}/><N n={11}/></p>
<p>Das ist dogmatisch etwas anderes. Ob es praktisch auch zu besseren ökologischen Ergebnissen führt, ist eine zweite Frage.</p>

<h2>Was wäre tatsächlich zusätzlich?</h2>
<h3>1. Die Spree wäre selbst Rechtsträgerin</h3>
<p>Bestimmte materielle Rechte wären der Spree selbst zugeordnet.<N n={9}/><N n={10}/> Das verändert die rechtliche Konstruktion – auch dann, wenn einzelne Schutzinhalte bereits aus anderem Umweltrecht bekannt sind.</p>
<h3>2. Diese Rechte hätten eine institutionelle Vertretung</h3>
<p>Der Entwurf sieht institutionelle Gremien zur Wahrnehmung der Spree-Rechte und eine gerichtliche Geltendmachung im Namen des Ökosystems vor.<N n={11}/></p>
<p>Damit wird die Wahrnehmung der Spree-Rechte dauerhaft institutionell organisiert. Hinzu kommen Regelungen über Finanzierung und Mittel für die Durchsetzung der Rechte in Rechtsstreitigkeiten.<N n={12}/></p>
<p>Auch hier darf man allerdings nicht überziehen. Das Umwelt-Rechtsbehelfsgesetz ermöglicht anerkannten Vereinigungen bereits heute innerhalb seines gesetzlichen Anwendungsbereichs Rechtsbehelfe, ohne dass sie eine Verletzung eigener Rechte geltend machen müssen.<N n={14}/> Sein Anwendungsbereich reicht über UVP-pflichtige Vorhaben hinaus und erfasst mehrere weitere Kategorien umweltbezogener Entscheidungen.<N n={15}/></p>
<p><strong>Heute kann niemand ökologische Rechtsverstöße gerichtlich kontrollieren lassen – mit Eigenrechten erstmals schon.</strong> Das wäre falsch.</p>
<p>Die präzisere Frage lautet: <strong>Was verändert sich, wenn die Wahrnehmung der ökologischen Position eines Flusses zusätzlich dauerhaft einer institutionellen Vertretung eigener Rechte dieses Flusses zugeordnet wird?</strong></p>
<h3>3. Der Entwurf verändert die Entscheidungsarchitektur</h3>
<p>§ 15 des GLI-Entwurfs verlangt eine umfassende Berücksichtigung der Rechte der Spree im Behördenhandeln.<N n={13}/></p>
<p>§ 15 enthält dafür eine besondere Konflikt- und Gewichtungsordnung. Der Begleittext bezeichnet sie ausdrücklich als Wertentscheidung zugunsten der Rechte der Spree. Zugleich sollen die Rechte der Spree nach der Konzeption des Entwurfs nicht uneingeschränkt gelten; der Entwurf regelt deshalb, unter welchen Voraussetzungen gegenläufige Interessen und Eingriffe berücksichtigt werden können.<N n={13}/></p>
<p>Hinzu kommen Regelungen zu kumulativen Auswirkungen sowie zu Klima und Biodiversität und besondere Voraussetzungen für bestimmte Eingriffe.<N n={13}/></p>
<p>Auch das ist nicht vollständig neu. Das geltende Wasserrecht kennt bereits verbindliche ökologische Anforderungen und unter bestimmten Voraussetzungen strenge Ausnahme- und Alternativenprüfungen.<N n={5}/><N n={6}/><N n={7}/></p>
<p>Neu ist deshalb weniger jedes einzelne Prüfkriterium als seine Einordnung in eine auf <strong>eigene Rechte der Spree</strong> bezogene Entscheidungs- und Repräsentationsarchitektur.</p>

<h2>Der stärkste Einwand</h2>
<p><strong>Ein erheblicher Teil dessen, was der GLI-Entwurf materiell verlangt, hat bereits funktionale Vorläufer oder Entsprechungen im geltenden Wasser- und Umweltrecht. Der verbleibende Unterschied kann deshalb dogmatisch real sein, ohne dass damit bereits ein zusätzlicher praktischer oder ökologischer Ergebnisnutzen bewiesen wäre.</strong></p>
<p>Spreewitz verschärft diesen Einwand. Denn der Planfeststellungsbeschluss wurde bereits aufgehoben. Für das konkrete gerichtliche Ergebnis ist deshalb bislang kein zusätzlicher Nutzen eigener Spree-Rechte nachgewiesen.</p>

<h2>Die Veränderung könnte vor dem Gericht beginnen</h2>
<p>Der möglicherweise interessantere Unterschied liegt früher.</p>
<p>Der GLI-Entwurf sieht nicht nur gerichtliche Durchsetzung vor. Die Repräsentationsorgane der Spree sollen bereits in bestimmte wasserrechtliche Planungs- und Beteiligungsprozesse eingebunden werden.<N n={16}/> Behörden sollen die Rechte der Spree berücksichtigen; der Entwurf enthält außerdem Informations- und Bearbeitungsmechanismen für mögliche Rechtsverletzungen.<N n={11}/><N n={13}/></p>
<p>Nicht nur: <strong>Hätte ein Gericht am Ende anders entschieden?</strong></p>
<p>Sondern: <strong>Wäre die Entscheidung innerhalb der Verwaltung unter einer institutionalisierten Vertretung eigener Spree-Rechte überhaupt auf dieselbe Weise vorbereitet, abgewogen und begründet worden?</strong></p>
<p>Auch darauf gibt Spreewitz keine Antwort. Es ist eine kontrafaktische Frage. Ohne eine tatsächliche Anwendung dieses Modells kann nicht seriös behauptet werden, die Behörde hätte eine andere Trasse gewählt.</p>
<p>Der Unterschied besteht zunächst in der Struktur des Entscheidungsprozesses – nicht in einem nachgewiesenen anderen Ergebnis.</p>

<h2>Ein bewusst schwieriger Testfall</h2>
<p>Spreewitz ist ein erfolgreicher Rechtsschutzfall. Es gab betroffene Grundstückseigentümer. Eine anerkannte Umweltvereinigung klagte. Und das Verwaltungsgericht hob den Planfeststellungsbeschluss auf.<N n={1}/></p>
<p>Gerade deshalb ist Spreewitz ein strenger Test für den zusätzlichen Nutzen von Eigenrechten: Der Fall zeigt, was von ihnen als zusätzliche Funktion übrig bleibt, wenn bestehender Rechtsschutz bereits erfolgreich aktiviert wurde.</p>
<p>Er erlaubt dagegen keine Verallgemeinerung auf Konstellationen, in denen Individualkläger, anerkannte Umweltvereinigungen oder vergleichbare Zugangswege fehlen.</p>
<p>Der Fall beweist deshalb weder die generelle Leistungsfähigkeit noch die generelle Unzulänglichkeit des bestehenden Umweltrechtsschutzes. Er beantwortet eine engere Frage.</p>

<h2>Die 500-Meter-Brücke als konkreter Test</h2>
<p>Besonders anschaulich wird das bei der geplanten Querung der Spreeaue.</p>
<p>Der GLI-Entwurf bezieht das Ökosystem der Spree in seine Rechtskonstruktion ein.<N n={9}/><N n={10}/> Deshalb liegt die Frage nahe, ob ein rund 500 Meter langes Brückenbauwerk über die Aue die im Entwurf normierten Rechte berührt hätte.</p>
<p>Das lässt sich aus dem Urteil allein jedoch nicht beantworten. Insbesondere wäre es unzulässig, aus der Größe des Bauwerks automatisch auf einen Eingriff in einen „Kernbereich“ der Spree-Rechte zu schließen.</p>
<p>Dafür wären eine genaue Subsumtion unter den GLI-Entwurf und eine vertiefte Auswertung der Fach- und Planunterlagen erforderlich.</p>
<p>Interessant ist etwas anderes: Viele der tatsächlichen Gesichtspunkte, die für eine solche Prüfung relevant wären, waren bereits im realen Verfahren vorhanden – Brückenlänge, Alternativen, Treibhausgasemissionen und verkehrlicher Nutzen.<N n={2}/><N n={3}/><N n={4}/></p>
<p>Der mögliche Unterschied liegt also möglicherweise weniger darin, <strong>welche Tatsachen</strong> betrachtet würden, sondern darin, <strong>welcher rechtlichen Position diese Tatsachen zugeordnet werden und nach welchem Entscheidungsprogramm sie bewertet werden</strong>.</p>

<h2>Was Spreewitz tatsächlich zeigt</h2>
<p>Der Fall erlaubt drei Aussagen – und drei andere gerade nicht.</p>
<p><strong>Erstens:</strong> Ein erheblicher gerichtlicher Schutz ökologischer Belange kann auch ohne Eigenrechte eines Flusses möglich sein.</p>
<p><strong>Zweitens:</strong> Daraus folgt nicht, dass eigene Rechte funktionslos wären. Der GLI-Entwurf würde Rechtsstatus, materielle Rechtsposition, institutionelle Repräsentation und Teile der Entscheidungsarchitektur verändern.</p>
<p><strong>Drittens:</strong> Ein solcher Strukturunterschied ist noch kein Nachweis eines zusätzlichen ökologischen Ergebnisnutzens.</p>
<p>Nicht belegt ist dagegen, dass Eigenrechte die Spreestraße verhindert hätten, dass unter dem GLI-Modell eine andere Trasse gewählt worden wäre oder dass ein Gericht zu einem anderen Ergebnis gekommen wäre. Ebenso wenig belegt Spreewitz, dass Eigenrechte überflüssig wären.</p>

<h2>Was bleibt, wenn man das bereits Vorhandene abzieht?</h2>
<p>Je genauer man das bestehende Umweltrecht betrachtet, desto weniger überzeugend wird die Vorstellung, Rechte der Natur müssten ihren Wert dadurch beweisen, dass ohne sie überhaupt kein wirksamer Schutz möglich wäre.</p>
<p>Spreewitz zeigt jedenfalls, dass dies nicht in jedem konkreten Fall vorausgesetzt werden kann.</p>
<p>Aber daraus folgt nicht, dass es keinen Unterschied macht, <strong>wer innerhalb der Rechtsordnung Träger einer Rechtsposition ist</strong>.</p>
<p>Nach Abzug der bereits bestehenden Schutzinstrumente bleibt beim GLI-Modell ein eigenständiger Strukturkern: Die Spree würde vom rechtlich geschützten Ökosystem zusätzlich zum Träger eigener materieller Rechte. Diese Rechte würden institutionell repräsentiert. Und sie würden innerhalb einer besonderen Entscheidungsarchitektur in behördliche Verfahren und gerichtlichen Rechtsschutz eingebracht.</p>
<p>Ob daraus praktisch bessere ökologische Ergebnisse entstehen, kann Spreewitz nicht beweisen.</p>
<p>Der Fall zeigt vielmehr, wo die nächste empirische Frage beginnt:</p>
<p><strong>Verändert die institutionalisierte eigene Rechtsposition eines Ökosystems Entscheidungen auch dort, wo Umweltrecht bereits starke Schutzmaßstäbe kennt?</strong></p>
<p>Das ist eine anspruchsvollere Frage als die Behauptung, ein Fluss brauche eigene Rechte, weil das bestehende Recht nichts leisten könne. Und vielleicht ist sie gerade deshalb die interessantere.</p>

<hr/><h2>Quellen und Endnoten</h2>
<ol className="sreSourceList">
<li id="fn-1">Verwaltungsgericht Dresden, Urteil vom 12.06.2026, Az. 12 K 2222/25; amtliche Veröffentlichungen des Gerichts vom 16.06.2026 und 16.09.2026. Die Berufung wurde zugelassen.</li>
<li id="fn-2">VG Dresden, amtliche Mitteilung vom 16.09.2026: Planrechtfertigung, Verkehrsprognose, Strukturwandel und Kohleausstieg als im Wesentlichen tragende Gründe.</li>
<li id="fn-3">Ebenda: Klimaschutz, Treibhausgasermittlung/-bilanzierung und intertemporale Verhältnismäßigkeit.</li>
<li id="fn-4">Ebenda: Alternativtrasse unter weitgehender Nutzung vorhandener Straßen sowie Fahrzeitvergleich 23,0/22,2 Minuten.</li>
<li id="fn-5">§ 27 WHG – Bewirtschaftungsziele für oberirdische Gewässer.</li>
<li id="fn-6">§ 31 WHG – Ausnahmen von den Bewirtschaftungszielen bei oberirdischen Gewässern.</li>
<li id="fn-7">EuGH, Urteil vom 01.07.2015, C-461/13 („Weser“), insbesondere Rn. 29–43 und 48–51.</li>
<li id="fn-8">Green Legal Impact Germany e. V., „Rechte der Spree – Gesetzentwurf und Begleittext“, 2025.</li>
<li id="fn-9">GLI-Entwurf, § 1, S. 3; Begleittext S. 15 ff.</li>
<li id="fn-10">GLI-Entwurf, § 2 und zugehöriger Begleittext.</li>
<li id="fn-11">GLI-Entwurf, insbesondere §§ 7, 9 und 10.</li>
<li id="fn-12">GLI-Entwurf, §§ 11–13, S. 8–9; Begleittext S. 21.</li>
<li id="fn-13">GLI-Entwurf, § 15, S. 9–10; Begleittext S. 21–22.</li>
<li id="fn-14">§ 2 Abs. 1 UmwRG.</li>
<li id="fn-15">§ 1 Abs. 1 UmwRG.</li>
<li id="fn-16">GLI-Entwurf, § 14, S. 9.</li>
</ol>
<h3 className="sreTransparencyHeading">Transparenz- und Lizenzhinweis</h3>
<p className="sreTransparencyText">Struktur und Teile der Formulierung dieses Textes wurden mithilfe von KI (GPT, OpenAI) entwickelt. Inhaltliche Verantwortung: Hans Leo Bader.</p>
<p className="sreTransparencyText">Dieser Beitrag einschließlich des begleitenden KI-generierten Bildes steht unter der Lizenz Creative Commons Namensnennung – Nicht kommerziell – Weitergabe unter gleichen Bedingungen 4.0 International (CC BY-NC-SA 4.0).</p>
<p className="sreTransparencyText">Bild (sofern enthalten): In Kooperation mit KI – generiert mit ChatGPT Images (OpenAI) – Lizenz: CC BY-NC-SA 4.0.</p>
</article>
<footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Aktuelles</small></div></div></footer>
</main>
}