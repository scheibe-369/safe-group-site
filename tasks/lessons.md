# Lições

- Não publicar números, clientes, depoimentos ou resultados sem evidência aprovada.
- Manter a Safe posicionada como estrutura de crescimento e inteligência comercial, nunca como uma agência genérica.
- Preservar o vídeo original sem recompressão visual e solicitar master de maior resolução para o lançamento.
- Usar a estrutura de cases da Tyvo como referência de navegação, sem copiar identidade ou conteúdo.
- Em PowerShell, nunca usar `$home` como variável de tarefa, porque os nomes não distinguem maiúsculas e minúsculas e `HOME` é reservada. Usar nomes específicos como `$pageMarkup`.
- Não limitar a Safe ao setor automóvel. A marca atua em operações high ticket e deve comunicar experiência nos setores automóvel, financeiro e desenvolvimento de software/SaaS.
- A relação estratégica com a Growth Hub é contexto interno. Não mencionar a Growth Hub na narrativa comercial da Safe, mantendo apenas o crédito de produção obrigatório no rodapé.
- A caixa central de 80rem serve leitura, não composição. Em ecrã acima de 1440 pixels o cabeçalho e a Hero devem seguir uma margem proporcional, não uma largura fixa, senão o conteúdo colapsa para o meio do ecrã e perde a estrutura da referência visual.
- Ao mudar a margem de um bloco, verificar sempre se o cabeçalho continua alinhado com o `h1` em todas as larguras. Uma margem fixa e uma margem proporcional cruzam-se numa largura intermédia e invertem a ordem dos elementos.
- Botão com 48 pixels de altura e texto de 12 pixels lê-se vazio. A proporção correta na identidade Safe é 44 pixels de altura com texto de 13 pixels.
- Prop de função não atravessa a fronteira entre server component e client component. Num módulo com o array de dados vazio, nem o `tsc` nem o `next build` apanham o erro, porque o componente nunca chega a renderizar. Verificar sempre com um fixture temporário antes de dar por concluída uma feature cujos dados reais ainda não existem.
- Não correr `next build` e `next dev --turbopack` ao mesmo tempo no projeto. Partilham a pasta `.next` e o dev server passa a devolver 500 com ENOENT nos manifestos. Parar o dev, apagar `.next` e só depois construir.
- Ao trazer um bloco visual de outro projeto, verificar primeiro como ele calcula a margem. Se trouxer o seu próprio sistema de escala, tem de ser removido em vez de adaptado, senão cria um segundo eixo de margem a competir com o `.safe-container`.
