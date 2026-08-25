type SectionHeadingProps = {
  kicker: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="safe-kicker">{kicker}</p>
      <h2 className="mt-5 text-4xl font-semibold leading-[.98] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && <p className={`mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>}
    </div>
  );
}
