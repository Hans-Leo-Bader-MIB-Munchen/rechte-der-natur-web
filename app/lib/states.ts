export type StateStatus =
  | "Aktive Sammlung"
  | "Geprüfter Normstand";

export const federalStates: { name: string; status: StateStatus }[] = [
  { name: "Baden-Württemberg", status: "Geprüfter Normstand" },
  { name: "Bayern", status: "Aktive Sammlung" },
  { name: "Berlin", status: "Geprüfter Normstand" },
  { name: "Brandenburg", status: "Geprüfter Normstand" },
  { name: "Bremen", status: "Geprüfter Normstand" },
  { name: "Hamburg", status: "Geprüfter Normstand" },
  { name: "Hessen", status: "Geprüfter Normstand" },
  { name: "Mecklenburg-Vorpommern", status: "Geprüfter Normstand" },
  { name: "Niedersachsen", status: "Geprüfter Normstand" },
  { name: "Nordrhein-Westfalen", status: "Geprüfter Normstand" },
  { name: "Rheinland-Pfalz", status: "Geprüfter Normstand" },
  { name: "Saarland", status: "Geprüfter Normstand" },
  { name: "Sachsen", status: "Geprüfter Normstand" },
  { name: "Sachsen-Anhalt", status: "Geprüfter Normstand" },
  { name: "Schleswig-Holstein", status: "Geprüfter Normstand" },
  { name: "Thüringen", status: "Geprüfter Normstand" },
];
