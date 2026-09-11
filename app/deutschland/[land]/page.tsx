import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { landesEntwurfNachSlug, landesEntwuerfe } from "../land-entwuerfe";
import styles from "./page.module.css";

export function generateStaticParams() {
  return landesEntwuerfe.map((item) => ({ land: item.slug }));
}

function oeffentlicherAnsatz(architektur: string) {
  if (architektur.startsWith("Relationale")) {
    return "Der Vorschlag knüpft an eine bestehende Freiheitsregel der Landesverfassung an und ergänzt dort ausdrücklich die Rechte der natürlichen Mitwelt.";
  }
  return "Der Vorschlag schafft eine eigenständige Verfassungsbestimmung, die der natürlichen Mitwelt eigene Rechte zuspricht.";
}

const verfahrenswegNachLand: Record<string, string> = {
  bayern:
    "Art. 75 BV: Eine Verfassungsänderung erfolgt durch Gesetz mit Zweidrittelmehrheit der Mitglieder des Landtags und anschließendem Volksentscheid. Landtagsbeschluss und Volksentscheid sind keine Alternativen, sondern beide erforderlich.",
  "baden-wuerttemberg":
    "Für die Verfassungsänderung ist Art. 64 der Landesverfassung maßgeblich. Die Änderungsnorm wurde im aktuellen Primärquellenabgleich verifiziert.",
  berlin:
    "Art. 100: Erforderlich ist eine Zweidrittelmehrheit der gewählten Mitglieder. Allein die Änderung des Art. 7 löst kein obligatorisches Referendum aus.",
  brandenburg:
    "Art. 79 in Verbindung mit Art. 78 Abs. 3: Die Verfassung unterscheidet einen parlamentarischen und einen volksgetragenen Änderungsweg; beide sind verfahrensrechtlich getrennt zu betrachten.",
  bremen:
    "Art. 125 BremLV: Vorgesehen sind drei Lesungen, die verfassungsrechtliche Ausschussregel und eine Zweidrittelmehrheit aller Mitglieder. Art. 3 ist nicht speziell referendumspflichtig geschützt.",
  hamburg:
    "Art. 51: Erforderlich sind zwei übereinstimmende Beschlüsse mit mindestens 13 Tagen Abstand; jeweils müssen drei Viertel der gesetzlichen Mitgliederzahl anwesend sein und zwei Drittel der Anwesenden zustimmen.",
  hessen:
    "Besonderheit Hessen: Eine Verfassungsänderung kann nach geltendem Recht nicht – wie in den 15 anderen Ländern grundsätzlich möglich – durch ein bürgerinitiiertes Volksbegehren zur Verfassungsänderung auf den Weg gebracht werden. Art. 123 Abs. 2 HV verlangt zunächst einen Beschluss des Hessischen Landtags mit mehr als der Hälfte der gesetzlichen Mitgliederzahl; erst anschließend stimmt das Volk obligatorisch über diese Verfassungsänderung ab. Hessen ist damit im 16-Länder-Vergleich der einzige bestätigte Initiativsonderfall: parlamentarische Initiative, danach Volkszustimmung.",
  "mecklenburg-vorpommern":
    "Art. 56: Erforderlich ist eine Zweidrittelmehrheit der Mitglieder. Die materiellen Änderungsgrenzen zum Schutz der Menschenwürde und der Grundsätze des Art. 2 sind zu beachten.",
  niedersachsen:
    "Für die Verfassungsänderung sind Art. 46 und Art. 49 der Niedersächsischen Verfassung maßgeblich. Die konkreten Voraussetzungen ergeben sich aus ihrem landesspezifischen Zusammenspiel.",
  "nordrhein-westfalen":
    "Art. 69: Erforderlich ist grundsätzlich eine Zweidrittelmehrheit der gesetzlichen Mitgliederzahl. Davon zu unterscheiden ist der gesonderte Volksentscheidungsweg für den dort geregelten Fall des Scheiterns im Landtag.",
  "rheinland-pfalz":
    "Für die Verfassungsänderung ist Art. 129 der Verfassung für Rheinland-Pfalz maßgeblich.",
  saarland:
    "Für die Verfassungsänderung ist Art. 101 der Verfassung des Saarlandes maßgeblich.",
  sachsen:
    "Für die Verfassungsänderung ist Art. 74 der Verfassung des Freistaates Sachsen maßgeblich.",
  "sachsen-anhalt":
    "Art. 78: Erforderlich ist eine Zweidrittelmehrheit der Mitglieder. Die materiellen Änderungsgrenzen der Art. 2 und 4 sind zu beachten.",
  "schleswig-holstein":
    "Art. 47 Abs. 2: Erforderlich ist entweder die Zustimmung von zwei Dritteln der Mitglieder des Landtags oder die Zustimmung des Volkes nach Art. 49 Abs. 4 Satz 2 und 3. Bei einer Verfassungsänderung im Volksentscheid müssen zwei Drittel der Abstimmenden und mindestens die Hälfte der Stimmberechtigten zustimmen. Für Initiativen aus dem Volk gilt zusätzlich Art. 48 Abs. 1.",
  thueringen:
    "Art. 83: Die Verfassung kann mit Zweidrittelmehrheit des Landtags oder durch Volksentscheid unter den dort geregelten Quoren geändert werden; die ausdrücklichen Änderungsgrenzen sind zu beachten.",
};

