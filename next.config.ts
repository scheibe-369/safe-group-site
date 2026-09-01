import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

// A configuracao por pedido do next-intl vive em `src/shared/i18n`, junto do
// resto da infraestrutura transversal, e nao na pasta `src/i18n` por omissao.
const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
