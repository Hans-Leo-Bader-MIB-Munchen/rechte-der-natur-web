export type StateStatus =
  | "Aktive Sammlung"
  | "Intern geprüfter Normstand";

export const federalStates: { name: string; status: StateStatus }[] = [
  { name: "Baden-Württemberg", status: "Intern geprüfter Normstand" },
  { name: "Bayern", status: "Aktive Sammlung" },
  { name: "Berlin", status: "Intern geprüfter Normstand" },
  { name: "Brandenburg", status: "Intern geprüfter Normstand" },
  { name: "Bremen", status: "Intern geprüfter Normstand" },
  { name: "Hamburg", status: "Intern geprüfter Normstand" },
  { name: "Hessen", status: "Intern geprüfter Normstand" },
  { name: "Mecklenburg-Vorpommern", status: "Intern geprüfter Normstand" },
  { name: "Niedersachsen", status: "Intern geprüfter Normstand" },
  { name: "Nordrhein-Westfalen", status: "Intern geprüfter Normstand" },
  { name: "Rheinland-Pfalz", status: "Intern geprüfter Normstand" },
  { name: "Saarland", status: "Intern geprüfter Normstand" },
  { name: "Sachsen", status: "Intern geprüfter Normstand" },
  { name: "Sachsen-Anhalt", status: "Intern geprüfter Normstand" },
  { name: "Schleswig-Holstein", status: "Intern geprüfter Normstand" },
  { name: "Thüringen", status: "Intern geprüfter Normstand" },
];
