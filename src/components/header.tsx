"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import navData from "../../content/navigation.json";
import siteData from "../../content/site.json";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="h-9 w-9 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
            {siteData.siteNameShort}
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-[#1A1A2E] leading-tight">
              {siteData.siteName}
            </div>
            <div className="text-[10px] text-[#8E8EA0] leading-tight">
              {siteData.siteNameEnglish}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navData.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#5A5A72] hover:text-[#1F91C9] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center h-9 px-5 rounded-lg bg-[#ED7D31] text-white text-sm font-medium hover:bg-[#D96E28] transition-colors duration-200"
          >
            联系我们
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[#5A5A72]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navData.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#5A5A72] py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-[#ED7D31] text-white text-sm font-medium mt-2"
            >
              联系我们
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
