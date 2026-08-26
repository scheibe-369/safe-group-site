import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/shared/layout/SiteFooter";
import { SiteFooterSlot } from "@/shared/layout/SiteFooterSlot";
import { SiteHeader } from "@/shared/layout/SiteHeader";
import { SocialDock } from "@/modules/social-dock";
import { variant } from "@/shared/typography/active";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safegroup.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Safe Group | Decisões que movem a operação", template: "%s | Safe Group" },
  description: "A Safe encontra a decisão que pode desbloquear crescimento, margem ou eficiência em operações high ticket e estrutura a execução à volta dela.",
  keywords: ["crescimento high ticket", "inteligência comercial", "desenvolvimento SaaS", "tecnologia para vendas", "Safe Group"],
  authors: [{ name: "Safe Group" }],
  creator: "Safe Group",
  publisher: "Safe Group",
  alternates: { canonical: "/" },
  openGraph: { title: "Safe Group", description: "Decisões que movem a operação.", url: siteUrl, siteName: "Safe Group", locale: "pt_PT", type: "website", images: [{ url: "/brand/safe-banner.png", width: 1672, height: 941, alt: "Safe Group" }] },
  twitter: { card: "summary_large_image", title: "Safe Group", description: "Decisões que movem a operação.", images: ["/brand/safe-banner.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" data-type={variant.id} className={variant.variableClass}>
      <body>
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 bg-white px-4 py-3 text-sm text-black transition-transform focus:translate-y-0">Saltar para o conteúdo</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooterSlot>
          <SiteFooter />
        </SiteFooterSlot>
        <SocialDock />
      </body>
    </html>
  );
}
