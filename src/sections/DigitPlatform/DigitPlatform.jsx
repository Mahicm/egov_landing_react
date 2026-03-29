export function DigitPlatform() {
  return (
    <section
      className="relative overflow-hidden bg-[#0d1f5c] min-h-[420px] flex items-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Dark blue radial glow top-left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,_#1a3a8a55_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center justify-between gap-8 py-14">

        {/* ── Left: Content ── */}
        <div className="flex-1 max-w-[460px]">

          {/* DIGIT logo */}
          <div className="flex flex-col mb-5">
            <div className="flex items-center gap-2 mb-0.5">
              {/* Coloured dot grid */}
              <div className="grid grid-cols-2 gap-[3px] w-5 h-5">
                <span className="w-2 h-2 rounded-sm bg-[#f47920]" />
                <span className="w-2 h-2 rounded-sm bg-[#00b5c8]" />
                <span className="w-2 h-2 rounded-sm bg-[#4caf50]" />
                <span className="w-2 h-2 rounded-sm bg-[#f4c430]" />
              </div>
              <span className="text-white text-[1.8rem] font-extrabold tracking-wide leading-none">
                DIGIT
              </span>
            </div>
            <span className="text-gray-400 text-[12px] ml-7">by eGov Foundation</span>
          </div>

          {/* Heading */}
          <p className="text-white text-[1.5rem] font-light leading-snug mb-1">
            Our open source
          </p>
          <h2 className="text-white text-[2.2rem] font-extrabold leading-tight mb-5">
            technology-for-good<br />platform
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-[13px] leading-relaxed mb-8 max-w-[380px]">
            DIGIT, short for Digital Infrastructure for Governance, Inclusion
            and Transformation is eGov's open-source platform with reusable
            building blocks and shared data registries that can be used to
            build solutions in multiple sectors.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="inline-block px-6 py-2.5 rounded-full bg-white text-[#0d1f5c] text-[13px] font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore the platform
          </a>
        </div>

        {/* ── Right: Person image ── */}
        <div className="flex-1 flex justify-end items-end self-stretch relative">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80"
            alt="Woman using mobile"
            className="h-full max-h-[420px] w-auto object-contain object-bottom grayscale brightness-110 contrast-110 drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
