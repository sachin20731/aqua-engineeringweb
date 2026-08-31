interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-zinc-950 pt-40 pb-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/sketch_orange_lines.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
