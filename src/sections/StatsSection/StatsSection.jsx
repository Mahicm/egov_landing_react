import { useState } from 'react';
import heroBanner from '../../assets/HeroBanner.png';

const CATEGORIES = ['Public Health', 'Public Finance', 'Local Governance', 'Water & Sanitation'];

export function StatsSection() {
  const [active, setActive] = useState('Public Health');

  return (
    <section style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Top: Dark hero with stats overlay ── */}
      <div className="relative bg-[#1a2b3c] min-h-[380px] flex flex-col justify-between pt-10 pb-24 overflow-hidden">

        {/* Background image with dark overlay */}
        <img src={heroBanner} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-[#0d1f2d] opacity-60" />

        {/* Top row */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-start justify-between gap-8">
          <h2 className="text-[4.5rem] font-bold text-white leading-none tracking-tight">
            1,000,000,100+
          </h2>
          <p className="text-[13px] text-gray-300 max-w-[220px] leading-relaxed pt-2">
            Citizens availing public services through eGov's Digital Public Goods (DPG)
          </p>
        </div>

        {/* Bottom row: two stats */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-end gap-16 mt-auto pt-16">
          <div>
            <p className="text-[2rem] font-bold text-white leading-tight">1.1 Billion+</p>
            <p className="text-[13px] text-gray-400 mt-1">Public services delivered</p>
          </div>
          <div>
            <p className="text-[2rem] font-bold text-white leading-tight">50+ partners</p>
            <p className="text-[13px] text-gray-400 mt-1">From technology,<br />governments and NGOs</p>
          </div>
        </div>
      </div>

      {/* ── Bottom: Cards row overlapping dark section ── */}
      <div className="relative z-10 bg-white pb-12 -mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch bg-white rounded-2xl shadow-xl p-8">

          {/* Card 1: Bold approaches */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-5">
            <h3 className="text-[1.5rem] font-normal text-[#1a1a2e] leading-snug">
              Big problems need<br />
              <span className="font-bold">bold approaches</span>
            </h3>
            <div className="flex flex-col gap-3 mt-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`w-full py-2.5 px-4 rounded-full text-[13px] font-medium border transition-colors ${
                    active === cat
                      ? 'bg-[#1a4f8a] text-white border-[#1a4f8a]'
                      : 'bg-white text-gray-700 border border-gray-400 rounded-full hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Card 2: 210+ */}
          <div className="bg-[#00b5c8] rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[280px]">
            <div>
              <p className="text-[3rem] font-extrabold text-white leading-none">210+</p>
              <p className="text-[13px] text-white/90 mt-2 leading-relaxed">
                cities LIVE with 10BedICU across India.
              </p>
              <button className="mt-4 px-5 py-1.5 bg-white text-[#00b5c8] text-[12px] font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Read More
              </button>
            </div>
            {/* Decorative image — hospital bed */}
            <div className="absolute bottom-0 right-0 w-48 h-44 overflow-hidden rounded-br-2xl">
              <img
                src="https://placehold.co/300x220/0099b3/ffffff?text=🏥+Hospital+Bed"
                alt="Hospital bed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3: 2 Bn */}
          <div className="bg-[#1a4f8a] rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[280px]">
            <div>
              <p className="text-[3rem] font-extrabold text-white leading-none">2 Bn</p>
              <p className="text-[13px] text-white/90 mt-2 leading-relaxed">
                COVID-19 vaccination certificates issued
              </p>
              <button className="mt-4 px-5 py-1.5 bg-white text-[#1a4f8a] text-[12px] font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Read More
              </button>
            </div>
            {/* Decorative image — vaccination */}
            <div className="absolute bottom-0 right-0 w-48 h-44 overflow-hidden rounded-br-2xl">
              <img
                src="https://placehold.co/300x220/153f6e/ffffff?text=💉+Vaccination"
                alt="Vaccination certificate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
