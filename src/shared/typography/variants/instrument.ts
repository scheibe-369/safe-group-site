import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import type { TypographyVariant } from "../types";

const heading = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", display: "swap", variable: "--font-heading" });
const body = Instrument_Sans({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-body" });

export const variant: TypographyVariant = {
  id: "b",
  label: "Instrument Serif e Instrument Sans",
  variableClass: `${heading.variable} ${body.variable}`,
};
