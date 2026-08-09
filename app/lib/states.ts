export type StateStatus =
  | "Referenzfall"
  | "Historische Spur"
  | "Noch offen"
  | "Rechtliche Prüfung"
  | "Netzwerkaufbau"
  | "Vorbereitung"
  | "Aktive Kampagne";

export const federalStates: { name: string; status: StateStatus }[] = [
  { name: "Baden-Württemberg", status: "Historische Spur" },
  { name: "Bayern", status: "Referenzfall" },
  { name: "Berlin", status: "Historische Spur" },
  { name: "Brandenburg", status: "Noch offen" },
  { name: "Bremen", status: "Noch offen" },
  { name: "Hamburg", status: "Historische Spur" },
  { name: "Hessen", status: "Noch offen" },
  { name: "Mecklenburg-Vorpommern", status: "Noch offen" },
  { name: "Niedersachsen", status: "Historische Spur" },
  { name: "Nordrhein-Westfalen", status: "Noch offen" },
  { name: "Rheinland-Pfalz", status: "Noch offen" },
  { name: "Saarland", status: "Noch offen" },
  { name: "Sachsen", status: "Historische Spur" },
  { name: "Sachsen-Anhalt", status: "Noch offen" },
  { name: "Schleswig-Holstein", status: "Noch offen" },
  { name: "Thüringen", status: "Historische Spur" },
];
