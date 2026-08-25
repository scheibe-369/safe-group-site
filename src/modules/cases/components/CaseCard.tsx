import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../types/case-study";

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <Link href={`/cases/${item.slug}`} className="group block min-w-[84vw] snap-start sm:min-w-[64vw] lg:min-w-[44vw]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
        <Image src={item.cover} alt={`Case ${item.client}`} fill sizes="(min-width: 1024px) 44vw, 84vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex items-start justify-between gap-5 border-t border-white/15 py-5">
        <div><p className="safe-kicker">{item.sector}</p><h3 className="mt-2 text-2xl">{item.client}</h3></div>
        <span className="text-sm text-white/45">Ver case</span>
      </div>
    </Link>
  );
}
