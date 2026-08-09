export type LandesEntwurf = {
  slug: string;
  name: string;
  artikel: string;
  einordnung: string;
  abschnitte: { label?: string; text: string; added?: boolean }[];
};

export const landesEntwuerfe: LandesEntwurf[] = [
  {
    slug: "berlin",
    name: "Berlin",
    artikel: "Artikel 7 der Berliner Verfassung",
    einordnung: "Früherer Textentwurf aus der damaligen Initiative. Er dokumentiert einen konkreten Ausgangspunkt für eine mögliche heutige Weiterentwicklung.",
    abschnitte: [
      { text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit und die Freiheit alles zu tun, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt." },
    ],
  },
  {
    slug: "thueringen",
    name: "Thüringen",
    artikel: "Artikel 3 Absatz 2 der Thüringer Verfassung",
    einordnung: "Früherer Textentwurf aus der damaligen Initiative. Er dokumentiert einen konkreten Ausgangspunkt für eine mögliche heutige Weiterentwicklung.",
    abschnitte: [
      { text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit und die Freiheit alles zu tun, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt." },
    ],
  },
  {
    slug: "niedersachsen",
    name: "Niedersachsen",
    artikel: "Artikel 3 der Verfassung von Niedersachsen",
    einordnung: "Der frühere Entwurf ergänzte Artikel 3 um einen neuen Absatz 4. Die bestehenden Absätze wurden im damaligen Entwurf unverändert vorangestellt.",
    abschnitte: [
      { label: "(1)", text: "Das Volk von Niedersachsen bekennt sich zu den Menschenrechten als Grundlage der staatlichen Gemeinschaft, des Friedens und der Gerechtigkeit." },
      { label: "(2)", text: "Die im Grundgesetz für die Bundesrepublik Deutschland festgelegten Grundrechte und staatsbürgerlichen Rechte sind Bestandteil dieser Verfassung. Sie binden Gesetzgebung, vollziehende Gewalt und Rechtsprechung als unmittelbar geltendes Landesrecht. Die Achtung der Grundrechte, insbesondere die Verwirklichung der Gleichberechtigung von Frauen und Männern, ist eine ständige Aufgabe des Landes, der Gemeinden und Landkreise." },
      { label: "(3)", text: "Niemand darf wegen seines Geschlechts, seiner Abstammung, seiner Rasse, seiner Sprache, seiner Heimat und Herkunft, seines Glaubens, seiner religiösen oder politischen Anschauungen benachteiligt oder bevorzugt werden. Niemand darf wegen seiner Behinderung benachteiligt werden." },
      { label: "(4)", text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit und die Freiheit alles zu tun, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.", added: true },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    artikel: "Artikel 3 der Verfassung der Freien und Hansestadt Hamburg",
    einordnung: "Der frühere Entwurf verband zwei Änderungen: die Ergänzung des Rechtsstaatsbegriffs um „ökologisch“ und einen neuen Absatz 3 zur natürlichen Mitwelt.",
    abschnitte: [
      { label: "(1)", text: "Die Freie und Hansestadt Hamburg ist ein demokratischer, ökologischer und sozialer Rechtsstaat.", added: true },
      { label: "(2)", text: "Alle Staatsgewalt geht vom Volke aus. Sie wird nach Maßgabe der Verfassung und der Gesetze ausgeübt. Sie hat auch die Aufgabe, die rechtliche und tatsächliche Gleichstellung von Frauen und Männern zu fördern. Insbesondere wirkt sie darauf hin, dass Frauen und Männer in kollegialen öffentlich-rechtlichen Beschluss- und Beratungsorganen gleichberechtigt vertreten sind." },
      { label: "(3)", text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit und die Freiheit alles zu tun, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.", added: true },
    ],
  },
  {
    slug: "baden-wuerttemberg",
    name: "Baden-Württemberg",
    artikel: "Artikel 2 der Verfassung des Landes Baden-Württemberg",
    einordnung: "Der frühere Entwurf ergänzte Artikel 2 um einen neuen Absatz 3. Die bestehenden Absätze wurden im damaligen Entwurf unverändert vorangestellt.",
    abschnitte: [
      { label: "(1)", text: "Die im Grundgesetz für die Bundesrepublik Deutschland festgelegten Grundrechte und staatsbürgerlichen Rechte sind Bestandteil dieser Verfassung und unmittelbar geltendes Recht." },
      { label: "(2)", text: "Das Volk von Baden-Württemberg bekennt sich darüber hinaus zu dem unveräußerlichen Menschenrecht auf die Heimat." },
      { label: "(3)", text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit und die Freiheit alles zu tun, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt.", added: true },
    ],
  },
  {
    slug: "sachsen",
    name: "Sachsen",
    artikel: "Artikel 15 der Verfassung des Freistaates Sachsen",
    einordnung: "Früherer Textentwurf aus der damaligen Initiative. Er dokumentiert einen konkreten Ausgangspunkt für eine mögliche heutige Weiterentwicklung.",
    abschnitte: [
      { text: "Jeder hat das Recht auf freie Entfaltung seiner Persönlichkeit und die Freiheit alles zu tun, soweit er nicht die Rechte anderer und die Rechte der natürlichen Mitwelt verletzt und nicht gegen die verfassungsmäßige Ordnung oder das Sittengesetz verstößt." },
    ],
  },
];

export const landesEntwurfNachSlug = Object.fromEntries(landesEntwuerfe.map((item) => [item.slug, item]));
