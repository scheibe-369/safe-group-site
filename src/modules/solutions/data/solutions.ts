import { Bot, ChartNoAxesCombined, MessagesSquare, PanelsTopLeft, Radar, Route } from "lucide-react";
import type { SolutionPillar } from "../types/solution";

export const solutions: SolutionPillar[] = [
  { id: "procura", title: "Geração de procura", description: "Criamos procura qualificada e canais capazes de alimentar a operação comercial com consistência.", capabilities: ["Campanhas", "Canais próprios", "Oferta e mensagem"], icon: Radar },
  { id: "comercial", title: "Estrutura comercial", description: "Organizamos resposta, qualificação, distribuição e acompanhamento para reduzir oportunidades perdidas.", capabilities: ["Pré-vendas", "Scripts", "Follow-up"], icon: MessagesSquare },
  { id: "crm", title: "CRM e automação", description: "Ligamos equipas, processos e informação para que cada oportunidade tenha um próximo passo claro.", capabilities: ["Pipelines", "Automações", "Integrações"], icon: Route },
  { id: "ia", title: "IA aplicada", description: "Usamos IA onde ela aumenta capacidade, velocidade ou qualidade sem substituir o desenho correto do processo.", capabilities: ["Atendimento", "Qualificação", "Apoio à decisão"], icon: Bot },
  { id: "dados", title: "Dados e performance", description: "Transformamos atividade em indicadores que ajudam a equipa a decidir e melhorar com rapidez.", capabilities: ["Métricas", "Dashboards", "Performance por unidade"], icon: ChartNoAxesCombined },
  { id: "software", title: "Software e produtos digitais", description: "Desenhamos e desenvolvemos tecnologia ligada ao processo, ao modelo comercial e às novas fontes de receita.", capabilities: ["SaaS", "Plataformas", "Integrações"], icon: PanelsTopLeft },
];
