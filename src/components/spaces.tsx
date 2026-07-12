import spacesData from "../../content/spaces.json";

export function Spaces() {
  return (
    <section id="spaces" className="py-24 sm:py-32 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#1F91C9] tracking-wider uppercase">
            Three Core Spaces
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            {spacesData.sectionTitle}
          </h2>
          <p className="mt-4 text-[#5A5A72] max-w-xl mx-auto">
            {spacesData.sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {spacesData.spaces.map((space) => (
            <div
              key={space.id}
              className="group relative bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-2" style={{ backgroundColor: space.color }} />
              <div className="p-8">
                <span className="inline-block text-xs font-medium text-[#1F91C9] bg-[#1F91C9]/8 px-3 py-1 rounded-full mb-4">
                  {space.tag}
                </span>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">
                  {space.title}
                </h3>
                <p className="text-xs text-[#8E8EA0] mb-4">{space.english}</p>
                <p className="text-sm text-[#5A5A72] leading-relaxed mb-6">
                  {space.description}
                </p>
                <ul className="space-y-2.5">
                  {space.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#1A1A2E]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: space.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
