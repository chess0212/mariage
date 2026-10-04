import React from 'react';

interface WaxSealProps {
  isOpening: boolean;
  onClick: () => void;
  className?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({ isOpening, onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Ouvrir l'invitation de mariage de Fah Adam's et Ramatou"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={`relative group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E0A02A] rounded-full transition-transform duration-500 ${
        isOpening ? 'scale-125 opacity-0 rotate-12 transition-all duration-700 ease-out' : 'hover:scale-105 active:scale-95'
      } ${className}`}
    >
      {/* Outer Golden Glow Ripple */}
      <div
        className={`absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-r from-[#E0A02A]/40 via-[#D78014]/30 to-[#FDF3E3]/40 blur-xl transition-opacity ${
          isOpening ? 'opacity-100 scale-150 duration-500' : 'animate-seal-glow opacity-80 group-hover:opacity-100'
        }`}
      />

      {/* Main 3D Wax Seal Body in #D78014 */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full gold-seal-shadow flex items-center justify-center p-2 bg-gradient-to-br from-[#B87300] via-[#D78014] to-[#7A4B00] border border-[#FDF3E3]/70">
        
        {/* Scalloped / Beaded Ring SVG */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sealGoldDocGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDF3E3" />
              <stop offset="0.25" stopColor="#E0A02A" />
              <stop offset="0.6" stopColor="#D78014" />
              <stop offset="0.85" stopColor="#B87300" />
              <stop offset="1" stopColor="#5E3800" />
            </linearGradient>

            <linearGradient id="innerDepressionDoc" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5E3800" />
              <stop offset="0.3" stopColor="#B87300" />
              <stop offset="0.7" stopColor="#D78014" />
              <stop offset="1" stopColor="#F5C678" />
            </linearGradient>
          </defs>

          {/* Outer Organic Wax Rim */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="url(#sealGoldDocGrad)" strokeWidth="3.5" />
          <circle cx="100" cy="100" r="91" fill="none" stroke="#FDF3E3" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />

          {/* Concentric Beaded Pearls */}
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i * 360) / 48;
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 82 * Math.cos(rad);
            const y = 100 + 82 * Math.sin(rad);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2.2"
                fill="#FDF3E3"
                stroke="#7A4B00"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Secondary Inset Bevel */}
          <circle cx="100" cy="100" r="74" fill="none" stroke="url(#innerDepressionDoc)" strokeWidth="3" />
          
          {/* Micro Arabesque Laurel Border Ring */}
          <path
            id="textPathCircle"
            d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            fill="none"
          />
          <text fontSize="7.5" fill="#FDF3E3" letterSpacing="3.5" opacity="0.9" className="font-serif-luxury font-medium select-none">
            <textPath href="#textPathCircle" startOffset="50%" textAnchor="middle">
              FAH ADAM'S • RAMATOU • BISMILLAH
            </textPath>
          </text>

          {/* Inner Recessed Medallion Base */}
          <circle cx="100" cy="100" r="54" fill="url(#innerDepressionDoc)" stroke="#FDF3E3" strokeWidth="1" opacity="0.9" />
        </svg>

        {/* Central Monogram « F & R » in Great Vibes */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center select-none pt-1">
          <div className="flex items-center justify-center space-x-1">
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-script-calligraphy font-normal text-[#FDF3E3] leading-none transform -rotate-2"
              style={{ textShadow: '0 2px 5px rgba(0,0,0,0.6), 0 0 10px rgba(253,243,227,0.7)' }}
            >
              F
            </span>
            <span
              className="text-xl sm:text-2xl md:text-3xl font-serif-luxury font-light text-[#E0A02A] px-0.5"
            >
              &amp;
            </span>
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-script-calligraphy font-normal text-[#FDF3E3] leading-none transform rotate-2"
              style={{ textShadow: '0 2px 5px rgba(0,0,0,0.6), 0 0 10px rgba(253,243,227,0.7)' }}
            >
              R
            </span>
          </div>

          <span className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] text-[#FDF3E3] uppercase font-serif-luxury opacity-90 mt-1">
            2026
          </span>
        </div>

        {/* Metallic Gleam Highlight Layer */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Floating Sparkle / Touch Indicator */}
      {!isOpening && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#112A7A]/90 backdrop-blur-md border border-[#E0A02A]/50 text-[#FDF3E3] text-xs font-serif-luxury font-medium tracking-wide shadow-lg animate-bounce whitespace-nowrap">
          <svg className="w-3.5 h-3.5 text-[#E0A02A]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74a4.5 4.5 0 1 1-5 0z" />
          </svg>
          <span>Toucher pour ouvrir</span>
        </div>
      )}
    </div>
  );
};
