import { CarFront, Landmark, PanelsTopLeft } from "lucide-react";
import type { Market } from "../types/market";

export const markets: Market[] = [
  {
    name: "Automóvel",
    description: "Experiência em operações que ligam procura, atendimento, CRM, performance comercial, stock e margem.",
    capabilities: ["Procura", "Operação comercial", "Margem"],
    icon: CarFront,
  },
  {
    name: "Financeiro",
    description: "Estruturas de aquisição, qualificação, vendas, dados e produtos digitais para jornadas de elevada confiança.",
    capabilities: ["Aquisição", "Qualificação", "Produtos digitais"],
    icon: Landmark,
  },
  {
    name: "Software e SaaS",
    description: "Estratégia, arquitetura e desenvolvimento de plataformas ligadas ao modelo comercial e à escala da operação.",
    capabilities: ["Produto", "Desenvolvimento", "Escala"],
    icon: PanelsTopLeft,
  },
];
