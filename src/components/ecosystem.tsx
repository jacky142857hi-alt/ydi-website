import ecoData from "../../content/ecosystem.json";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#1F91C9] tracking-wider uppercase">
            Ecosystem
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            {ecoData.sectionTitle}
          </h2>
          <p className="mt-4 text-[#5A5A72] max-w-xl mx-auto">
            {ecoData.sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ecoData.partners.map((partner) => (
            <div
              key={partner.name}
              className="group p-6 rounded-xl bg-white border border-black/5 hover:border-[#1F91C9]/20 hover:shadow-md transition-all duration-200"
            >
              <span className="inline-block text-[10px] font-semibold text-[#ED7D31] bg-[#ED7D31]/8 px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                {partner.role}
              </span>
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-1.5">
                {partner.name}
              </h3>
              <p className="text-sm text-[#5A5A72] leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
