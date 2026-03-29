import { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import eGovLogo from '../../../assets/eGov-Foundation.png';
import enFlag from '../../../assets/en.svg';

const NAV_ITEMS = [
  { label: 'About Us',             dropdown: true  },
  { label: 'Areas of work',        dropdown: true  },
  { label: 'Products & Solutions', dropdown: true  },
  { label: 'Our Platform',         dropdown: false },
  { label: 'Ecosystem',            dropdown: true  },
  { label: 'Resources',            dropdown: true  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Top bar ── */}
      <div className="bg-[#1a1a2e] py-[5px]">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-5">
          <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">
            Events
          </a>
          <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">
            Contact us
          </a>
          <button className="flex items-center gap-1 text-[12px] text-[#00a8d8] hover:text-white transition-colors">
            <img src={enFlag} alt="EN" className="w-5 h-4 object-cover rounded-sm" />
            <span>ENG</span>
            <ChevronDown size={11} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center h-[60px]">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 mr-10">
            <img
              src={eGovLogo}
              alt="eGov Foundation"
              className="h-10 w-auto object-contain object-left"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 ml-auto">
            {NAV_ITEMS.map(({ label, dropdown }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-[2px] text-[13px] font-medium text-gray-700 hover:text-[#00a8d8] transition-colors whitespace-nowrap"
              >
                {label}
                {dropdown && (
                  <ChevronDown size={13} strokeWidth={2.2} className="mt-px text-gray-500" />
                )}
              </a>
            ))}
          </nav>

          {/* Search */}
          <button
            aria-label="Search"
            className="hidden md:flex items-center justify-center ml-4 text-gray-600 hover:text-[#00a8d8] transition-colors"
          >
            <Search size={17} strokeWidth={2} />
          </button>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden ml-auto text-gray-700 hover:text-[#00a8d8] transition-colors"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
            {NAV_ITEMS.map(({ label }) => (
              <a
                key={label}
                href="#"
                className="text-[14px] font-medium text-gray-700 hover:text-[#00a8d8] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
