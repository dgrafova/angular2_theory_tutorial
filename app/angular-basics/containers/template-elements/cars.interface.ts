export interface Car {
  producer: string;
  model: string;
  type: "sedan" | "coupe" | "hatchback";
  date: number;
  preowner: Preowner[] | null; // alternatively "preowner?: Preowner[];"" but better the first variant
}

export interface Preowner {
  firstName: string;
  lastName: string;
}
