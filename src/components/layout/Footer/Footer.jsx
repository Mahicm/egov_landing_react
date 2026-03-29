import { useState } from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';
import eGovLogo from '../../../assets/eGov-Foundation.png';

/* lucide-react v1+ dropped brand icons — using inline SVGs */
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.765C15.021 9.68 16 9 18 9z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="white" />
  </svg>
);

const SOCIAL = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X',        Icon: XIcon        },
  { label: 'LinkedIn', Icon: LinkedInIcon },
  { label: 'YouTube',  Icon: YouTubeIcon  },
];

const COL1 = ['Home', 'Our Impact', 'DIGIT Sandbox'];
const COL2 = ['Our People', 'Financials', 'Contact Us'];

export function Footer() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setEmail('');
  }

  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Main area ── */}
      <div style={{ backgroundColor: '#d4e8f5' }} className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_280px] gap-10">

            {/* ── Col 1 : Brand ── */}
            <div className="flex flex-col gap-4">
              <a href="#">
                <img
                  src={eGovLogo}
                  alt="eGov Foundation"
                  className="h-10 w-auto object-contain object-left"
                />
              </a>

              <p className="text-[13px] text-gray-600 leading-[1.65]">
                Catalysing digital transformation in
                public service delivery at speed &amp; scale.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2 mt-1">
                {SOCIAL.map(({ label, Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-600 hover:bg-[#1a1a2e] hover:border-[#1a1a2e] hover:text-white transition-all duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2 : Useful Links ── */}
            <div>
              <h4 className="text-[13px] font-bold text-gray-800 mb-4">
                Useful Links
              </h4>
              <div className="flex gap-14">
                <ul className="flex flex-col gap-[10px]">
                  {COL1.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[13px] text-gray-600 hover:text-[#1a73e8] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-[10px]">
                  {COL2.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[13px] text-gray-600 hover:text-[#1a73e8] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Col 3 : Subscribe ── */}
            <div>
              <h4 className="text-[13px] font-bold text-gray-800 mb-3">
                Subscribe Now
              </h4>
              <p className="text-[13px] text-gray-600 leading-[1.65] mb-4">
                Receive regular updates of our monthly newsletter
                DOT – in your inbox.
              </p>

              {/* Email form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-stretch border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                  className="flex-1 px-3 py-2 text-[13px] text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 flex items-center justify-center bg-[#f47920] hover:bg-[#e06510] text-white flex-shrink-0 transition-colors"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-[#1a1a2e] py-3 relative">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <p className="text-[12px] text-gray-400">
            ©2024. eGov. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 pr-12">
            <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">
              Terms and Conditions
            </a>
          </div>
        </div>

        {/* Scroll-to-top button — right edge */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="absolute right-0 top-0 h-full w-10 bg-[#1e3a5f] hover:bg-[#1a73e8] flex items-center justify-center text-white transition-colors"
        >
          <ArrowUp size={16} />
        </button>
      </div>

    </footer>
  );
}
