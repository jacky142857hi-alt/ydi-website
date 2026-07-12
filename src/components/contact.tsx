import contactData from "../../content/contact.json";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-10 sm:p-16 text-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {contactData.title}
              </h2>
              <p className="text-white/70 max-w-md mx-auto mb-8">
                {contactData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={contactData.primaryButton.href}
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#ED7D31] text-white font-medium hover:bg-[#D96E28] transition-colors duration-200 w-full sm:w-auto"
                >
                  {contactData.primaryButton.label}
                </a>
                <a
                  href={contactData.secondaryButton.href}
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto"
                >
                  {contactData.secondaryButton.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
