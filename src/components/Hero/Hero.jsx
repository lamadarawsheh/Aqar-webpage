import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
const XLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b1928]">
      <img src="/hero-bg.jpg" alt="Dream and develop for the future" className="block w-full h-auto z-[1]" />

      <div className="absolute bottom-[40px] left-[40px] flex gap-[10px] z-10" style={{ direction: 'ltr' }}>
        <a href="#" className="flex items-center justify-center w-[40px] h-[40px] border border-[rgba(255,255,255,0.8)] rounded text-white no-underline transition-all duration-300 bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.2)] hover:-translate-y-[2px]" aria-label="X (Twitter)">
          <XLogo />
        </a>
        <a href="#" className="flex items-center justify-center w-[40px] h-[40px] border border-[rgba(255,255,255,0.8)] rounded text-white no-underline transition-all duration-300 bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.2)] hover:-translate-y-[2px]" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#" className="flex items-center justify-center w-[40px] h-[40px] border border-[rgba(255,255,255,0.8)] rounded text-white no-underline transition-all duration-300 bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(255,255,255,0.2)] hover:-translate-y-[2px]" aria-label="Instagram">
          <Instagram size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