function oeffentlicherVerfahrensweg(slug: string) {
  return (
    verfahrenswegNachLand[slug] ??
    "Der landesspezifische Weg zur Verfassungsänderung wird vor einer Verfahrenseinleitung gesondert geprüft."
  );
}

const fundstelleNachLand: Partial<Record<string, string>> = {
  bremen: "Artikel 3 Absatz 1 BremLV",
  "sachsen-anhalt": "Artikel 5 Absatz 1",
};

type Herleitung = {
  warum: string;
  aenderung: string;
};

const herleitungNachLand: Record<string, Herleitung> = {
  bayern: {
    warum:
      "Der geltende Artikel 101 BV arbeitet mit der Schadensformel „… alles zu tun, was anderen nicht schadet“. Der heutige Projekttext übernimmt damit nicht lediglich eine bereits bestehende Rechteformel, sondern vollzieht bewusst den dogmatischen Strukturwechsel zu einer parallelen Rechteformel mit den Rechten anderer und den Rechten der natürlichen Mitwelt. Die rechtswissenschaftlich begleitete und veröffentlicht diskutierte Vorgeschichte und der heutige Projekttext sind deshalb getrennt auszuweisen.",
    aenderung:
      "Die aktuelle Fassung entwickelt die rechtswissenschaftlich begleitete und veröffentlicht diskutierte Entwicklungslinie fort und muss sich im späteren verfassungsändernden Verfahren bewähren. Es wird nicht behauptet, dass der exakte heutige Wortlaut bereits extern verfassungsrechtlich endgeprüft wurde.",
  },
  "baden-wuerttemberg": {
    warum:
      "Die baden-württembergische Verfassung übernimmt die Grundrechte des Grundgesetzes bereits in ihr Landesrecht. Eine zusätzliche allgemeine Freiheitsregel würde diesen bestehenden Schutz unnötig verdoppeln. Deshalb wird die Eigenrechtsanerkennung nicht in Artikel 2 hineingeschrieben, sondern als eigene Verfassungskategorie nach dem Zweiten Hauptteil verankert.",
    aenderung:
      "Artikel 2 und die bestehende Grundrechtsordnung bleiben unverändert. Neu entsteht ein Dritter Hauptteil mit Artikel 84a. Dort wird unmittelbar ausgesprochen, dass die natürliche Mitwelt eigene Rechte hat und dass Land, Gemeinden und Gemeindeverbände diese Rechte achten und schützen.",
  },
  berlin: {
    warum:
      "Artikel 7 enthält bereits eine eigenständige Berliner Regel zur freien Entfaltung der Persönlichkeit und nennt die Rechte anderer ausdrücklich als Grenze. Dadurch gibt es eine direkte und sparsame Anschlussstelle, ohne eine neue Verfassungsstruktur schaffen zu müssen.",
    aenderung:
      "Der geltende Berliner Satz bleibt vollständig erhalten. Nach den Rechten anderer werden ausschließlich die Rechte der natürlichen Mitwelt ergänzt. Frühere zusätzliche Formulierungen, die nicht zum geltenden Berliner Verfassungstext gehörten, wurden bewusst verworfen.",
  },
  brandenburg: {
    warum:
      "Artikel 10 enthält bereits eine eigene brandenburgische Persönlichkeits- und Freiheitsregel mit einer ausdrücklichen Schranke durch die Rechte anderer. Diese Struktur kann den gemeinsamen Rechte-der-Mitwelt-Gedanken unmittelbar aufnehmen.",
    aenderung:
      "Die besondere brandenburgische Formulierung – einschließlich „Jede Person“ sowie des Verweises auf Verfassung und entsprechende Gesetze – bleibt unverändert. Ergänzt werden allein die Rechte der natürlichen Mitwelt neben den Rechten anderer.",
  },
  bremen: {
    warum:
      "Bremen besitzt mit Artikel 3 Absatz 1 BremLV eine eigenständige Freiheits- und Gemeinwohlformel: Handlungen dürfen die Rechte anderer nicht verletzen. Genau diese vorhandene Rechtebeziehung ist die naheliegende Stelle, um auch die Rechte der natürlichen Mitwelt aufzunehmen.",
    aenderung:
      "Die bremische Struktur mit Freiheit, Rechten anderer und Gemeinwohl bleibt bestehen. Ergänzt werden ausschließlich die Rechte der natürlichen Mitwelt. Eine zusätzliche allgemeine Grundrechtsnorm oder ein neuer Rechtekatalog wird nicht geschaffen.",
  },
  hamburg: {
    warum:
      "Hamburg enthält in Artikel 3 keine bestehende allgemeine Freiheitsregel, an die sich der bayerische Ansatz ohne zusätzliche Konstruktion anschließen ließe. Deshalb wird die Eigenrechtsanerkennung als eigenständiger Artikel unmittelbar nach Artikel 3 verankert. So bleibt die vorhandene Staats- und Grundrechtsstruktur unangetastet.",
    aenderung:
      "Artikel 3 bleibt unverändert. Neu eingefügt wird Artikel 3a mit der klaren Aussage, dass die natürliche Mitwelt eigene Rechte hat und die Freie und Hansestadt Hamburg diese Rechte achtet und schützt. Der früher diskutierte Zusatz eines „ökologischen Rechtsstaats“ gehört nicht zu dieser Fassung.",
  },
  hessen: {
    warum:
      "Hessen ist ein Sonderfall. Die bestehenden menschlichen Grundrechte stehen unter einer besonders starken Schutzarchitektur, und der Staatszielbereich ist seiner Funktion nach objektiv-rechtlich angelegt. Um weder die menschliche Freiheitsnorm zu verändern noch die Eigenrechte der Mitwelt zu einem bloßen Staatsziel abzuschwächen, wird eine eigenständige Verfassungskategorie gewählt.",
    aenderung:
      "Die Artikel 2, 26 und die bestehenden Staatsziele bleiben unverändert. Nach Artikel 150 wird bewusst ein neuer Dritter Hauptteil mit Artikel 150a vor den Übergangsbestimmungen eingefügt. Dieser Strukturumbau ist Teil des Vorschlags: Dort wird die natürliche Mitwelt ausdrücklich als Trägerin eigener Rechte anerkannt; Land, Gemeinden und Gemeindeverbände erhalten eine Achtungs- und Schutzpflicht.",
  },
  "mecklenburg-vorpommern": {
    warum:
      "Mecklenburg-Vorpommern trennt in seinem Grundlagenabschnitt bereits Grundrechte und Staatsziele. Eine Eigenrechtsnorm innerhalb der Grundrechtsinkorporation würde eine zweite menschliche Freiheitsregel schaffen; innerhalb der Staatsziele drohte dagegen eine bloße Schutzgutlesart. Der Übergang nach den Staatszielen bietet deshalb eine eigenständige und klare Position.",
    aenderung:
      "Die bestehenden Grundrechte und Staatsziele bleiben unverändert. Nach Artikel 19 und vor Beginn der Staatsorganisation wird ein neuer Unterabschnitt mit Artikel 19a eingefügt. Er spricht der natürlichen Mitwelt eigene Rechte zu und verpflichtet Land, Gemeinden und Kreise zu Achtung und Schutz.",
  },
  niedersachsen: {
    warum:
      "Niedersachsen übernimmt die Grundrechte des Grundgesetzes bereits über Artikel 3. Eine weitere allgemeine Freiheitsnorm wäre deshalb eine unnötige Doppelung. Der Erste Abschnitt bündelt Grundlagen, Grundrechte und Staatsziele und bietet am Ende einen geeigneten Ort für eine eigenständige Rechtekategorie.",
    aenderung:
      "Artikel 3 bleibt unverändert. Die Überschrift des Ersten Abschnitts wird um die Rechte der natürlichen Mitwelt ergänzt und nach Artikel 6d ein neuer Artikel 6e eingefügt. Dort werden eigene Rechte der Mitwelt und die Achtungs- und Schutzpflicht des Landes und der kommunalen Ebenen ausdrücklich festgehalten.",
  },
  "nordrhein-westfalen": {
    warum:
      "Nordrhein-Westfalen hat bereits eine Grundrechtsinkorporation und mit Artikel 29a einen objektiv-rechtlichen Schutz der natürlichen Lebensgrundlagen. Die Eigenrechte sollen weder als zweite menschliche Freiheitsnorm erscheinen noch im bestehenden Umweltschutzartikel zu einem bloßen Schutzgut werden. Deshalb wird eine eigene Bestimmung direkt im Anschluss an Artikel 29a gewählt.",
    aenderung:
      "Artikel 4 und Artikel 29a bleiben unverändert. Neu folgt Artikel 29b mit der ausdrücklichen Anerkennung eigener Rechte der natürlichen Mitwelt und einer Achtungs- und Schutzpflicht für Land, Gemeinden und Gemeindeverbände.",
  },
  "rheinland-pfalz": {
    warum:
      "Rheinland-Pfalz besitzt in Artikel 1 eine historisch besondere, naturrechtlich geprägte Freiheitsarchitektur, die zudem besonders geschützt ist. Eine Änderung dieser Grundnorm wäre unnötig risikoreich. Zugleich gibt es mit dem Abschnitt über den Schutz der natürlichen Lebensgrundlagen bereits einen sachlich passenden Verfassungsraum.",
    aenderung:
      "Artikel 1 sowie die bestehenden Artikel 69 und 70 bleiben materiell unverändert. Der VII. Abschnitt wird um die Rechte der natürlichen Mitwelt erweitert und erhält mit Artikel 70a eine eigenständige Rechtebestimmung. So wird aus dem vorhandenen Schutzraum keine bloße Staatszielverstärkung, sondern eine ausdrückliche Eigenrechtsanerkennung.",
  },
  saarland: {
    warum:
      "Das Saarland hat eine eigenständige menschliche Freiheits- und Grundrechtsarchitektur mit besonderem Bestandsschutz. Auch der vorhandene Umwelt- und Nachhaltigkeitsartikel ist als Staatsziel geprägt. Um weder die menschlichen Grundrechte zu verändern noch die Mitwelt-Rechte in einem Staatsziel aufgehen zu lassen, wird ein eigenständiger Hauptteil vorgeschlagen.",
    aenderung:
      "Die Artikel 125 bis 128 sind aufgehoben; der bisherige III. Hauptteil „Schluss- und Übergangsbestimmungen“ beginnt mit Artikel 129. Der Vorschlag nutzt die freie Stelle davor für einen neuen III. Hauptteil mit Artikel 128a. Der bisherige III. Hauptteil wird dadurch zum IV. Hauptteil; seine Artikel bleiben inhaltlich unverändert.",
  },
  sachsen: {
    warum:
      "Artikel 15 enthält bereits eine eigenständige sächsische Regel zur freien Entfaltung der Persönlichkeit und nennt die Rechte anderer als Grenze. Deshalb ist keine neue Verfassungskategorie nötig; die vorhandene Struktur kann minimal weiterentwickelt werden.",
    aenderung:
      "Der geltende sächsische Wortlaut bleibt vollständig erhalten. Eingefügt werden ausschließlich die Rechte der natürlichen Mitwelt nach den Rechten anderer. Frühere Fassungen mit „Jeder“ oder „und die Freiheit alles zu tun“ wurden verworfen, weil sie den geltenden Landeswortlaut unnötig verändert hätten.",
  },
  "sachsen-anhalt": {
    warum:
      "Sachsen-Anhalt besitzt mit Artikel 5 Absatz 1 eine eigenständige Freiheitsregel mit der Schranke der Rechte anderer. Zusätzlich verpflichtet die Verfassung den Rechtsstaat schon heute zum Schutz der natürlichen Lebensgrundlagen. Deshalb kann die Eigenrechtsanerkennung ohne weiteren Strukturumbau direkt an der bestehenden Freiheitsnorm ansetzen.",
    aenderung:
      "Artikel 5 Absatz 1 bleibt in seinem geltenden Aufbau erhalten und wird nur um die Rechte der natürlichen Mitwelt ergänzt. Die bereits vorhandene ökologische Staatsgrundlage in Artikel 2 wird nicht verändert und dient lediglich als systematischer Kontext.",
  },
  "schleswig-holstein": {
    warum:
      "Schleswig-Holstein übernimmt die Grundrechte des Grundgesetzes bereits über Artikel 3 und besitzt mit Artikel 11 zugleich einen eigenen Schutz der natürlichen Lebensgrundlagen. Eine zweite allgemeine Freiheitsnorm wäre unnötig; eine bloße Ergänzung des Schutzartikels könnte die Eigenrechte dagegen als weiteres Schutzgut erscheinen lassen. Deshalb wird eine eigenständige Norm unmittelbar danach gewählt.",
    aenderung:
      "Artikel 3 und Artikel 11 bleiben unverändert. Neu eingefügt wird Artikel 11a. Er erkennt eigene Rechte der natürlichen Mitwelt an und bindet neben Land, Gemeinden und Gemeindeverbänden auch die anderen Träger der öffentlichen Verwaltung an Achtung und Schutz dieser Rechte.",
  },
  thueringen: {
    warum:
      "Artikel 3 Absatz 2 enthält bereits eine eigenständige thüringische Freiheitsregel mit eigener Schrankenformel. Diese vorhandene Struktur ist die direkteste Anschlussstelle und erlaubt eine minimale Änderung ohne Import fremder Standardformulierungen.",
    aenderung:
      "Der geltende thüringische Wortlaut bleibt einschließlich seiner besonderen Verknüpfung „oder nicht gegen“ erhalten. Ergänzt werden ausschließlich die Rechte der natürlichen Mitwelt. Ein „Sittengesetz“ oder zusätzliche Freiheitsformulierungen werden nicht eingeführt.",
  },
};

