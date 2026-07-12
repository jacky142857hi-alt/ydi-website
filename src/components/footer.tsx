import siteData from "../../content/site.json";

const footerLinks = {
  快速导航: [
    { label: "三大空间", href: "#spaces" },
    { label: "达尔文平台", href: "#platform" },
    { label: "合作生态", href: "#ecosystem" },
    { label: "动态资讯", href: "#news" },
  ],
  关于YDI: [
    { label: "学院简介", href: "#about" },
    { label: "发展历程", href: "#about" },
    { label: "联系我们", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
                {siteData.siteNameShort}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {siteData.siteName}
                </div>
              </div>
            </a>
            <p className="text-sm leading-relaxed">{siteData.tagline}</p>
            <p className="text-xs mt-4 text-white/30">
              {siteData.address} · {siteData.addressDetail}
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#1F91C9] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">联系方式</h4>
            <ul className="space-y-2.5 text-sm">
              <li>邮箱: {siteData.email}</li>
              <li>地址: {siteData.address}</li>
              <li>{siteData.addressDetail}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {siteData.siteName} YDI. All
            rights reserved.
          </p>
          <p className="text-xs text-white/20">{siteData.icp}</p>
        </div>
      </div>
    </footer>
  );
}
