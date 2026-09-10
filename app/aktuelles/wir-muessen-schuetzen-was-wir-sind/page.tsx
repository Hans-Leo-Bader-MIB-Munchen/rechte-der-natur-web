import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import BrandMark from "../../components/BrandMark";
import "./article.css";

export const metadata: Metadata = {
  title: "Wir müssen schützen, was wir sind | Rechte der Natur",
  description:
    "Was zwei Tage Zukunftswerkstatt Biodiversität über Lebensvielfalt, institutionelle Fragmentierung und neue politische Veränderungspfade zeigen.",
};

const sources = [
  ["Q1", "Convention on Biological Diversity, Article 2 – Use of Terms", "https://www.cbd.int/convention/articles?a=cbd-02"],
  ["Q2", "Kunming-Montreal Global Biodiversity Framework, Target 14", "https://www.cbd.int/gbf/targets/14"],
  ["Q3", "Runhaar et al. (2024): Mainstreaming biodiversity targets into sectoral policies and plans", "https://doi.org/10.1016/j.esg.2024.100209"],
  ["Q4", "Pröbstl et al. (2023): Biodiversity policy integration in five policy sectors in Germany", "https://doi.org/10.1016/j.esg.2023.100175"],
  ["Q5", "Richtlinie 2014/52/EU zur Änderung der UVP-Richtlinie", "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32014L0052"],
  ["Q6", "Oxford English Dictionary, nature – Etymology", "https://doi.org/10.1093/OED/9458925751"],
  ["Q7", "Buisel (2024): Polisemia de natura en el pensamiento latino", "https://www.memoria.fahce.unlp.edu.ar/libros/pm.6476/pm.6476.pdf"],
  ["Q8", "Allen and Greenough’s New Latin Grammar – Future Participle", "https://dcc.dickinson.edu/grammar/latin/future-participle"],
  ["Q9", "§ 4 Geothermie-Beschleunigungsgesetz", "https://www.gesetze-im-internet.de/geobg/__4.html"],
  ["Q10", "Grundgesetz, Art. 20a", "https://www.gesetze-im-internet.de/gg/art_20a.html"],
  ["Q10b", "Wissenschaftliche Dienste des Deutschen Bundestages, WD 8-3000-089/21", "https://www.bundestag.de/resource/blob/876916/WD-8-089-21-pdf.pdf"],
  ["Q11", "Verfassung des Freistaates Bayern, Art. 141", "https://www.gesetze-bayern.de/Content/Document/BayVerf-141"],
  ["Q12", "Leibniz-Forschungsnetzwerk Biodiversität: Zukunftswerkstatt Biodiversität", "https://www.leibniz-biodiversitaet.de/mainnavigation/aktuelles/zukunftswerkstatt-biodiversitaet"],
] as const;

