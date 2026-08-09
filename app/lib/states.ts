export type StateStatus =
  | "Aktive Sammlung"
  | "Vorarbeit vorhanden"
  | "Startpunkt";

export const federalStates: { name: string; status: StateStatus }[] = [
  { name: "Baden-Württemberg", status: "Vorarbeit vorhanden" },
  { name: "Bayern", status: "Aktive Sammlung" },
  { name: "Berlin", status: "Vorarbeit vorhanden" },
  { name: "Brandenburg", status: "Startpunkt" },
  { name: "Bremen", status: "Startpunkt" },
  { name: "Hamburg", status: "Vorarbeit vorhanden" },
  { name: "Hessen", status: "Startpunkt" },
  { name: "Mecklenburg-Vorpommern", status: "Startpunkt" },
  { name: "Niedersachsen", status: "Vorarbeit vorhanden" },
  { name: "Nordrhein-Westfalen", status: "Startpunkt" },
  { name: "Rheinland-Pfalz", status: "Startpunkt" },
  { name: "Saarland", status: "Startpunkt" },
  { name: "Sachsen", status: "Vorarbeit vorhanden" },
  { name: "Sachsen-Anhalt", status: "Startpunkt" },
  { name: "Schleswig-Holstein", status: "Startpunkt" },
  { name: "Thüringen", status: "Vorarbeit vorhanden" },
];
