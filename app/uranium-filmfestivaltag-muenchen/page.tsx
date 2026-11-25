import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import styles from "./festival.module.css";
export const metadata: Metadata={title:"Uranium Filmfestivaltag München 2027 – Entwurf",description:"Konzeptentwurf: Filme, Gespräche und Wanderausstellung zu atomaren Risiken und Rechten der Natur.",robots:{index:false,follow:false}};
const filmUrl="https://uraniumfilmfestival.org/de/film/quebec-2015-berlin-2014-passau-2014-rio-2014/final-picture";
export default function UraniumFestival(){return <main className={styles.festival}>
<SiteHeader claimLead="Gib der Natur Recht." claimTrail="Eine Kampagne für die Mitwelt." />
<div className={styles.draft}>INTERNER GESTALTUNGSENTWURF · NICHT FREIGEGEBEN · TERMIN UND ORT OFFEN</div>
<div className={styles.festivalBrandBar}>
<a className={styles.festivalBrand} href="https://uraniumfilmfestival.org/de" target="_blank" rel="noopener noreferrer">
<img src="/uranium-filmfestivaltag/uranium-in-moviement-logo.jpeg" width={400} height={280} alt="Uranium in MOVIEMENT – Logo des International Uranium Film Festivals"/>
<span>International<br/>Uranium Film Festival</span>
</a>
</div>
<section className={styles.hero} aria-labelledby="festival-title">
<img className={styles.heroImage} src="/uranium-filmfestivaltag/uranium-hero-ki-platzhalter.png" alt="" aria-hidden="true"/>
<div className={styles.heroContent}><p className={styles.placeholder}>KI-GENERIERTES PLATZHALTERBILD · KEIN OFFIZIELLES FESTIVALMOTIV</p><h1 id="festival-title">Uranium<br/>Filmfestivaltag<br/><span>München 2027</span></h1><p>Film · Gespräch · Ausstellung</p><p className={styles.sub}>Uranium · Atomrisiken · Rechte der Natur</p></div>
</section>
<div className={styles.content}><section className={styles.film} aria-label="Film im Programmvorschlag">
<div className={styles.filmVisual}><span className={styles.filmPlaceholder}>KI-GENERIERTES PLATZHALTERBILD · KEIN OFFIZIELLES FILMPLAKAT</span><img src="/uranium-filmfestivaltag/final-picture-ki-platzhalter.png" alt="Symbolische Illustration eines Bunkergangs, kein offizielles Filmbild"/><strong>FINAL<br/>PICTURE</strong></div>
<div className={styles.filmCopy}><span className={styles.pill}>Geplanter Film</span><h2>Final Picture</h2><p>Deutschland · 2013 · 92 Minuten<br/>Regie: Michael von Hohenberg</p><p>Ein globaler Atomkrieg hat die Welt verändert. In Bunkeranlagen versuchen Menschen zu überleben. Der Spielfilm erzählt vom Leben und Sterben nach einer nuklearen Katastrophe.</p><div className={styles.award}><strong>Auszeichnung:</strong> Ausgezeichnet mit dem IUFF-Award 2014 (laut Festivalangaben).</div><p className={styles.small}>Das dargestellte Bild ist ein KI-generierter Platzhalter und kein offizielles Filmplakat. Vorführung, Rechte und Gäste sind nicht bestätigt.</p><a href={filmUrl} target="_blank" rel="noopener noreferrer">Infos zum Film ↗</a></div>
</section></div>
<section className={styles.topics} aria-label="Themenbereiche">
<article className={styles.topic}><span className={styles.icon} aria-hidden="true">♧</span><div><h3>Film und Gespräch</h3><p>Überleben allein genügt nicht. Welche Verantwortung tragen wir für die Lebensgrundlagen künftiger Generationen?</p></div></article>
<article className={styles.topic}><span className={styles.icon} aria-hidden="true">⚖</span><div><h3>Rechte der Natur</h3><p>Wie können die Rechte der Natur zu einer langfristig ausgerichteten Vorsorge und Rechtsordnung beitragen? Nicht bloß als Klageinstrument.</p></div></article>
<article className={styles.topic}><span className={styles.icon} aria-hidden="true">▧</span><div><h3>Wanderausstellung</h3><p>Begleitend ist die Wanderausstellung „Rechte der Natur“ angedacht – mit Beispielen, Hintergründen und globalen Impulsen.</p></div></article>
</section>
<section className={styles.details}><h2>Film. Wissen. Diskussion. Verantwortung.</h2><p>Das International Uranium Film Festival war bereits 2013 in München zu Gast. Für 2027 ist ein eintägiges Format mit zwei bis drei Filmen, Gesprächen und einer Ausstellung im Gespräch. Ein Kino oder eine geeignete ehemalige Bunkeranlage kommen als mögliche Orte infrage.</p><p className={styles.note}>Konzeptstand: Termin, Spielstätte, Veranstalter, Kooperationszusagen, Aufführungs- und Markenrechte sowie Finanzierung sind offen. Keine offizielle Veranstaltungsankündigung, keine Anmeldung und kein Ticketverkauf.</p><p><a href="https://uraniumfilmfestival.org/de" target="_blank" rel="noopener noreferrer">International Uranium Film Festival ↗</a></p><p className={styles.credit}>Die beiden Illustrationen sind KI-generierte Platzhalter und keine offiziellen Festival- oder Filmabbildungen. Das Logo „Uranium in MOVIEMENT“ ist das bereitgestellte Festivallogo und kein KI-generiertes Bild. Entwurf in Kooperation mit KI (GPT, OpenAI). Inhaltliche Verantwortung: Hans Leo Bader. CC BY-NC-SA 4.0 für eigene Texte und Grafiken; das Festivallogo und sonstige Inhalte Dritter sind davon ausgenommen. Rechte Dritter bleiben unberührt.</p></section>
<section className={styles.series} aria-labelledby="series-title" id="mehrtaegige-reihe">
<div className={styles.seriesInner}>
<p className={styles.seriesLabel}>WEITERFÜHRENDE KONZEPTOPTION · ZUR ABSTIMMUNG</p>
<h2 id="series-title">Mitwelt über unsere Lebenszeit hinaus</h2>
<p className={styles.seriesLead}>Drei Filmabende, Gespräche und eine Ausstellungswoche: eine mögliche Erweiterung des oben skizzierten Filmfestivaltags München 2027.</p>
<blockquote>Welche Verantwortung tragen wir für eine lebendige Mitwelt, wenn die Folgen unserer Entscheidungen über unsere eigene Lebenszeit hinausreichen?</blockquote>
<p>Die Filme eröffnen unterschiedliche Perspektiven: eine Zukunftserzählung über atomare Folgen, reale Hinterlassenschaften des Uranabbaus und die Beziehung zu einem lebendigen Fluss. Die Ausstellung vermittelt Zusammenhänge. In den Gesprächen geht es um Eigenwert, Verantwortung und Rechte der Natur.</p>
<p className={styles.seriesStatus}>Diese Erweiterung ist ein Vorschlag, kein beschlossenes Programm. Eine gemeinsame Benennung und Zusammenarbeit bedürfen der Abstimmung mit dem IUFF; dessen Eigenständigkeit bleibt gewahrt. Termin, Veranstalter, Spielstätten, Finanzierung, Filmrechte und Mitwirkung der genannten Einrichtungen sind noch zu klären.</p>
<h3>Drei Filme – drei Zugänge</h3>
<div className={styles.seriesFilms}>
<article><p className={styles.seriesNumber}>ABEND 1 · LANGZEITFOLGEN</p><h4>Final Picture</h4><p className={styles.seriesMeta}>Michael von Hohenberg · 92 Min. · Deutsch</p><p>Der Spielfilm über Menschen in Schutzräumen nach einem Atomkrieg bildet den Ausgangspunkt. Ein anschließendes Filmgespräch, möglichst mit dem Regisseur, eröffnet Fragen nach Entscheidungen und ihrer langfristigen Tragweite.</p><a href="https://uraniumfilmfestival.org/de/node/2144" target="_blank" rel="noopener noreferrer">Filmangaben beim IUFF ↗</a></article>
<article><p className={styles.seriesNumber}>ABEND 2 · HINTERLASSENSCHAFTEN</p><h4>Yellow Cake</h4><p className={styles.seriesMeta}>Joachim Tschirner · deutsche Kurzfassung · 35 Min.</p><p>Uranabbau und seine Hinterlassenschaften rücken ins Zentrum. Die kurze Fassung lässt Raum für ein Fachgespräch über Wasser, Böden, Sanierung und die Verantwortung für betroffene Lebensräume.</p><a href="https://uraniumfilmfestival.org/de/film/quebec-2015-berlin-2014-passau-2014-rio-2014-new-york-2014-washington-2014-albuquerque-2013" target="_blank" rel="noopener noreferrer">Infos zur Kurzfassung ↗</a></article>
<article><p className={styles.seriesNumber}>ABEND 3 · BEZIEHUNGEN</p><h4>I Am the River,<br/>the River Is Me</h4><p className={styles.seriesMeta}>Petr Lom · 88 Min. · Englisch/Māori, deutsche Untertitel</p><p>Eine Reise auf dem Whanganui führt zu Beziehungen zwischen Menschen und Fluss. Māori-Perspektiven werden in ihrem eigenen historischen und kulturellen Kontext betrachtet; eine Übertragung auf Deutschland ist keine Selbstverständlichkeit.</p><a href="https://mindjazz-pictures.de/filme/i-am-the-river-the-river-is-me/" target="_blank" rel="noopener noreferrer">Infos beim Verleih ↗</a></article>
</div>
<p className={styles.seriesSmall}>Filme und Fassungen sind Auswahlvorschläge. Lieferkopien und Aufführungsumfang bleiben zu bestätigen. „Invisible Hand“ ist eine mögliche spätere Vertiefung; Sprachfassung und Eignung sind noch offen.</p>
<h3>Zwei mögliche Formate</h3>
<div className={styles.seriesTableWrap}><table className={styles.seriesTable}><caption>Formatvergleich für die weitere Abstimmung</caption><thead><tr><th scope="col">Format</th><th scope="col">Ablauf</th><th scope="col">Voraussetzung</th></tr></thead><tbody><tr><th scope="row">A · Kompaktes Wochenende</th><td>Freitagabend und Samstag: drei Filme, Gespräche und begleitende Ausstellung.</td><td>Gebündelte Betreuung; das Publikum muss sich auf einen längeren Samstag einlassen können.</td></tr><tr><th scope="row">B · Drei Abende in einer Ausstellungswoche</th><td>Zum Beispiel Montag, Mittwoch und Freitag; die Ausstellung ist auch an den übrigen Tagen zugänglich.</td><td>Verlässliche Öffnungszeiten, Betreuung und drei finanzierbare Vorführfenster.</td></tr></tbody></table></div>
<p><strong>Vorläufige Empfehlung: Format B.</strong> Einzelne Abende bleiben zugänglich, während die Ausstellung einen eigenen Besuchsanlass bietet. Fehlt eine tragfähige Betreuung über die Woche, ist das Wochenende die Rückfalloption. Mehr Veranstaltungstage bedeuten nicht automatisch mehr Wirkung.</p>
<details className={styles.seriesSchedule}><summary>Beispielablauf für drei Filmabende</summary><p>Planungsbeispiel ohne festgelegte Termine: vor jedem Abend ab 18 Uhr Ausstellung und Rundgang, 18.30–18.40 Uhr Einführung. Die folgenden Filmzeiten schließen den Abspann ein.</p><ul><li><strong>Final Picture:</strong> 18.40–20.12 Uhr Film, Pause bis 20.25 Uhr, Gespräch bis 21.10 Uhr.</li><li><strong>Yellow Cake:</strong> 18.40–19.15 Uhr Film, Pause bis 19.30 Uhr, Fachgespräch bis 20.30 Uhr.</li><li><strong>I Am the River:</strong> 18.40–20.08 Uhr Film, Pause bis 20.25 Uhr, Gespräch und Abschluss bis 21.15 Uhr.</li></ul></details>
<div className={styles.seriesContext}>
<article><h3>Die Ausstellung als verbindender Raum</h3><p>Die Wanderausstellung Rechte der Natur soll unabhängig vom Kinobesuch zugänglich sein. Kurze Rundgänge und ein möglicher lokaler Bezug zu Isar oder Stadtbäumen verbinden die Filme mit Fragen vor Ort. Ausleihe, Flächenbedarf, Transport und Vermittlung sind mit dem Ausstellungspartner zu klären.</p></article>
<article><h3>Gespräche mit journalistischer Einordnung</h3><p>TELI könnte an Leitfragen, Moderation und wissenschaftlicher Einordnung mitwirken. Das ist eine vorgeschlagene Rolle; eine Partnerschaft oder Berichterstattung ist nicht zugesagt. Bevorzugt wird ein Kino mit geeigneter Ausstellungsfläche oder einem nahe gelegenen Ausstellungsort.</p></article>
</div>
<h3>Historisches Netzwerk als Ausgangspunkt</h3>
<p>Der Projektbericht von 2013 nennt ein breites Netzwerk in Deutschland und Brasilien. Daran könnte die weitere Planung anknüpfen – über Kino- und Filmvermittlung, Fachgespräche, Kultur- und Bildungskooperationen sowie gezielte Publikumsansprache. Die Liste dokumentiert damalige Beziehungen; sie ist keine Unterstützerliste für 2027.</p>
<details className={styles.seriesSchedule}><summary>Alle im Projektbericht genannten Partner und Förderer</summary>
<p><strong>Deutschland · historische Nennungen:</strong></p>
<ul>
<li>Nuclear-Free Future Award; DENKmal-Film Verhaag GmbH.</li>
<li>Heinrich-Böll-Stiftung; Stiftung Neue Energie / GLS Treuhand e.V.; Petra-Kelly-Stiftung; Kulturreferat der Stadt München; Bildungswerk – Katholische Arbeiterbewegung.</li>
<li>ICBUW Deutschland / Anti-Uranwaffen-Koalition; Umweltinstitut München; BUND Naturschutz in Bayern; WECF – Women in Europe for a Common Future.</li>
<li>Deutsch-Brasilianischer Kulturverein e.V.; Istituto Italiano di Cultura.</li>
<li>Globalmagazin; Nachhaltig Leben.</li>
</ul>
<p><strong>Brasilien · historischer internationaler Zusammenhang:</strong> Museu de Arte Moderna do Rio de Janeiro (MAM Rio); Fundação de Apoio à Escola Técnica do Estado do Rio de Janeiro (FAETEC), Escola Técnica Estadual Adolpho Bloch; Fundação Heinrich Boell Brasil; Armazém São Thiago; Cachaça Magnífica; Bar do Mineiro.</p>
<p className={styles.seriesSmall}>Quelle: <a href="https://uraniumfilmfestival.org/files/2013_muenchen_abschlussbericht.pdf" target="_blank" rel="noopener noreferrer">IUFF-Projektbericht München 2013, Seite 7 ↗</a>. Der Bericht unterscheidet die damaligen Einzelleistungen nicht. Heutige Zuständigkeiten, Interesse und Beiträge sind vor einer Ansprache zu klären; eine Beteiligung 2027 ist nicht zugesagt.</p>
</details>
<p>Rio Filmpalast und Werkstattkino sind historische Spielstätten und damit mögliche Anknüpfungspunkte für die Standortsuche. Claus Biegert könnte als Gesprächs- oder Moderationspartner einbezogen werden. Für keine dieser Optionen liegt im Konzept eine aktuelle Zusage vor.</p>
<p>Ein Beginn am Nachmittag und ein anschließender Austausch mit Filmschaffenden sind weitere Ideen. Eine Terminierung während des Oktoberfests bleibt gegen Kosten, Verfügbarkeit und Terminkonkurrenz abzuwägen. In der Kommunikation sollen neben Fachredaktionen auch Kultur und Feuilleton gezielt angesprochen werden; historische Berichte sind keine heutige Reichweitenzusage.</p>
<p>Die Gespräche berücksichtigen die Leistungen des bestehenden Schutzrechts. Sie fragen zugleich, welche zusätzlichen Funktionen Rechte der Natur für Eigenwert, Integrität und Beziehungen natürlicher Systeme erfüllen könnten. Rechte der Natur werden weder auf Rechtspersönlichkeit noch auf ein Klageinstrument reduziert; eine automatische Verhinderung von Schäden wird nicht unterstellt.</p>
<p className={styles.seriesSmall}>Nächster Schritt ist die Abstimmung von Format und Rollen. Vor verbindlicher Planung müssen Trägerschaft, Budgetverantwortung, Finanzierung, Ausstellungsverfügbarkeit und Aufführungsrechte geklärt werden.</p>
</div>
</section>
</main>}
