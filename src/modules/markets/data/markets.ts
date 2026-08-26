import { CarFront, Landmark, PanelsTopLeft } from "lucide-react";
import type { Market } from "../types/market";

export const markets: Market[] = [
  {
    name: "Automóvel",
    description: "Experiência em operações onde procura, atendimento, CRM, performance comercial, stock e margem precisam de funcionar como um só sistema.",
    capabilities: ["Procura", "Operação comercial", "Margem"],
    icon: CarFront,
  },
  {
    name: "Financeiro",
    description: "Estruturas de aquisição, qualificação, vendas, dados e produtos digitais para jornadas que exigem confiança e precisão.",
    capabilities: ["Aquisição", "Qualificação", "Produtos digitais"],
    icon: Landmark,
  },
  {
    name: "Software e SaaS",
    description: "Estratégia, arquitectura e desenvolvimento de plataformas ligadas ao modelo comercial, à retenção e à escala da operação.",
    capabilities: ["Produto", "Desenvolvimento", "Escala"],
    icon: PanelsTopLeft,
  },
];
