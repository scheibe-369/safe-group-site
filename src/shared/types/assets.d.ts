declare module "*.css";

/**
 * O Swiper expoe a folha de estilos base como "swiper/css", sem extensao no
 * especificador, entao o wildcard acima nao a apanha e o TypeScript recusa o
 * import de efeito colateral. O pacote nao publica tipos para as folhas de
 * estilo e nao exporta o caminho com extensao, portanto a declaracao tem de
 * ser explicita.
 */
declare module "swiper/css";
