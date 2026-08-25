import { Archivo, Inter } from "next/font/google";
import type { TypographyVariant } from "../types";

const heading = Archivo({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-heading" });
const body = Inter({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-body" });

export const variant: TypographyVariant = {
  id: "a",
  label: "Archivo e Inter",
  variableClass: `${heading.variable} ${body.variable}`,
};
