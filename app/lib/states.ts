export type StateStatus =
  | "Antragsphase · aktive Sammlung"
  | "Frühere Initiative"
  | "Startpunkt"
  | "Rechtliche Prüfung"
  | "Netzwerkaufbau"
  | "Vorbereitung"
  | "Aktive Kampagne";

export const federalStates: { name: string; status: StateStatus }[] = [
  { name: "Baden-Württemberg", status: "Frühere Initiative" },
  { name: "Bayern", status: "Antragsphase · aktive Sammlung" },
  { name: "Berlin", status: "Frühere Initiative" },
  { name: "Brandenburg", status: "Startpunkt" },
  { name: "Bremen", status: "Startpunkt" },
  { name: "Hamburg", status: "Frühere Initiative" },
  { name: "Hessen", status: "Startpunkt" },
  { name: "Mecklenburg-Vorpommern", status: "Startpunkt" },
  { name: "Niedersachsen", status: "Frühere Initiative" },
  { name: "Nordrhein-Westfalen", status: "Startpunkt" },
  { name: "Rheinland-Pfalz", status: "Startpunkt" },
  { name: "Saarland", status: "Startpunkt" },
  { name: "Sachsen", status: "Frühere Initiative" },
  { name: "Sachsen-Anhalt", status: "Startpunkt" },
  { name: "Schleswig-Holstein", status: "Startpunkt" },
  { name: "Thüringen", status: "Frühere Initiative" },
];
