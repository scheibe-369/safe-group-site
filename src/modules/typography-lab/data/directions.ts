import { Archivo, Instrument_Sans, Instrument_Serif, Inter, Manrope, Space_Grotesk } from "next/font/google";
import type { TypeDirection } from "../types/direction";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"], display: "swap" });
const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });
const archivo = Archivo({ subsets: ["latin", "latin-ext"], display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", display: "swap" });
const instrumentSans = Instrument_Sans({ subsets: ["latin", "latin-ext"], display: "swap" });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], display: "swap" });

export const directions: TypeDirection[] = [
  {
    id: "atual",
    label: "Atual",
    name: "Space Grotesk e Inter",
    pitch: "O que está publicado hoje. Fica aqui só para comparação.",
    tension: "O desenho do G e do R puxa a leitura para tecnologia de consumo. Em caixa alta muito grande perde a neutralidade que uma estrutura institucional pede.",
    headingClass: spaceGrotesk.className,
    bodyClass: inter.className,
    headingStyle: { fontWeight: 600, letterSpacing: "-.065em", lineHeight: .82, textTransform: "uppercase" },
    sectionStyle: { fontWeight: 600, letterSpacing: "-.045em", lineHeight: .98 },
    bodyStyle: { fontWeight: 400 },
    labelStyle: { fontWeight: 500, letterSpacing: ".18em" },
  },
  {
    id: "a",
    label: "Direção A",
    name: "Archivo e Inter",
    pitch: "Grotesco institucional. É a que mais se aproxima da referência visual que foi aprovada para a Hero.",
    tension: "Autoridade sem maneirismo. O Archivo tem raiz de tipografia de imprensa, aguenta caixa alta enorme sem parecer decorativo e tem eixo de largura para apertar títulos longos.",
    headingClass: archivo.className,
    bodyClass: inter.className,
    headingStyle: { fontWeight: 700, letterSpacing: "-.038em", lineHeight: .84, textTransform: "uppercase" },
    sectionStyle: { fontWeight: 600, letterSpacing: "-.03em", lineHeight: 1 },
    bodyStyle: { fontWeight: 400 },
    labelStyle: { fontWeight: 600, letterSpacing: ".16em" },
  },
  {
    id: "b",
    label: "Direção B",
    name: "Instrument Serif e Instrument Sans",
    pitch: "Contraste editorial. Título em serifa sobre preto, interface em sans da mesma família.",
    tension: "Tira a Safe do território visual das agências e coloca-a junto de consultoras e fundos. É a opção mais memorável e também a mais arriscada, porque exige disciplina no resto da página.",
    headingClass: instrumentSerif.className,
    bodyClass: instrumentSans.className,
    headingStyle: { fontWeight: 400, letterSpacing: "-.025em", lineHeight: .92 },
    sectionStyle: { fontWeight: 400, letterSpacing: "-.02em", lineHeight: 1.02 },
    bodyStyle: { fontWeight: 400 },
    labelStyle: { fontWeight: 600, letterSpacing: ".16em" },
  },
  {
    id: "c",
    label: "Direção C",
    name: "Manrope",
    pitch: "Uma só família em todo o site, do título ao formulário.",
    tension: "Mais limpa e mais suave que as anteriores. Aproxima a Safe de empresa de tecnologia corporativa. Perde arestas, ganha coerência e um sistema mais simples de manter.",
    headingClass: manrope.className,
    bodyClass: manrope.className,
    headingStyle: { fontWeight: 800, letterSpacing: "-.055em", lineHeight: .86, textTransform: "uppercase" },
    sectionStyle: { fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1 },
    bodyStyle: { fontWeight: 400 },
    labelStyle: { fontWeight: 600, letterSpacing: ".16em" },
  },
];
