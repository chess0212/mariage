import React from 'react';
import goldLaserCutPatternImg from '../assets/images/gold_laser_cut_pattern_1791122544489.jpg';
import goldLaceWallpaperImg from '../assets/images/gold_lace_wallpaper_1791122562833.jpg';

/**
 * LaserCutLacePanel
 * Exact reproduction of the user's submitted gold laser-cut panel:
 * - Rectangular gold frame
 * - 3 interconnected circular / elliptical medallions
 * - Symmetrical 8-petal acanthus/palmette floral rosettes with central diamond
 * - Rich interlaced arabesque vines and leafy tendril cutouts on pure white
 * - Shimmering champagne metallic gold texture with realistic 3D depth
 * - Embedded SVG vector filigree fallback for 100% reliable deployment on GitHub Pages / Vercel
 */

interface LaserCutLacePanelProps {
  side: 'left' | 'right';
  className?: string;
}

export const LaserCutLacePanel: React.FC<LaserCutLacePanelProps> = ({ side, className = '' }) => {
  const isRight = side === 'right';

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none pointer-events-none bg-[#FEFEFB] ${className}`}
      style={{
        boxShadow: isRight
          ? '-10px 0 35px rgba(0,0,0,0.25), inset 3px 0 10px rgba(255,255,255,0.7), inset -4px 0 12px rgba(215,128,20,0.35)'
          : '10px 0 35px rgba(0,0,0,0.25), inset -3px 0 10px rgba(255,255,255,0.7), inset 4px 0 12px rgba(215,128,20,0.35)',
      }}
    >
      {/* Pure White Background underneath cutouts */}
      <div className="absolute inset-0 bg-[#FFFFFF]" />

      {/* High-Resolution Exact Gold Laser-Cut Pattern Image (Bundled by Vite) */}
      <div
        className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 ${
          isRight ? '-scale-x-100' : ''
        }`}
        style={{
          backgroundImage: `url(${goldLaserCutPatternImg})`,
          backgroundSize: '100% 100%',
          filter: 'drop-shadow(0 4px 12px rgba(215,128,20,0.25)) contrast(1.08) brightness(1.02)',
        }}
      />

      {/* Seamless Repeating Gold Lace Wallpaper Texture (Bundled by Vite) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-repeat"
        style={{
          backgroundImage: `url(${goldLaceWallpaperImg})`,
          backgroundSize: '360px 360px',
        }}
      />

      {/* Vector Lace Rosettes Overlay for extra crispness & reliable rendering */}
      <div
        className={`absolute inset-0 pointer-events-none flex flex-col justify-around py-12 px-6 opacity-80 ${
          isRight ? '-scale-x-100' : ''
        }`}
      >
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="flex justify-center my-auto">
            <svg
              viewBox="0 0 120 120"
              className="w-32 h-32 sm:w-44 sm:h-44 text-[#D78014] opacity-90 drop-shadow-[0_2px_8px_rgba(215,128,20,0.4)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Scalloped Lace Ring */}
              <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="2" />
              <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

              {/* 8 Acanthus Leaves & Palmettes */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, pIdx) => (
                <g key={pIdx} transform={`rotate(${angle} 60 60)`}>
                  <path
                    d="M60 18 Q54 28 50 38 Q60 34 70 38 Q66 28 60 18 Z"
                    fill="currentColor"
                    fillOpacity="0.4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="60" cy="16" r="2" fill="#E0A02A" />
                  <path d="M60 22 L60 34" stroke="#FFF" strokeWidth="0.8" opacity="0.8" />
                </g>
              ))}

              {/* Central Diamond & Core Floret */}
              <circle cx="60" cy="60" r="16" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
              <rect x="52" y="52" width="16" height="16" transform="rotate(45 60 60)" fill="currentColor" fillOpacity="0.5" stroke="#FFF" strokeWidth="1" />
              <circle cx="60" cy="60" r="4" fill="#FDF3E3" />
            </svg>
          </div>
        ))}
      </div>

      {/* Metallic Gold Specular Highlights & Shimmer Sweep */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          background:
            'linear-gradient(135deg, rgba(215,128,20,0.5) 0%, rgba(255,248,222,0.85) 30%, rgba(224,160,42,0.35) 60%, rgba(255,255,255,0.8) 75%, rgba(184,115,0,0.6) 100%)',
        }}
      />

      {/* Fine Outer Gold Frame Border */}
      <div className="absolute inset-2 sm:inset-4 border-2 border-[#D78014]/70 pointer-events-none">
        <div className="absolute inset-1 border border-[#FDF3E3]/60 pointer-events-none" />
      </div>

      {/* Center Edge Gold Trim Strip (where the two doors meet) */}
      <div
        className={`absolute top-0 bottom-0 w-3 bg-gradient-to-r ${
          isRight
            ? 'left-0 from-[#B87300] via-[#FDF3E3] to-transparent'
            : 'right-0 from-transparent via-[#FDF3E3] to-[#B87300]'
        } opacity-85 z-20 pointer-events-none`}
      />

      {/* Light sweep animation */}
      <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none transform -skew-x-20 animate-light-sweep" />
    </div>
  );
};
