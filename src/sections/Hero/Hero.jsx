import heroBanner from '../../assets/HeroBanner.png';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#f0f7fc] min-h-[420px] flex items-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-10 py-14">

        {/* ── Left: Text ── */}
        <div className="flex-1 z-10 max-w-[520px]">
          <h1 className="text-[2.25rem] leading-[1.25] font-normal text-[#1a1a2e] mb-1">
            20 years of digital<br />
            transformation in<br />
            public service delivery
          </h1>

          <p className="text-[2.25rem] font-extrabold italic text-[#1a1a2e] mb-4 leading-tight">
            It's possible.
          </p>

          <p className="text-[14px] text-gray-500 mb-1 font-medium">
            Catalysts. Ecosystem enablers. Problem Solvers.
          </p>

          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 max-w-[360px]">
            At eGov, we're driven by the power of open digital
            infrastructure and ecosystems to enable governments deliver
            accessible, inclusive and transparent services to every citizen.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#"
              className="px-6 py-2.5 rounded-full bg-[#00a8d8] text-white text-[14px] font-semibold hover:bg-[#0090bb] transition-colors"
            >
              Our Approach
            </a>
            <a
              href="#"
              className="px-6 py-2.5 rounded-full border border-gray-400 text-gray-700 text-[14px] font-semibold hover:border-[#00a8d8] hover:text-[#00a8d8] transition-colors"
            >
              Our Impact
            </a>
          </div>
        </div>

        {/* ── Right: Banner image ── */}
        <div className="flex-1 flex justify-end items-end relative self-stretch">
          <img
            src={heroBanner}
            alt="eGov citizens"
            className="w-full max-w-[680px] object-contain object-bottom drop-shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
