import { permanentRedirect } from "next/navigation";

// A lista de solucoes vive na Home, na seccao ancorada em `#solucoes`. Antes
// esta rota redirecionava para `/`, o que devolvia o visitante ao topo sem
// chegar ao conteudo que o link do rodape prometia.
export default function SolutionsRedirect() {
  permanentRedirect("/#solucoes");
}
