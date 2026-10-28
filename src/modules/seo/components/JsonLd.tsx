import type { JsonLdNode } from "../types";

/**
 * Escreve um bloco `application/ld+json` no HTML servido.
 *
 * O `<` e escapado para `<`: um texto com `</script>` dentro da copy
 * fecharia a etiqueta antes do tempo. O JSON continua valido, porque
 * `JSON.parse` le a sequencia de volta como `<`.
 */
export function JsonLd({ data }: { data: JsonLdNode }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
