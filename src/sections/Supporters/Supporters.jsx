import { SUPPORTERS } from '../../constants/supporters.jsx';

export function Supporters() {
  return (
    <section
      className="bg-white py-10 border-b-2 border-[#00a8d8]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[1.4rem] text-[#1a1a2e] font-normal mb-8">
          Our <span className="font-bold">Supporters</span>
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-8">
          {SUPPORTERS.map((s) => (
            <div
              key={s.id}
              title={s.name}
              className="flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200 cursor-pointer"
            >
              {s.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
