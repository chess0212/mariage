import React from 'react';

/**
 * High-definition luxury vector ornamental components
 * Expressive illustrations for:
 * 1. Henné (Main de mariée ornée de dentelle mehndi détaillée & bijoux)
 * 2. Mosquée & Réception (Architecture monumentale avec dôme, minarets, arcades & banquet)
 * 3. Tam-tams africains (Djembes traditionnels sculptés, cordages & ondes festives)
 * Palette: #D78014, #E0A02A, #B87300, #FDF3E3
 */

export const CornerOrnament: React.FC<{ className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  className = '',
  position = 'top-left',
}) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 md:w-16 md:h-16 text-[#D78014] pointer-events-none transform ${rotation} ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6 L32 6 C32 8 30 10 28 10 C20 10 10 20 10 28 C10 30 8 32 6 32 Z"
        opacity="0.85"
      />
      <path
        d="M8 8 L8 45 C10 42 13 41 15 43 C18 46 16 52 12 52 L12 20 C12 15 15 12 20 12 L52 12 C52 16 46 18 43 15 C41 13 42 10 45 8 Z"
        opacity="0.6"
      />
      <circle cx="8" cy="8" r="3" fill="#E0A02A" />
      <circle cx="28" cy="18" r="2" fill="#E0A02A" opacity="0.8" />
      <circle cx="18" cy="28" r="2" fill="#E0A02A" opacity="0.8" />
      <path
        d="M15 15 Q26 22 24 34 Q34 24 22 26 Z"
        opacity="0.7"
        fill="#B87300"
      />
      <path
        d="M18 18 Q38 20 40 40 Q20 38 18 18 Z"
        fill="none"
        stroke="#E0A02A"
        strokeWidth="1.2"
        opacity="0.75"
      />
      <path
        d="M2 2 L90 2 C60 12 12 60 2 90 Z"
        fill="none"
        stroke="#D78014"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.4"
      />
    </svg>
  );
};

export const OrnamentalDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-5 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 md:w-40 bg-gradient-to-r from-transparent via-[#D78014]/60 to-[#E0A02A]" />
      
      {/* Central Islamic Palmette Medallion in #D78014 */}
      <svg
        viewBox="0 0 60 24"
        className="w-12 h-5 text-[#D78014] flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 2 C33 7, 39 10, 48 10 C39 12, 33 15, 30 22 C27 15, 21 12, 12 10 C21 10, 27 7, 30 2 Z"
          fill="url(#goldGradDoc)"
        />
        <circle cx="30" cy="11" r="2" fill="#FDF3E3" />
        <circle cx="12" cy="10" r="1.5" fill="#E0A02A" />
        <circle cx="48" cy="10" r="1.5" fill="#E0A02A" />
        <circle cx="5" cy="10" r="1" fill="#D78014" />
        <circle cx="55" cy="10" r="1" fill="#D78014" />
        <defs>
          <linearGradient id="goldGradDoc" x1="0" y1="0" x2="60" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B87300" />
            <stop offset="0.5" stopColor="#E0A02A" />
            <stop offset="1" stopColor="#D78014" />
          </linearGradient>
        </defs>
      </svg>

      <div className="h-[1px] w-16 sm:w-28 md:w-40 bg-gradient-to-l from-transparent via-[#D78014]/60 to-[#E0A02A]" />
    </div>
  );
};