export default function Article() {
  return (
    <main className="workshopArticlePage">
      <SiteHeader section="Aktuelles" claimLead="Was sich bewegt." claimTrail="Geprüft. Eingeordnet. In Bewegung." />

      <article className="workshopArticle">
        <header className="articleHero">
          <div className="articleKicker">Zukunftswerkstatt Biodiversität · Arche Warder · 7.–8. September 2026</div>
          <h1>Wir müssen schützen, was wir sind</h1>
          <p className="articleLead">Biodiversität ist Lebensvielfalt. Doch unsere Institutionen bearbeiten das Lebendige häufig in getrennten Zuständigkeiten, Verfahren und Einzelentscheidungen. Zwei Tage in einer Zukunftswerkstatt führen deshalb zu einer grundsätzlicheren Frage: Reicht es, mehr zu schützen – oder müssen wir auch die Strukturen verändern, mit denen wir über das Lebendige entscheiden?</p>
          <div className="articleMeta"><span>Hans Leo Bader</span><span>10.09.2026</span><span>Arbeitsfassung · Preview</span></div>
        </header>

        <figure className="articleFigure">
          <img src="/images/archeprojektarl.jpg" alt="Projektposter der Arbeitsgruppe zur 16-Länder-Initiative bei der Zukunftswerkstatt Biodiversität in der Arche Warder" />
          <figcaption>Arbeitsstand der Zukunftswerkstatt Biodiversität: Aus dem bayerischen Ansatz zu Rechten der Natur entstand der Entwurf für einen länderübergreifenden politischen und verfassungsrechtlichen Veränderungspfad. Foto: Hans Leo Bader.</figcaption>
        </figure>

        <div className="articleBody">
          <p>Vor einiger Zeit habe ich einen Satz geschrieben:</p>
          <blockquote>„Du hast kein Leben. Du bist Leben.“</blockquote>
          <p>Wir sprechen davon, dass wir ein Leben „haben“. Schon diese Formulierung legt sprachlich eine Besitzbeziehung nahe. Auch „Natur“ erscheint in vielen politischen und rechtlichen Zusammenhängen als ein Gegenstandsbereich, der genutzt, verändert, geschützt oder kompensiert wird.</p>
          <p>Biologisch stehen wir dem Lebendigen jedoch nicht gegenüber. Wir gehören dazu.</p>
          <p>Biodiversität lässt sich zunächst als Vielfalt des Lebens zurückübersetzen. Die Konvention über die biologische Vielfalt definiert „biological diversity“ als Variabilität unter lebenden Organismen und umfasst ausdrücklich Vielfalt innerhalb von Arten, zwischen Arten und von Ökosystemen. Damit geraten auch Beziehungen und ökologische Zusammenhänge in den Blick. <a href="#quellen">[Q1]</a></p>
          <p className="articleEmphasis">Wir müssen schützen, was wir sind.</p>

          <h2>Natur: Geburt, Hervorgehen – und eine Spur des Werdens</h2>
          <p>Auch das Wort „Natur“ lohnt einen zweiten Blick. Das lateinische <em>nātūra</em> ist sprachgeschichtlich mit <em>nāscī</em> – geboren werden, entstehen – verbunden. Die etymologische Analyse führt <em>nātūra</em> auf den Partizipialstamm <em>nāt-</em> von <em>nāscī</em> plus das Suffix <em>-ūra</em> zurück; zu den frühen Bedeutungen gehört „Geburt“. <a href="#quellen">[Q6]</a></p>
          <p>Bildungen auf <em>-ūra</em> können aus Partizipialstämmen Nomina bilden, die Handlung, Tätigkeit oder Vorgang bezeichnen. Eine philologische Traditionslinie diskutiert bei <em>-tūra</em> darüber hinaus eine mögliche Beziehung zum Partizip Futur Aktiv auf <em>-tūrus, -a, -um</em> und damit eine auf das Kommende gerichtete Dimension. <a href="#quellen">[Q7–Q8]</a></p>
          <p>Das ist keine schlichte Wörterbuchgleichung. Aus <em>nātūra</em> folgt nicht wörtlich: „das, was im Begriff ist, geboren zu werden“. Die prozessuale Lesart ist eine philologisch begründbare Deutung, keine lexikalische Gleichsetzung. Für den Gedanken dieses Artikels reicht der belastbare Kern: Im Wort „Natur“ steckt sprachgeschichtlich nicht nur die Vorstellung eines vorhandenen Bestands, sondern Geburt, Hervorgehen und Tätigkeit. Natur lässt sich deshalb interpretativ als etwas lesen, das entsteht und wird.</p>

          <h2>Zwei Tage zwischen Einzelmaßnahmen und Strukturen</h2>
          <p>Am 7. und 8. September fand in der Arche Warder in Schleswig-Holstein eine Zukunftswerkstatt Biodiversität statt. Sie war nicht darauf angelegt, eine fertige Antwort vorzugeben. Unterschiedliche Erfahrungen, Probleme und Lösungsansätze sollten sichtbar und weiterentwickelt werden.</p>
          <p>Aus dem dokumentierten Material lässt sich keine einzelne, von allen gemeinsam beschlossene Schlussbotschaft ableiten. Die Karten, Gruppenarbeiten und Projektideen dürfen deshalb nicht nachträglich zu einem einheitlichen Werkstattkonsens verdichtet werden.</p>
          <p>In einer Arbeitsgruppe entstand am ersten Tag jedoch ein gemeinsam formulierter Satz:</p>
          <blockquote>„Politische und institutionelle Entscheidungsstrukturen fördern Einzelmaßnahmen, kurzfristiges und noninklusives sektorales Denken, statt eine gemeinsame langfristige Vision zu verfolgen und Biodiversität systemisch zu steuern.“</blockquote>
          <p>Das ist das Ergebnis dieser Arbeitsgruppe – nicht automatisch das Ergebnis der gesamten Zukunftswerkstatt. In der Zusammenschau führt das dokumentierte Material für mich dennoch zu einer Frage:</p>
          <p className="articleQuestion">Was passiert zwischen unseren Einzelentscheidungen?</p>

          <h2>Die Integrationsfrage ist nicht neu</h2>
          <p>Die internationale Biodiversitätspolitik fordert ausdrücklich, biologische Vielfalt über unterschiedliche Regierungsebenen und Sektoren hinweg in Politik, Regulierung, Planung, Umweltprüfungen und wirtschaftliche Entscheidungen zu integrieren. Target 14 des Kunming-Montreal Global Biodiversity Framework verlangt genau diese Integration. <a href="#quellen">[Q2]</a></p>
          <p>Auch wissenschaftliche Arbeiten beschreiben weiterhin Schwierigkeiten sektorübergreifender Biodiversitätsintegration. Eine systematische Auswertung von 43 internationalen empirischen Studien kam 2024 zu dem Ergebnis, dass die erreichten Integrationsniveaus insgesamt niedrig sind; eine Deutschland-Studie über fünf Politiksektoren hebt inklusive, integrierte, verantwortliche und adaptive Governance als zentrale Hebelpunkte hervor. <a href="#quellen">[Q3–Q4]</a></p>
          <p>Biodiversitätsrelevante Entscheidungen verteilen sich auf unterschiedliche Rechtsgebiete, Behörden, politische Ressorts, Förderinstrumente und Fachdisziplinen. Institutionen arbeiten notwendigerweise mit Differenzierung. Daraus folgt aber nicht, dass die Verbindungen zwischen diesen Teilentscheidungen immer stark genug sind.</p>
          <p className="articleQuestion">Wann wird notwendige Differenzierung zu Fragmentierung?</p>

          <h2>Wenn Zuständigkeiten enden, aber Wirkungen weitergehen</h2>
          <p>Lebendige Systeme halten sich nicht an administrative oder rechtliche Zuständigkeitsgrenzen. Wasser, Boden, Arten, Nährstoffkreisläufe, Klima und menschliche Nutzungen wirken miteinander. Veränderungen können zeitverzögert sichtbar werden. Mehrere Eingriffe können gemeinsam Wirkungen entfalten, die sich aus der Betrachtung des einzelnen Vorgangs allein nicht vollständig erschließen.</p>
          <p>Kumulative Wirkungen sind dem geltenden Umweltprüfungsrecht keineswegs fremd. Die EU-UVP-Richtlinie verlangt ausdrücklich ihre Berücksichtigung. Die hier formulierte Kritik ist enger: Ob langfristige, räumlich und zeitlich verteilte Entwicklungen eines Lebensraums über viele Einzelentscheidungen hinweg institutionell ausreichend gekoppelt, beobachtet und nachgesteuert werden, ist eine andere Frage. <a href="#quellen">[Q5]</a></p>
          <div className="thesisBox"><span>Arbeitsthese</span><p>Problematisch wird Differenzierung dort, wo die Verbindungen zwischen den Teilentscheidungen zu schwach werden, um Wechselwirkungen, kumulative Folgen und die langfristige Entwicklung eines Lebensraums noch ausreichend zu erfassen und gegebenenfalls darauf zu reagieren.</p></div>

          <h2>Am zweiten Tag: unterschiedliche Pfade</h2>
          <p>Am zweiten Tag ging es um konkrete Lösungswege. Die bislang fotografisch gesicherten Gruppen landeten nicht bei demselben Instrument. Ein Ansatz entwickelte einen regionalen „Resilience Score“, der ökologische, landschaftliche, kulturelle und wirtschaftliche Dimensionen verbinden und iterativ in Modellregionen erprobt werden sollte.</p>
          <p>Eine zweite Gruppe entwickelte die „Biodiversitäts-Botschaft Brunsbüttel“: Sichtbarkeit herstellen, Gelingen kommunizieren und erfolgreiche Ansätze transferierbar machen. Eine weitere Gruppe arbeitete an einer „Modellschule/Landschaft Neumünster“, in der Wissen, Wahrnehmung, Emotion und eigenes Handeln miteinander verbunden werden sollten.</p>
          <p>Unsere eigene Gruppe entwickelte einen politischen und rechtlichen Veränderungspfad. Ein Ausgangsimpuls kam am ersten Tag aus einer anderen Arbeitsgruppe. In der weiteren Bearbeitung wurde dieser mit dem bayerischen Ansatz zu Rechten der Natur und der von mir eingebrachten Perspektive einer Initiative über alle 16 Bundesländer verbunden und von der Gruppe gemeinsam weiterentwickelt.</p>
          <p>Der Projektpfad umfasste: Akteure finden, Bündnis aufbauen, Öffentlichkeit herstellen, Unterstützer gewinnen, Finanzierung organisieren, Unterschriften sammeln, landesspezifische Volksbegehren beziehungsweise Verfassungsinitiativen vorbereiten und daraus schrittweise ein überregionales Bündnis entwickeln.</p>
          <div className="fundingBox"><span>Vom Entwurf zum Projekt</span><p>Dass die Werkstatt nicht bei Ideen stehen bleiben sollte, war Teil ihres Konzepts: Priorisierte Maßnahmen sollten anschließend in gemeinsamen Projekten weiterverfolgt werden. Für demokratisch ausgewählte Projektideen stand ein Gesamtbudget von 16.000 Euro als Anschubfinanzierung bereit. Unser 16-Länder-Pfad gehörte zu den fünf ausgewählten Projekten. <a href="#quellen">[Q12]</a></p></div>
          <p>In der Gruppe war der bayerische Ansatz zu Rechten der Natur als materieller Referenzkern vereinbart. Der nächste Schritt besteht deshalb nicht in der Wahl zwischen grundsätzlich verschiedenen Rechtsmodellen, sondern in der landesspezifischen Übertragung auf die Verfassungsebene. Begriffe wie „überragendes öffentliches Interesse“, Verfassungsrang und Rechtssubjektivität bleiben dabei juristisch auseinanderzuhalten. <a href="#quellen">[Q9–Q11]</a></p>

          <h2>Öffentlichkeit ist nicht nur Begleitkommunikation</h2>
          <p>Bei der Arbeitsphase kam ein Hinweis der Moderation hinzu: „Bei euch braucht es Öffentlichkeit.“ Der Satz traf einen Punkt, den ich aus dem bisherigen bayerischen Prozess sehr konkret kenne. Öffentliche Kommunikation, Vernetzung und politische Anschlussfähigkeit waren keine bloßen Begleiterscheinungen. Für unseren Projektpfad bedeutet das: Öffentlichkeit gehört zur Umsetzung selbst.</p>
          <p className="processLine">Initiative und Bündnis → Öffentlichkeit → Unterstützer und Netzwerke → Finanzierung → Unterschriften → Volksbegehren → politische und verfassungsrechtliche Weiterentwicklung.</p>

          <h2>Kein Universalrezept</h2>
          <p>Wenn man die bislang gesicherten Tag-2-Projekte nebeneinanderlegt, entsteht kein einheitliches Modell. Der Resilience-Score setzt bei Bewertung, Beteiligung und iterativem Lernen an. Brunsbüttel setzt bei Sichtbarkeit, Kommunikation und Transfer an. Die Modellschule Neumünster setzt bei Wahrnehmung, Wissen, Emotion und Handlungsfähigkeit an. Unser 16-Länder-Pfad setzt bei Öffentlichkeit, politischer Mobilisierung, Recht und institutioneller Veränderung an.</p>
          <p>Eine weitere Gruppe ist in meinem Fotobestand nicht dokumentiert. Da hierfür kein belastbarer eigener Primärbeleg vorliegt, werden ihre Ergebnisse nicht rekonstruiert. Die Lücke bleibt bewusst sichtbar.</p>
          <p>Aus den vorhandenen Gruppen lässt sich dennoch eine vorsichtige Beobachtung ableiten – ausdrücklich als nachgelagerte Analyse, nicht als gemeinsamer Werkstattbeschluss: Die Lösungen liegen auf unterschiedlichen Ebenen. Ihre mögliche Gemeinsamkeit besteht nicht in demselben Instrument, sondern darin, dass sie jeweils Verbindungen herstellen.</p>

          <h2>Haben wir unsere Vorstellung von Trennung institutionalisiert?</h2>
          <p>Hier endet das, was sich aus den bislang ausgewerteten Werkstattmaterialien unmittelbar dokumentieren lässt. Hier beginnt meine eigene Frage.</p>
          <p>Vielleicht haben wir die Trennung von Mensch und Natur nicht nur gedacht. Vielleicht haben wir sie teilweise institutionell organisiert: in Ressorts, Zuständigkeiten, Förderlogiken, zeitlich begrenzten Programmen und Verfahren, die einzelne Eingriffe prüfen, während langfristige Entwicklungen über zahlreiche Entscheidungen hinweg schwerer zusammenzuführen sein können.</p>
          <p>Diese These ist kein Ergebnis der Zukunftswerkstatt. Sie wäre als alleinige Erklärung für die Probleme des Biodiversitätsschutzes auch zu einfach. Politische Zielkonflikte, begrenzte Ressourcen, Wissensunsicherheit, Kompetenzverteilung, Vollzugsprobleme und unterschiedliche gesellschaftliche Interessen bleiben ebenso relevant.</p>
          <p className="articleQuestion">Was geschieht, wenn hochgradig vernetzte lebendige Systeme auf Institutionen treffen, deren Arbeitsweise auf abgegrenzten Zuständigkeiten und Einzelentscheidungen beruht?</p>

          <h2>Wir müssen schützen, was wir sind</h2>
          <p>Biodiversität lässt sich institutionell als Politikfeld organisieren. Ökologisch lässt sie sich darauf nicht begrenzen. Die entscheidende Frage lautet deshalb nicht, ob wir Zuständigkeiten, Fachgebiete und Einzelentscheidungen abschaffen sollten. Die Frage ist, wie verhindert werden kann, dass notwendige Differenzierung zur Fragmentierung wird.</p>
          <p>Eine mögliche Richtung liegt in Strukturen, die Informationen über Zusammenhänge, kumulative Wirkungen und langfristige Entwicklungen zusammenführen; die beobachten, ob sich ein Lebensraum tatsächlich in die gewünschte Richtung entwickelt; und die bei Abweichungen Möglichkeiten zur Nachsteuerung eröffnen.</p>
          <p>Damit verschiebt sich die Leitfrage des Artikels.</p>
          <p className="articleEmphasis">Nicht: Welche einzelne Maßnahme fehlt noch?<br />Sondern: Welche Verbindungen fehlen zwischen den Funktionen, die Lebensvielfalt schützen sollen?</p>
          <p>Denn wir stehen dem Leben, das wir schützen wollen, nicht gegenüber. Wir sind ein Teil davon.</p>
          <p>Und vielleicht müssen wir deshalb nicht nur lernen, Biodiversität besser zu schützen. Wir müssen lernen, Institutionen und gesellschaftliche Prozesse so zu verbinden, dass die Zusammenhänge des Lebens nicht an unseren Zuständigkeits-, Wissens- und Entscheidungsgrenzen verloren gehen.</p>
        </div>

        <section className="articleSources" id="quellen">
          <p className="sectionLabel">Quellen</p>
          <h2>Belege und weiterführende Quellen</h2>
          <div className="sourceList">{sources.map(([id,title,href]) => <a key={id} href={href} target="_blank" rel="noreferrer"><strong>{id}</strong><span>{title}</span><i>↗</i></a>)}</div>
        </section>

        <section className="articleLicense">
          <p><strong>Lizenzhinweis:</strong> Dieser Beitrag einschließlich des begleitenden Bildes steht unter der Lizenz Creative Commons Namensnennung – Nicht kommerziell 4.0 International (CC BY-NC-SA 4.0).</p>
          <p>Struktur und Teile der Formulierung dieses Textes wurden mithilfe von KI (GPT, OpenAI) entwickelt. Inhaltliche Verantwortung: Hans Leo Bader. (CC BY-NC-SA 4.0)</p>
          <p>Foto: Hans Leo Bader – Lizenz: CC BY-NC-SA 4.0</p>
        </section>

        <nav className="articleBack"><Link href="/aktuelles">← Zurück zu Aktuelles</Link></nav>
      </article>

      <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Aktuelles</small></div></div><p>Aktuelle Entwicklungen für Rechte der Natur und die Volksbegehren.</p><span>Entwurf · Preview</span></footer>
    </main>
  );
}
