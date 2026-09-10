export type LandesEntwurf = {
  slug: string;
  name: string;
  artikel: string;
  einordnung: string;
  architektur: string;
  verfahrensklasse: "V1" | "V2";
  eigenrechtsstatus: "TRÄGT" | "TRÄGT MIT AUSLEGUNGSVORBEHALT";
  abschnitte: { label?: string; text: string; added?: boolean }[];
};

export const landesEntwuerfe: LandesEntwurf[] = [
  {
    slug: "bayern",
    name: "Bayern",
    artikel: "Artikel 101 der Verfassung des Freistaates Bayern",
    einordnung: "Bayern ist der historische und dogmatische Ausgangspunkt der 16-Länder-Architektur. Der geprüfte Entwurf ergänzt die bestehende Freiheits- und Schrankenformel ausdrücklich um die Rechte der natürlichen Mitwelt.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie R",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Jedermann hat die Freiheit, innerhalb der Schranken der Gesetze und der guten Sitten alles zu tun, was den Rechten anderer und den Rechten der natürlichen Mitwelt nicht schadet.", added: true },
    ],
  },
  {
    slug: "baden-wuerttemberg",
    name: "Baden-Württemberg",
    artikel: "Neuer Dritter Hauptteil · Artikel 84a",
    einordnung: "Baden-Württemberg erhält eine eigenständige positive Statusnorm. Der bestehende Artikel 2 bleibt unverändert; die Rechte der natürlichen Mitwelt werden in einem neuen selbständigen Dritten Hauptteil verankert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie B",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Dritter Hauptteil", text: "Rechte der natürlichen Mitwelt", added: true },
      { label: "Artikel 84a", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Gemeindeverbände achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "berlin",
    name: "Berlin",
    artikel: "Artikel 7 der Verfassung von Berlin",
    einordnung: "Berlin erweitert minimal die bestehende Schranke der freien Persönlichkeitsentfaltung um die Rechte der natürlichen Mitwelt. Die Rechtsträgerschaft wird relational eingeführt.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie A",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.", added: true },
    ],
  },
  {
    slug: "brandenburg",
    name: "Brandenburg",
    artikel: "Artikel 10 der Verfassung des Landes Brandenburg",
    einordnung: "Brandenburg ergänzt Artikel 10 ohne künstliche Absatzangabe. Die Rechte der natürlichen Mitwelt werden in die bestehende Freiheitsschranke aufgenommen.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie A",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Jede Person hat das Recht auf die freie Entfaltung ihrer Persönlichkeit, soweit sie nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die Verfassung und die ihr entsprechenden Gesetze verstößt.", added: true },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    artikel: "Bestehende allgemeine Freiheits- und Gemeinwohlformel",
    einordnung: "Bremen nimmt die Rechte der natürlichen Mitwelt in die bestehende Rechtekollision der allgemeinen Freiheitsformel auf. Eine zusätzliche positive Statusnorm ist nicht Teil der führenden Fassung.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie A",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Alle Menschen sind frei. Ihre Handlungen dürfen nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzen oder gegen das Gemeinwohl verstoßen.", added: true },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    artikel: "Neuer Artikel 3a",
    einordnung: "Hamburg erhält eine selbständige positive Eigenrechtsnorm unmittelbar nach Artikel 3. Der bestehende Artikel 3 bleibt unverändert; der „ökologische Rechtsstaat“ ist keine führende 16-Länder-Fassung.",
    architektur: "Positive Eigenrechtsanerkennung",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Artikel 3a – Rechte der natürlichen Mitwelt", text: "Die natürliche Mitwelt hat eigene Rechte. Die Freie und Hansestadt Hamburg achtet und schützt diese Rechte.", added: true },
    ],
  },
  {
    slug: "hessen",
    name: "Hessen",
    artikel: "Neuer Dritter Hauptteil · Artikel 150a",
    einordnung: "Hessen schafft die Eigenrechtsposition in einem neuen Dritten Hauptteil nach Artikel 150. So bleibt der besonders geschützte bestehende Grundrechtsbereich unverändert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie E · H2-E2",
    verfahrensklasse: "V2",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Dritter Hauptteil", text: "Rechte der natürlichen Mitwelt", added: true },
      { label: "Artikel 150a", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Gemeindeverbände achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "mecklenburg-vorpommern",
    name: "Mecklenburg-Vorpommern",
    artikel: "Neuer IV. Unterabschnitt · Artikel 19a",
    einordnung: "Mecklenburg-Vorpommern verankert die Rechte der natürlichen Mitwelt im Ersten Abschnitt „Grundlagen“, nach Artikel 19 und vor Artikel 20. Die Prozess- und Rechtsschutzfrage bleibt davon getrennt.",
    architektur: "Positive Eigenrechtsanerkennung · Familie B",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "IV. Unterabschnitt", text: "Rechte der natürlichen Mitwelt", added: true },
      { label: "Artikel 19a", text: "Die natürliche Mitwelt hat eigene Rechte. Land, Gemeinden und Kreise achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "niedersachsen",
    name: "Niedersachsen",
    artikel: "Erster Abschnitt · neuer Artikel 6e",
    einordnung: "Niedersachsen ergänzt die Überschrift des Ersten Abschnitts um die Rechte der natürlichen Mitwelt und fügt nach Artikel 6d einen neuen Artikel 6e ein. Artikel 3 bleibt unverändert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie B",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Überschrift Erster Abschnitt", text: "Grundlagen der Staatsgewalt, Grundrechte, Staatsziele und Rechte der natürlichen Mitwelt", added: true },
      { label: "Artikel 6e – Rechte der natürlichen Mitwelt", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Landkreise achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "nordrhein-westfalen",
    name: "Nordrhein-Westfalen",
    artikel: "Neuer Artikel 29b",
    einordnung: "Nordrhein-Westfalen schafft unmittelbar nach Artikel 29a und vor Artikel 30 eine selbständige positive Statusnorm. Die bestehende Grundrechtsinkorporation bleibt unverändert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie B",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Artikel 29b", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Gemeindeverbände achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "rheinland-pfalz",
    name: "Rheinland-Pfalz",
    artikel: "VII. Abschnitt · neuer Artikel 70a",
    einordnung: "Rheinland-Pfalz ergänzt den VII. Abschnitt um die Rechte der natürlichen Mitwelt und fügt einen neuen Artikel 70a ein. Die bestehenden Artikel 1, 69 und 70 bleiben unverändert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie E · RP-2E",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Titel VII. Abschnitt", text: "Schutz der natürlichen Lebensgrundlagen und Rechte der natürlichen Mitwelt", added: true },
      { label: "Artikel 70a", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Gemeindeverbände achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "saarland",
    name: "Saarland",
    artikel: "Neuer III. Hauptteil · Artikel 128a",
    einordnung: "Das Saarland schafft einen neuen III. Hauptteil für die Rechte der natürlichen Mitwelt. Der bisherige III. Hauptteil mit Schluss- und Übergangsbestimmungen wird zum IV. Hauptteil; die Artikel 129 bis 133 bleiben inhaltlich unverändert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie E · SL-E",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "III. Hauptteil", text: "Rechte der natürlichen Mitwelt", added: true },
      { label: "Artikel 128a", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Gemeindeverbände achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "sachsen",
    name: "Sachsen",
    artikel: "Artikel 15 der Verfassung des Freistaates Sachsen",
    einordnung: "Sachsen ergänzt die bestehende allgemeine Persönlichkeitsentfaltung in Artikel 15 um die Rechte der natürlichen Mitwelt. Der Eigenrechtsstatus wird ausschließlich relational aus der Schrankenformel gewonnen.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie A",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Jeder Mensch hat das Recht auf die freie Entfaltung seiner Persönlichkeit, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.", added: true },
    ],
  },
  {
    slug: "sachsen-anhalt",
    name: "Sachsen-Anhalt",
    artikel: "Bestehende allgemeine Persönlichkeitsentfaltung",
    einordnung: "Sachsen-Anhalt ergänzt die bestehende Schranke der freien Persönlichkeitsentfaltung um die Rechte der natürlichen Mitwelt. Die Rechtsträgerschaft bleibt relational formuliert.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie A",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.", added: true },
    ],
  },
  {
    slug: "schleswig-holstein",
    name: "Schleswig-Holstein",
    artikel: "Neuer Artikel 11a",
    einordnung: "Schleswig-Holstein fügt unmittelbar nach Artikel 11 eine ausdrückliche positive Eigenrechtsnorm ein. Artikel 3 und Artikel 11 bleiben unverändert.",
    architektur: "Positive Eigenrechtsanerkennung · Familie B",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT",
    abschnitte: [
      { label: "Artikel 11a – Rechte der natürlichen Mitwelt", text: "Die natürliche Mitwelt hat eigene Rechte. Das Land, die Gemeinden und Gemeindeverbände sowie die anderen Träger der öffentlichen Verwaltung achten und schützen diese Rechte.", added: true },
    ],
  },
  {
    slug: "thueringen",
    name: "Thüringen",
    artikel: "Artikel 3 Absatz 2 der Verfassung des Freistaats Thüringen",
    einordnung: "Thüringen bewahrt den geltenden Wortlaut des Artikel 3 Absatz 2 einschließlich „oder nicht gegen“ und ergänzt ausschließlich die Rechte der natürlichen Mitwelt. Ein Sittengesetz-Zusatz wird nicht importiert.",
    architektur: "Relationale Eigenrechtsanerkennung · Familie A",
    verfahrensklasse: "V1",
    eigenrechtsstatus: "TRÄGT MIT AUSLEGUNGSVORBEHALT",
    abschnitte: [
      { text: "Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt oder nicht gegen die verfassungsmäßige Ordnung verstößt.", added: true },
    ],
  },
];

export const landesEntwurfNachSlug = Object.fromEntries(landesEntwuerfe.map((item) => [item.slug, item]));