// 1. EXPRESSIVE HENNA BRIDAL HAND (Mise en chambre)
// Detailed hand with lace mehndi mandala, intricate finger caps & bridal gold bangles
export const HennaHandIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hennaGoldMain" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5C678" />
        <stop offset="0.4" stopColor="#E0A02A" />
        <stop offset="0.75" stopColor="#D78014" />
        <stop offset="1" stopColor="#945B00" />
      </linearGradient>
      <filter id="hennaGlow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#B87300" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Hand Silhouette in Fine Gold */}
    <path
      d="M21 24V11a3.5 3.5 0 0 1 7 0v11M28 17V7a3.5 3.5 0 0 1 7 0v21M35 19V11a3.5 3.5 0 0 1 7 0v17M14 31v-9a3.5 3.5 0 0 1 7 0v13M42 27v-5a3.5 3.5 0 0 1 7 0v15c0 12-8 21-20 21s-19-9-19-20v-7"
      stroke="url(#hennaGoldMain)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#hennaGoldMain)"
      fillOpacity="0.12"
      filter="url(#hennaGlow)"
    />

    {/* Finger Mehndi Caps (Lace tips) */}
    {/* Thumb */}
    <path d="M14 25c2-2 5-2 7 0M15.5 28c1.5-1 3.5-1 5 0" stroke="url(#hennaGoldMain)" strokeWidth="1.2" />
    <circle cx="17.5" cy="23" r="1.2" fill="#D78014" />
    
    {/* Index */}
    <path d="M21 14c2-2 5-2 7 0M22.5 17c1.5-1 3.5-1 5 0" stroke="url(#hennaGoldMain)" strokeWidth="1.2" />
    <circle cx="24.5" cy="12" r="1.2" fill="#D78014" />

    {/* Middle */}
    <path d="M28 10c2-2 5-2 7 0M29.5 13c1.5-1 3.5-1 5 0" stroke="url(#hennaGoldMain)" strokeWidth="1.2" />
    <circle cx="31.5" cy="8" r="1.2" fill="#D78014" />

    {/* Ring */}
    <path d="M35 14c2-2 5-2 7 0M36.5 17c1.5-1 3.5-1 5 0" stroke="url(#hennaGoldMain)" strokeWidth="1.2" />
    <circle cx="38.5" cy="12" r="1.2" fill="#D78014" />

    {/* Little Finger */}
    <path d="M42 24c2-1.5 5-1.5 7 0" stroke="url(#hennaGoldMain)" strokeWidth="1.2" />
    <circle cx="45.5" cy="23" r="1.2" fill="#D78014" />

    {/* Central Ornate Mehndi Mandala Rosette */}
    <g transform="translate(32, 40)">
      <circle cx="0" cy="0" r="7.5" stroke="url(#hennaGoldMain)" strokeWidth="1.4" fill="url(#hennaGoldMain)" fillOpacity="0.25" />
      <circle cx="0" cy="0" r="4" stroke="url(#hennaGoldMain)" strokeWidth="1" />
      <circle cx="0" cy="0" r="1.5" fill="#D78014" />
      
      {/* 8 Petals radiating from mandala */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          <path d="M0 -7.5 Q-2.5 -10 0 -12 Q2.5 -10 0 -7.5" fill="#D78014" />
          <circle cx="0" cy="-13" r="0.7" fill="#F5C678" />
        </g>
      ))}

      {/* Trailing paisley flourishes towards wrist */}
      <path d="M-6 8 Q-3 12 0 14 Q3 12 6 8" stroke="url(#hennaGoldMain)" strokeWidth="1.2" fill="none" />
      <path d="M0 -7.5 L0 -17" stroke="url(#hennaGoldMain)" strokeWidth="1" strokeDasharray="1 1.5" />
    </g>

    {/* Bridal Gold Bangles / Wrist Cuff */}
    <g transform="translate(0, 56)">
      <path d="M19 0 Q32 3 45 0" stroke="url(#hennaGoldMain)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M21 3.5 Q32 6.5 43 3.5" stroke="url(#hennaGoldMain)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="7.5" r="1.5" fill="#D78014" />
      <circle cx="26" cy="6.5" r="1" fill="#E0A02A" />
      <circle cx="38" cy="6.5" r="1" fill="#E0A02A" />
    </g>

    {/* Floating blessing sparkles */}
    <circle cx="10" cy="18" r="1.2" fill="#E0A02A" />
    <circle cx="53" cy="16" r="1.5" fill="#E0A02A" />
    <circle cx="51" cy="46" r="1.2" fill="#E0A02A" />
  </svg>
);

