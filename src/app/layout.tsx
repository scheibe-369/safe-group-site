import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/shared/layout/SiteFooter";
import { SiteHeader } from "@/shared/layout/SiteHeader";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Safe Group | Crescimento com estrutura", template: "%s | Safe Group" },
  description: "Crescimento, inteligência comercial e tecnologia para operações high ticket. Estratégia, vendas, software e dados integrados numa estrutura orientada à oportunidade certa.",
  keywords: ["crescimento high ticket", "inteligência comercial", "desenvolvimento SaaS", "tecnologia para vendas", "Safe Group"],
  authors: [{ name: "Safe Group" }],
  creator: "Safe Group",
  publisher: "Safe Group",
  alternates: { canonical: "/" },
  openGraph: { title: "Safe Group", description: "Crescimento com estrutura.", url: siteUrl, siteName: "Safe Group", locale: "pt_PT", type: "website", images: [{ url: "/brand/safe-banner.png", width: 1672, height: 941, alt: "Safe Group" }] },
  twitter: { card: "summary_large_image", title: "Safe Group", description: "Crescimento com estrutura.", images: ["/brand/safe-banner.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 bg-white px-4 py-3 text-sm text-black transition-transform focus:translate-y-0">Saltar para o conteúdo</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
