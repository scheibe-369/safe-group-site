import { Inter, Space_Grotesk } from "next/font/google";
import type { TypographyVariant } from "../types";

const heading = Space_Grotesk({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-heading" });
const body = Inter({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-body" });

export const variant: TypographyVariant = {
  id: "space-grotesk",
  label: "Space Grotesk e Inter",
  variableClass: `${heading.variable} ${body.variable}`,
};
