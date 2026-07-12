import newsData from "../../content/news.json";

export function News() {
  return (
    <section id="news" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-sm font-semibold text-[#1F91C9] tracking-wider uppercase">
              News & Events
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              {newsData.sectionTitle}
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex text-sm text-[#1F91C9] hover:text-[#012F84] font-medium transition-colors"
          >
            查看全部 →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {newsData.newsItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group flex flex-col p-6 rounded-xl border border-black/5 hover:border-[#1F91C9]/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-[#8E8EA0]">{item.date}</span>
                <span className="text-[10px] font-medium text-[#1F91C9] bg-[#1F91C9]/8 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-2 group-hover:text-[#1F91C9] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#5A5A72] leading-relaxed">
                {item.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