// 2. EXPRESSIVE MOSQUE (Mosquée Salam du Plateau / Mariage Religieux)
// Grand Islamic dome, crescent finials, towering minarets, Moorish polylobed portal & stepped base
export const MosqueIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mosqueGoldExpressive" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5C678" />
        <stop offset="0.35" stopColor="#E0A02A" />
        <stop offset="0.75" stopColor="#D78014" />
        <stop offset="1" stopColor="#945B00" />
      </linearGradient>
    </defs>

    {/* Architectural Plinth / Stepped Base */}
    <path d="M4 56h56M8 53h48" stroke="url(#mosqueGoldExpressive)" strokeWidth="2" strokeLinecap="round" />

    {/* Central Monumental Grand Dome */}
    <path
      d="M32 11c-10 6-15 15-15 23h30c0-8-5-17-15-23z"
      fill="url(#mosqueGoldExpressive)"
      fillOpacity="0.22"
      stroke="url(#mosqueGoldExpressive)"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Fluted ribs on dome */}
    <path d="M32 11v23M26 15c-3 5-4 11-4 19M38 15c3 5 4 11 4 19" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.2" opacity="0.7" />

    {/* Dome Finial & Crescent Moon */}
    <path d="M32 5v6" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M30.5 5a2.5 2.5 0 1 1 3 2.5" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Side Small Domes */}
    <path
      d="M17 26c-4 3-6 6.5-6 10h12c0-3.5-2-7-6-10z"
      fill="url(#mosqueGoldExpressive)"
      fillOpacity="0.18"
      stroke="url(#mosqueGoldExpressive)"
      strokeWidth="1.5"
    />
    <path d="M17 23v3" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.2" />

    <path
      d="M47 26c-4 3-6 6.5-6 10h12c0-3.5-2-7-6-10z"
      fill="url(#mosqueGoldExpressive)"
      fillOpacity="0.18"
      stroke="url(#mosqueGoldExpressive)"
      strokeWidth="1.5"
    />
    <path d="M47 23v3" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.2" />

    {/* Main Mosque Sanctuary Wall & Portal */}
    <rect x="17" y="34" width="30" height="19" fill="url(#mosqueGoldExpressive)" fillOpacity="0.1" stroke="url(#mosqueGoldExpressive)" strokeWidth="2" />
    
    {/* Polylobed Islamic Arch Entrance */}
    <path
      d="M26 53v-9c0-3.3 2.7-6 6-6s6 2.7 6 6v9"
      fill="url(#mosqueGoldExpressive)"
      fillOpacity="0.4"
      stroke="url(#mosqueGoldExpressive)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Inner Mihrab Arch Point */}
    <path d="M32 38v3" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Left Minaret (Tall, architectural with balcony & spire) */}
    <path d="M7 23h5v30H7z" fill="url(#mosqueGoldExpressive)" fillOpacity="0.18" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.8" />
    {/* Balcony / Shurfa */}
    <path d="M5 23h9" stroke="url(#mosqueGoldExpressive)" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M6 37h7" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.4" strokeLinecap="round" />
    {/* Minaret Top Spire & Crescent */}
    <path d="M9.5 12l2.5 11h-5l2.5-11z" fill="url(#mosqueGoldExpressive)" fillOpacity="0.3" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.6" />
    <path d="M9.5 8v4M8.5 8a1.5 1.5 0 1 1 2 1.5" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.2" strokeLinecap="round" />
    {/* Minaret windows */}
    <line x1="9.5" y1="28" x2="9.5" y2="32" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="9.5" y1="43" x2="9.5" y2="47" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Right Minaret */}
    <path d="M52 23h5v30h-5z" fill="url(#mosqueGoldExpressive)" fillOpacity="0.18" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.8" />
    <path d="M50 23h9" stroke="url(#mosqueGoldExpressive)" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M51 37h7" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M54.5 12l2.5 11h-5l2.5-11z" fill="url(#mosqueGoldExpressive)" fillOpacity="0.3" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.6" />
    <path d="M54.5 8v4M53.5 8a1.5 1.5 0 1 1 2 1.5" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="54.5" y1="28" x2="54.5" y2="32" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="54.5" y1="43" x2="54.5" y2="47" stroke="url(#mosqueGoldExpressive)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// COMBINED MOSQUE & BANQUET RECEPTION (Pour la journée complète du Jeudi 12 Novembre)
