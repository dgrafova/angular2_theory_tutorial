export interface Item {
  code: string;
  category: "cloths" | "shoes" | "accessoires";
  gender: "women" | "men";
  brand: string;
  size: "XS" | "S" | "M" | "L" | number;
}
