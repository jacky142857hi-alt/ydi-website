import { Database, Search, Layers, Globe } from "lucide-react";
import platformData from "../../content/platform.json";

const ICON_MAP: Record<number, typeof Database> = {
  0: Database,
  1: Layers,
  2: Search,
  3: Globe,
};

export function Platform() {
  return (
    <section id="platform" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold text-[#1F91C9] tracking-wider uppercase">
            Core Capability
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            {platformData.sectionTitle}
            <span className="text-[#1F91C9] font-normal text-xl ml-3">
              {platformData.sectionBadge}
            </span>
          </h2>
          <p className="mt-4 text-[#5A5A72] leading-relaxed">
            {platformData.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformData.stats.map((stat, i) => {
            const Icon = ICON_MAP[i] || Database;
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-[#F5F7FA] border border-black/5"
              >
                <Icon
                  size={28}
                  className="mx-auto mb-3 text-[#1F91C9]"
                  strokeWidth={1.5}
                />
                <div className="text-2xl font-bold text-[#1A1A2E]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#8E8EA0] mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {platformData.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-xl border border-black/5 hover:border-[#1F91C9]/30 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-[#5A5A72] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
