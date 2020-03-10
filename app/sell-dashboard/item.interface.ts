export enum Color {
  red = "RED",
  black = "BLACK",
  white = "WHITE"
}

export interface Item {
  id: number;
  code: string;
  category: "cloths" | "shoes" | "accessoires";
  gender: "women" | "men";
  brand: string;
  size: "XS" | "S" | "M" | "L" | number;
  //color: Color[] | null;
  color?: Color[];
}