export const MosqueAndReceptionIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 68 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="combGoldExp" x1="4" y1="4" x2="64" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5C678" />
        <stop offset="0.35" stopColor="#E0A02A" />
        <stop offset="0.75" stopColor="#D78014" />
        <stop offset="1" stopColor="#945B00" />
      </linearGradient>
    </defs>

    {/* Left Side: Mosque Silhouette with Dome & Minaret */}
    <g transform="translate(-2, 2)">
      <path d="M4 52h26" stroke="url(#combGoldExp)" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Minaret */}
      <path d="M6 24h4.5v28H6z" fill="url(#combGoldExp)" fillOpacity="0.15" stroke="url(#combGoldExp)" strokeWidth="1.6" />
      <path d="M4.5 24h7.5" stroke="url(#combGoldExp)" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.2 13l2.2 11H6l2.2-11z" fill="url(#combGoldExp)" fillOpacity="0.3" stroke="url(#combGoldExp)" strokeWidth="1.4" />
      <path d="M8.2 9v4M7.2 9a1.5 1.5 0 1 1 2 1.5" stroke="url(#combGoldExp)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Dome */}
      <path
        d="M22 17c-6.5 4-10 10-10 16h20c0-6-3.5-12-10-16z"
        fill="url(#combGoldExp)"
        fillOpacity="0.22"
        stroke="url(#combGoldExp)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M22 12v5M21 12a1.8 1.8 0 1 1 2 1.8" stroke="url(#combGoldExp)" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 33v19h18V33" fill="url(#combGoldExp)" fillOpacity="0.1" stroke="url(#combGoldExp)" strokeWidth="1.8" />
      <path d="M17 52v-7a4 4 0 0 1 8 0v7" fill="url(#combGoldExp)" fillOpacity="0.4" stroke="url(#combGoldExp)" strokeWidth="1.8" />
    </g>

    {/* Right Side: Banquet Reception Cloche & Feast Server */}
    <g transform="translate(24, 6)">
      {/* Serving Platter Base */}
      <path d="M12 48h28M15 45h22" stroke="url(#combGoldExp)" strokeWidth="2.2" strokeLinecap="round" />
      
      {/* Domed Cloche Cover */}
      <path
        d="M17 45c1.5-14 8-22 16-22s14.5 8 16 22H17z"
        fill="url(#combGoldExp)"
        fillOpacity="0.25"
        stroke="url(#combGoldExp)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Handle Finial */}
      <circle cx="33" cy="20" r="3" stroke="url(#combGoldExp)" strokeWidth="2" fill="url(#combGoldExp)" />
      
      {/* Decorative filigree rib on cloche */}
      <path d="M27 45c1-8 3-14 6-18M39 45c-1-8-3-14-6-18" stroke="url(#combGoldExp)" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />

      {/* Delicious Culinary Steam & Festive Sparkles */}
      <path d="M29 13c-1.5-2.5 1-4.5 1-7" stroke="url(#combGoldExp)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M37 13c1.5-2.5-1-4.5-1-7" stroke="url(#combGoldExp)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="33" cy="4" r="1.5" fill="#E0A02A" />
      <circle cx="43" cy="14" r="1.2" fill="#E0A02A" />
    </g>
  </svg>
);

// 3. EXPRESSIVE AFRICAN TAM-TAMS / DJEMBES (Sortie de la mariée)
// Carved African hardwood drums, goatskin heads, woven tension lacing, dynamic rhythm sound waves & festive sparks
export const AfricanDrumsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="drumGoldExp" x1="4" y1="6" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5C678" />
        <stop offset="0.35" stopColor="#E0A02A" />
        <stop offset="0.75" stopColor="#D78014" />
        <stop offset="1" stopColor="#945B00" />
      </linearGradient>
      <filter id="drumGlow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#B87300" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Primary Large Djembe (Left, tilted dynamically in performance) */}
    <g transform="rotate(-8 22 34)" filter="url(#drumGlow)">
      {/* Drum Head Rim (Goatskin) */}
      <ellipse cx="22" cy="15" rx="13" ry="5.5" stroke="url(#drumGoldExp)" strokeWidth="2.4" fill="url(#drumGoldExp)" fillOpacity="0.35" />
      <ellipse cx="22" cy="15" rx="9" ry="3.5" stroke="url(#drumGoldExp)" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
      <circle cx="22" cy="15" r="2.5" fill="#D78014" />

      {/* Carved Goblet-Shaped Wooden Drum Body */}
      <path
        d="M9 15c1 11 6 18 8 24l-4 17h18l-4-17c2-6 7-13 8-24"
        fill="url(#drumGoldExp)"
        fillOpacity="0.18"
        stroke="url(#drumGoldExp)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Traditional Mali-Weave Diamond Tension Ropes */}
      <path
        d="M10 18l6 18 5-18 5 18 5-18M13 27l18 0M15 36l14 0"
        stroke="url(#drumGoldExp)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Carved African Geometric Base Relief Patterns */}
      <path d="M14 45l3 4 3-4 3 4 3-4 3 4" stroke="url(#drumGoldExp)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 55h20" stroke="url(#drumGoldExp)" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Secondary Companion Drum / Talking Drum (Right, complementary tilt) */}
    <g transform="rotate(10 44 34)">
      {/* Goatskin Drum Head */}
      <ellipse cx="44" cy="18" rx="10.5" ry="4.5" stroke="url(#drumGoldExp)" strokeWidth="2" fill="url(#drumGoldExp)" fillOpacity="0.35" />
      <circle cx="44" cy="18" r="2" fill="#D78014" />

      {/* Carved Drum Shell */}
      <path
        d="M33.5 18c1 9 5 15 6.5 20l-3 14h14l-3-14c1.5-5 5.5-11 6.5-20"
        fill="url(#drumGoldExp)"
        fillOpacity="0.18"
        stroke="url(#drumGoldExp)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Diamond Tension Cord Lacing */}
      <path
        d="M34.5 20l5 15 4-15 4 15 4-15M37 28h14M38.5 35h11"
        stroke="url(#drumGoldExp)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M36 51h14" stroke="url(#drumGoldExp)" strokeWidth="1.8" strokeLinecap="round" />
    </g>

    {/* Dynamic Sound Vibration Waves (Expressing the festive rhythm) */}
    <path
      d="M3 10 Q7 3 14 2M3 16 Q9 8 18 7"
      stroke="url(#drumGoldExp)"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path
      d="M50 4 Q57 6 62 13M46 9 Q55 11 59 18"
      stroke="url(#drumGoldExp)"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
    />

    {/* Celebratory Dancing Music Notes & Golden Sparkles */}
    {/* Music Note 1 */}
    <g transform="translate(29, 2)">
      <ellipse cx="2" cy="5" rx="2" ry="1.4" fill="#D78014" transform="rotate(-20 2 5)" />
      <path d="M3.5 4.5V0h3.5v2" stroke="url(#drumGoldExp)" strokeWidth="1.3" strokeLinecap="round" />
    </g>

    {/* Sparkles */}
    <circle cx="33" cy="1" r="1.5" fill="#F5C678" />
    <circle cx="8" cy="2" r="1.2" fill="#F5C678" />
    <circle cx="61" cy="7" r="1.5" fill="#F5C678" />
    <circle cx="60" cy="27" r="1.2" fill="#E0A02A" />
  </svg>
);
