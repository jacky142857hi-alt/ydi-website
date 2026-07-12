import heroData from "../../content/hero.json";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-brand">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#1F91C9]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#ED7D31]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white/90 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ED7D31]" />
            {heroData.locationBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-6">
            {heroData.headingLine1}
            <br />
            <span className="text-[#ED7D31]">{heroData.headingHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={heroData.primaryButton.href}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#ED7D31] text-white font-medium hover:bg-[#D96E28] transition-colors duration-200"
            >
              {heroData.primaryButton.label}
            </a>
            <a
              href={heroData.secondaryButton.href}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              {heroData.secondaryButton.label}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs">向下滚动</span>
        <div className="h-8 w-[1px] bg-white/20" />
      </div>
    </section>
  );
}
