export const SUPPORTERS = [
  {
    id: 1,
    name: 'Omidyar Network',
    logo: (
      <div className="flex flex-col items-center leading-tight">
        <span className="text-[1.6rem] font-bold text-gray-400 tracking-tighter border-2 border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-[14px]">co</span>
        <span className="text-[9px] text-gray-400 mt-1 tracking-widest uppercase">Omidyar</span>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Bill & Melinda Gates Foundation',
    logo: (
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Bill&Melinda</span>
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Gates</span>
        <span className="text-[9px] text-gray-300 tracking-wider">foundation</span>
      </div>
    ),
  },
  {
    id: 3,
    name: 'TATA Trusts',
    logo: (
      <span className="text-[1.1rem] font-bold text-gray-400 tracking-[0.2em] uppercase">
        Tata Trusts
      </span>
    ),
  },
  {
    id: 4,
    name: 'The Global Fund',
    logo: (
      <div className="flex items-center gap-1.5">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="#9ca3af" strokeWidth="2" fill="none" />
          <path d="M10 16 Q16 8 22 16 Q16 24 10 16Z" fill="#9ca3af" opacity="0.5" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">The</span>
          <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Global</span>
          <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Fund</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: 'Nandan Nilekani Philanthropies',
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="text-[1.3rem] font-extrabold text-gray-400 border-2 border-gray-300 rounded px-1">N</span>
        <div className="flex flex-col leading-tight">
          <span className="text-[9px] font-bold text-gray-400 tracking-wide uppercase">Nandan</span>
          <span className="text-[9px] font-bold text-gray-400 tracking-wide uppercase">Nilekani</span>
          <span className="text-[8px] text-gray-300 tracking-wide">philanthropies</span>
        </div>
      </div>
    ),
  },
];
