import { Manrope } from "next/font/google";
import type { TypographyVariant } from "../types";

const family = Manrope({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-heading" });
const bodyFamily = Manrope({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-body" });

export const variant: TypographyVariant = {
  id: "c",
  label: "Manrope",
  variableClass: `${family.variable} ${bodyFamily.variable}`,
};