export default async function LandesEntwurfSeite({ params }: { params: Promise<{ land: string }> }) {
  const { land } = await params;
  const entwurf = landesEntwurfNachSlug[land];
  if (!entwurf) notFound();
  const herleitung = herleitungNachLand[entwurf.slug];
  const istBayern = entwurf.slug === "bayern";
  const mailSubject = encodeURIComponent(`Landesweg ${entwurf.name} mit aufbauen`);

  return (
    <main className={styles.page}>
      <SiteHeader section={entwurf.name} claimLead={istBayern ? "Rechtswissenschaftlich begleitet." : "Projektintern geprüft."} claimTrail={istBayern ? "Jetzt folgt die Bewährung im Verfahren." : "Externe Gegenprüfung folgt."} />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{entwurf.name} · 16-Länder-Arbeitsstand</p>
        <h1>{istBayern ? "Ein rechtswissenschaftlich begleiteter Ansatz in seiner heutigen Weiterentwicklung." : "Ein verfassungsspezifisch hergeleiteter Entwurf für die weitere Prüfung."}</h1>
        <p className={styles.lead}>{entwurf.einordnung}</p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <div>
            <p className={styles.label}>1 · Wo soll die Verfassung geändert werden?</p>
            <h2>{fundstelleNachLand[entwurf.slug] ?? entwurf.artikel}</h2>
          </div>
          <div>
            {istBayern ? <p><strong>Prüfstand:</strong> Der bayerische Ansatz wurde bereits rechtswissenschaftlich begleitet und veröffentlicht diskutiert. Die heutige Fassung entwickelt diese Linie weiter. Ihre endgültige verfassungsrechtliche Bewährungsprobe erfolgt im späteren Zulassungs- und Verfassungsänderungsverfahren.</p> : <p><strong>Prüfstand:</strong> projektintern geprüft; eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen.</p>}
            <p><strong>Rechtlicher Ansatz:</strong> {oeffentlicherAnsatz(entwurf.architektur)}</p>
            <p><strong>Weg zur Verfassungsänderung:</strong> {oeffentlicherVerfahrensweg(entwurf.slug)}</p>
          </div>
        </div>

        <div className={styles.draftBox}>
          {entwurf.abschnitte.map((abschnitt, index) => (
            <p key={`${abschnitt.label ?? "text"}-${index}`} className={abschnitt.added ? styles.added : undefined}>
              {abschnitt.label ? <strong>{abschnitt.label} </strong> : null}{abschnitt.text}
            </p>
          ))}
        </div>

        {herleitung ? <div className={styles.today}>
          <div>
            <p className={styles.label}>2 · Warum ist gerade diese Stelle geeignet?</p>
            <h2>Funktionsziel vor Rechtsform.</h2>
          </div>
          <div>
            <p>{herleitung.warum}</p>
            <p>Der Vorschlag folgt damit dem Aufbau dieser Landesverfassung und nicht einer bundesweiten Schablone.</p>
          </div>
        </div> : null}

        {herleitung ? <div className={styles.coordination}>
          <p className={styles.label}>3 · Was ändert sich rechtlich – und was bleibt bewusst unverändert?</p>
          <h2>So viel Änderung wie nötig, so wenig Strukturumbau wie möglich.</h2>
          <p>{herleitung.aenderung}</p>
          <p>Die unmittelbare Funktion des Vorschlags ist die verfassungsrechtliche Anerkennung eigener Rechte der natürlichen Mitwelt. Institutionelle Zuständigkeiten, Vertretung, Beteiligung, gerichtliche Geltendmachung, Vollzug und Monitoring werden dadurch nicht automatisch festgelegt.</p>
        </div> : null}

        {istBayern ? <div className={styles.coordination}>
          <p className={styles.label}>Rechtswissenschaftliche Vorgeschichte</p>
          <h2>Begleitet, diskutiert und weiterentwickelt.</h2>
          <p>Der bayerische Ansatz war bereits Gegenstand einer rechtswissenschaftlichen Analyse von Elena Sofia Ewering und Andreas Gutmann in der DÖV. Schon in der Entstehungsphase hatte Klaus Bosselmann darauf hingewiesen, dass die Eigenrechtsposition der Natur im Normtext ausdrücklich über den Begriff „Rechte“ sichtbar werden müsse; seine Korrespondenz begründet zudem die Verwendung von „Mitwelt“ dogmatisch.</p>
          <p>Die heute vorgeschlagene Fassung ist nicht identisch mit der damals veröffentlicht analysierten Formulierung. Sie ist eine spätere Präzisierung dieser Entwicklung. Deshalb wird nicht behauptet, dass exakt der heutige Wortlaut bereits extern begutachtet wurde. Die nächste entscheidende Prüfung erfolgt mit dem konkreten Text im tatsächlichen Zulassungs- und Verfassungsänderungsverfahren.</p>
        </div> : null}

        <div className={styles.today}>
          <div>
            <p className={styles.label}>4 · Welchen Prüfstand hat der Vorschlag?</p>
            <h2>{istBayern ? "Bayern hat eine eigene rechtswissenschaftliche Vorgeschichte." : "Projektintern geprüft – externe Gegenprüfung vorgesehen."}</h2>
          </div>
          <div>
            <p>Alle 16 Vorschläge wurden intern darauf geprüft, ob die gewählte Verfassungsstelle die gemeinsame Rechtsfunktion mit möglichst geringem systematischem Eingriff aufnehmen kann. Aus dieser begrenzten Funktions- und Architekturprüfung ergibt sich derzeit kein Änderungsbedarf am hier gezeigten Normvorschlag.</p>
            <p>{istBayern ? "Für Bayern kommt die bereits bestehende rechtswissenschaftliche Begleitung hinzu. Die heutige Weiterentwicklung muss sich nun im konkreten Verfahren bewähren." : "Diese interne Prüfung ist kein externes verfassungsrechtliches Gutachten. Eine zusätzliche externe bzw. universitäre Gegenprüfung ist vorgesehen."}</p>
          </div>
        </div>

        <div className={styles.coordination}>
          <p className={styles.label}>Systemische Grenze</p>
          <h2>Die Verfassungsnorm ist Ausgangspunkt – nicht die vollständige Umsetzung.</h2>
          <p>Aus der Anerkennung eigener Rechte folgen nicht automatisch Prozessfähigkeit, Klagebefugnis, Prozessstandschaft, gesetzliche Vertretung, Verbandsklagebefugnisse, eine neue Behörde oder ein bestimmtes Guardianship-Modell.</p>
          <p>Diese institutionellen und verfahrensrechtlichen Fragen müssen gesondert geprüft und entwickelt werden. Eigene Rechte der natürlichen Mitwelt sind nicht auf ein Klageinstrument zu reduzieren.</p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.button} href="/deutschland">Alle Bundesländer ansehen</Link>
          {istBayern ? <Link className={styles.textLink} href="/volksbegehren/bayern">Bayern: laufende Kampagne →</Link> : <a className={styles.textLink} href={`mailto:info@dubistdieer.de?subject=${mailSubject}`}>Landesweg mit aufbauen →</a>}
        </div>
      </section>
    </main>
  );
}