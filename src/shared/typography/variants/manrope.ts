import { Manrope } from "next/font/google";
import type { TypographyVariant } from "../types";

/**
 * Direção aprovada. Uma só família em todo o site, por isso a fonte é
 * declarada uma vez e `--font-body` aponta para `--font-heading` no
 * globals.css, no seletor desta direção.
 */
const manrope = Manrope({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-heading" });

export const variant: TypographyVariant = {
  id: "manrope",
  label: "Manrope",
  variableClass: manrope.variable,
};
