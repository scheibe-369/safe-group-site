import { Bot, ChartNoAxesCombined, MessagesSquare, PanelsTopLeft, Radar, Route } from "lucide-react";
import type { SolutionPillar } from "../types/solution";

export const solutions: SolutionPillar[] = [
  { id: "procura", title: "Geração de procura", description: "Desenhamos canais, oferta e mensagem para criar oportunidades que a operação consegue atender e converter.", capabilities: ["Campanhas", "Canais próprios", "Oferta e mensagem"], icon: Radar },
  { id: "comercial", title: "Estrutura comercial", description: "Organizamos resposta, qualificação, distribuição e acompanhamento para que cada oportunidade tenha continuidade.", capabilities: ["Pré-vendas", "Scripts", "Follow-up"], icon: MessagesSquare },
  { id: "crm", title: "CRM e automação", description: "Ligamos equipas, processos e informação para transformar cada contacto num próximo passo claro e acompanhado.", capabilities: ["Pipelines", "Automações", "Integrações"], icon: Route },
  { id: "ia", title: "IA aplicada", description: "Aplicamos IA onde ela aumenta capacidade, velocidade ou qualidade, dentro de um processo bem definido.", capabilities: ["Atendimento", "Qualificação", "Apoio à decisão"], icon: Bot },
  { id: "dados", title: "Dados e performance", description: "Transformamos actividade em indicadores que permitem decidir, corrigir e melhorar com consistência.", capabilities: ["Métricas", "Dashboards", "Performance por unidade"], icon: ChartNoAxesCombined },
  { id: "software", title: "Software e produtos digitais", description: "Desenhamos e desenvolvemos tecnologia ligada ao processo, ao modelo comercial e a novas fontes de receita.", capabilities: ["SaaS", "Plataformas", "Integrações"], icon: PanelsTopLeft },
];
