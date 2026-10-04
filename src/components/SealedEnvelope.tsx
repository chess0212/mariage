import React from 'react';
import { LaserCutLacePanel } from './LaserCutPattern';
import { WaxSeal } from './WaxSeal';
import { CornerOrnament } from './OrnamentalElements';
import goldLaceWallpaperImg from '../assets/images/gold_lace_wallpaper_1791122562833.jpg';

interface SealedEnvelopeProps {
  isOpening: boolean;
  onOpen: () => void;
}

export const SealedEnvelope: React.FC<SealedEnvelopeProps> = ({ isOpening, onOpen }) => {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label="Cliquer n'importe où pour ouvrir la carte d'invitation de mariage"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none bg-[#FEFEFB]"
      style={{ perspective: '2200px' }}
    >
      {/* Background Ivory Canvas with Subtle Gold Lace Wallpaper underlay */}
      <div
        className="absolute inset-0 bg-[#FEFEFB] bg-repeat opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${goldLaceWallpaperImg})`,
          backgroundSize: '400px 400px',
        }}
      />

      {/* FULL-SCREEN LEFT GATEFOLD DOOR with the Exact Submitted Laser-Cut Pattern */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full z-20 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.85,0.3,1)] origin-left ${
          isOpening ? '-rotate-y-115 -translate-x-full opacity-0 pointer-events-none' : 'rotate-y-0'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <LaserCutLacePanel side="left" />
      </div>

      {/* FULL-SCREEN RIGHT GATEFOLD DOOR with the Exact Submitted Laser-Cut Pattern */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full z-20 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.85,0.3,1)] origin-right ${
          isOpening ? 'rotate-y-115 translate-x-full opacity-0 pointer-events-none' : 'rotate-y-0'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <LaserCutLacePanel side="right" />
      </div>

      {/* Outer Golden Perimeter Framing in #D78014 across the entire screen */}
      <div className="absolute inset-3 sm:inset-5 md:inset-8 border-2 border-[#D78014]/60 pointer-events-none z-25">
        <div className="absolute inset-1 sm:inset-1.5 border border-[#FDF3E3]/50 pointer-events-none" />
        <CornerOrnament position="top-left" className="absolute -top-2 -left-2 w-10 h-10 sm:w-14 sm:h-14 text-[#D78014]" />
        <CornerOrnament position="top-right" className="absolute -top-2 -right-2 w-10 h-10 sm:w-14 sm:h-14 text-[#D78014]" />
        <CornerOrnament position="bottom-left" className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-14 sm:h-14 text-[#D78014]" />
        <CornerOrnament position="bottom-right" className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-14 sm:h-14 text-[#D78014]" />
      </div>

      {/* Central Centerline Gold Crease & Vertical Seam */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D78014]/80 to-transparent z-25 pointer-events-none shadow-[0_0_8px_rgba(215,128,20,0.6)]" />

      {/* Center Plaque with Invitation Texts & Golden Wax Seal */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-lg mx-auto pointer-events-auto">
        
        {/* Top Islamic Invocation & Bride/Groom Intro */}
        <div
          className={`transition-all duration-700 delay-100 ${
            isOpening ? 'opacity-0 -translate-y-8 scale-90' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Bismillah in Amiri & #D78014 */}
          <div className="inline-block px-6 sm:px-8 py-2 rounded-full bg-[#FEFEFB]/95 backdrop-blur-md border border-[#D78014]/70 shadow-xl mb-3">
            <span className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#D78014] tracking-wider leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>

          <p className="font-serif-luxury text-base sm:text-lg md:text-xl italic text-[#112A7A] font-semibold tracking-[0.03em] mb-1.5 drop-shadow-xs bg-[#FEFEFB]/90 backdrop-blur-xs px-5 py-1 rounded-full inline-block shadow-xs">
            Vous êtes cordialement invité(e) à célébrer notre union
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-script-calligraphy text-[#D78014] drop-shadow-xs mb-4 select-none leading-tight">
            Fah Adam's &amp; Ramatou
          </h1>
        </div>

        {/* Central Royal Golden Wax Seal */}
        <div className="my-2 sm:my-3">
          <WaxSeal isOpening={isOpening} onClick={onOpen} />
        </div>

        {/* Bottom Touch Indicator Prompt */}
        <div
          className={`mt-6 sm:mt-8 transition-all duration-500 delay-150 ${
            isOpening ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#112A7A] text-[#FDF3E3] border-2 border-[#E0A02A]/80 shadow-2xl backdrop-blur-md group hover:bg-[#1B358F] transition-all font-serif-luxury">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0A02A] opacity-90"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D78014]"></span>
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-[0.06em]">
              Touchez l'écran pour ouvrir votre invitation
            </span>
          </div>
        </div>
      </div>

      {/* Golden Light Sweep when opening */}
      {isOpening && (
        <div className="absolute inset-0 z-40 bg-gradient-to-r from-transparent via-[#FDF3E3]/80 to-transparent pointer-events-none animate-light-sweep" />
      )}
    </div>
  );
};
