import Image from "next/image";
import Link from "next/link";

export function SiteLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Safe Group, página inicial">
      <Image src="/brand/safe-mark.png" alt="" width={48} height={48} priority={priority} className="h-10 w-10 object-contain" />
      <span className="font-display leading-none tracking-[.22em] text-white">
        <span className="block text-lg font-semibold">SAFE</span>
        <span className="mt-1 block text-[9px] font-medium tracking-[.55em] text-white/65">GROUP</span>
      </span>
    </Link>
  );
}
