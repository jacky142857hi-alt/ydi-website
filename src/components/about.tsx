import aboutData from "../../content/about.json";

export function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-gradient-brand text-white overflow-hidden relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold text-[#ED7D31] tracking-wider uppercase">
              About YDI
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              {aboutData.sectionTitle}
            </h2>

            <div className="mt-8 space-y-5 text-white/80 leading-relaxed">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-4 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-[#ED7D31] flex items-center justify-center shrink-0 text-lg">
                📍
              </div>
              <div>
                <div className="font-semibold text-white">
                  {aboutData.locationBadge}
                </div>
                <div className="text-sm text-white/60 mt-1">
                  {aboutData.locationDetail}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-8">发展历程</h3>
            <div className="space-y-1">
              {aboutData.milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-4 border-b border-white/10"
                >
                  <span className="text-sm font-bold text-[#ED7D31] w-16 shrink-0">
                    {m.year}
                  </span>
                  <span className="text-sm text-white/80">{m.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
