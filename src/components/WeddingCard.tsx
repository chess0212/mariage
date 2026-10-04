import React, { useState, useEffect } from 'react';
import {
  CornerOrnament,
  OrnamentalDivider,
  HennaHandIcon,
  MosqueAndReceptionIcon,
  AfricanDrumsIcon,
} from './OrnamentalElements';
import {
  WEDDING_EVENTS,
  downloadCalendarFile,
  downloadFullWeddingCalendar,
} from '../utils/calendar';
import { Phone, MessageCircle, Calendar, MapPin, Share2, RotateCcw, Check, Heart } from 'lucide-react';
import luxurySilkBackdropImg from '../assets/images/luxury_silk_backdrop_1791121820283.jpg';

interface WeddingCardProps {
  onReplay: () => void;
}

export const WeddingCard: React.FC<WeddingCardProps> = ({ onReplay }) => {
  // Wedding countdown to November 10, 2026, 09:00:00 GMT
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [copiedLink, setCopiedLink] = useState(false);

  // RSVP Form State
  const [rsvpGuestName, setRsvpGuestName] = useState('');
  const [rsvpAttending, setRsvpAttending] = useState<'yes' | 'no'>('yes');
  const [rsvpGuestsCount, setRsvpGuestsCount] = useState('1');
  const [rsvpContactTarget, setRsvpContactTarget] = useState<'losseni' | 'hassan'>('losseni');

  useEffect(() => {
    const targetDate = new Date('2026-11-10T09:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    const shareText = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nVous êtes cordialement invité(e) au mariage de Fah Adam's & Ramatou.\nLes grandes familles SOUMAHORO et MAÏGA ont l'immense honneur de vous convier à la célébration de leur union.\n\nDécouvrez votre faire-part interactif et le programme complet :\n" + window.location.href;

    const shareData = {
      title: "Mariage de Fah Adam's & Ramatou — Invitation Officielle",
      text: shareText,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled or share unsupported, fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleSendRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = rsvpContactTarget === 'losseni' ? '2250707769741' : '2250172303030';
    const contactName = rsvpContactTarget === 'losseni' ? 'M. Losseni SOUMAHORO' : 'M. Hassan MAÏGA';

    const statusText =
      rsvpAttending === 'yes'
        ? `Je confirme avec joie ma présence (${rsvpGuestsCount} personne(s)).`
        : `Je ne pourrai malheureusement pas être présent(e), mais je transmets toutes mes bénédictions et félicitations aux mariés.`;

    const text = `Assalamu Alaykoum ${contactName},\n\nJe suis ${rsvpGuestName || 'votre invité(e)'}.\nConcernant le mariage de Fah Adam's & Ramatou :\n${statusText}\n\nQu'Allah bénisse cette noble union.`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen py-8 sm:py-14 px-3 sm:px-6 md:px-8 flex flex-col items-center bg-[#FEFEFB] text-[#112A7A]">
      {/* Background Silk Satin Backdrop with Soft Ivory Hue */}
      <div
        className="fixed inset-0 pointer-events-none opacity-25 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${luxurySilkBackdropImg})` }}
      />
      
      {/* Soft Ambient Light in #FEFEFB */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FEFEFB]/90" />

      {/* Main Luxury Wedding Card Container */}
      <main className="relative w-full max-w-3xl bg-[#FEFEFB] rounded-2xl shadow-2xl border-2 border-[#D78014]/50 overflow-hidden my-4 sm:my-8 transition-all">
        
        {/* Double Inner Hairline Gold Border in #D78014 */}
        <div className="absolute inset-2 sm:inset-3 border border-[#D78014]/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-5 border border-[#D78014]/25 rounded-lg pointer-events-none" />

        {/* 4 Corner Arabesque Ornaments in #D78014 */}
        <CornerOrnament position="top-left" className="absolute top-2 left-2 sm:top-4 sm:left-4" />
        <CornerOrnament position="top-right" className="absolute top-2 right-2 sm:top-4 sm:right-4" />
        <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4" />
        <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4" />

        {/* Card Content Section */}
        <div className="relative z-10 px-5 sm:px-10 md:px-14 py-12 sm:py-16 text-center">

          {/* SECTION 1: HEADER CALLIGRAPHY IN AMIRI & #D78014 */}
          <header className="space-y-4 max-w-xl mx-auto">
            {/* Bismillah in Amiri */}
            <div className="pt-2">
              <span className="font-arabic font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#D78014] leading-relaxed drop-shadow-xs select-none">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </div>

            {/* Al-Hamdulillah in Amiri */}
            <div>
              <span className="font-arabic font-bold text-2xl sm:text-3xl md:text-4xl text-[#D78014] leading-relaxed drop-shadow-xs select-none">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </span>
            </div>

            {/* Translation in Italics (Cormorant Garamond Medium, High Legibility, #112A7A) */}
            <p className="font-serif-luxury italic text-base sm:text-lg md:text-xl text-[#112A7A] px-4 leading-relaxed font-medium tracking-[0.02em]">
              « Au nom d'Allah le tout miséricordieux, le très miséricordieux, louange à Allah, Seigneur de l'univers. »
            </p>

            <OrnamentalDivider />
          </header>

          {/* SECTION 2: FAMILY PRESENTATION (Cormorant Garamond Medium, Highly Legible, #112A7A) */}
          <section className="my-8 sm:my-10 max-w-2xl mx-auto space-y-4 text-center">
            <p className="font-serif-luxury text-base sm:text-lg md:text-xl leading-relaxed text-[#112A7A] font-medium tracking-[0.03em]">
              La grande famille <span className="font-semibold text-[#112A7A]">SOUMAHORO</span>,{' '}
              <span className="font-semibold">COULIBALY</span>, <span className="font-semibold">SORO</span>,{' '}
              <span className="font-semibold">DOUMBIA</span>, <span className="font-semibold">KAMAGATE</span>,{' '}
              <span className="font-semibold">BAH</span>, <span className="font-semibold">TRAORÉ</span>,{' '}
              <span className="font-semibold">YÉO</span>, <span className="font-semibold">BAKAYOKO</span>,{' '}
              <span className="font-semibold">CAMARA</span> et alliés
            </p>

            <p className="font-serif-luxury text-sm sm:text-base uppercase tracking-[0.25em] text-[#D78014] font-semibold">
              — &amp; —
            </p>

            <p className="font-serif-luxury text-base sm:text-lg md:text-xl leading-relaxed text-[#112A7A] font-medium tracking-[0.03em]">
              Et la grande famille <span className="font-semibold text-[#112A7A]">MAÏGA</span> (ABIDJAN et BAMAKO),{' '}
              <span className="font-semibold">CISSE</span>, <span className="font-semibold">GANABA</span>,{' '}
              <span className="font-semibold">GUINDO</span>, <span className="font-semibold">SIBE</span>,{' '}
              <span className="font-semibold tracking-[0.04em] text-[#112A7A]">DICKO DIALLO</span> et alliés.
            </p>

            <div className="pt-4">
              <p className="font-serif-luxury italic text-lg sm:text-xl md:text-2xl text-[#D78014] font-semibold leading-relaxed">
                Ont l'immense plaisir de vous convier au mariage religieux de leurs enfants
              </p>
            </div>
          </section>

          {/* SECTION 3: BRIDE & GROOM NAMES (GREAT VIBES SCRIPT & #D78014) */}
          <section className="my-10 sm:my-14 py-8 px-4 bg-gradient-to-r from-transparent via-[#FFF9ED] to-transparent rounded-2xl border-y border-[#D78014]/30 shadow-xs">
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-script-calligraphy text-[#D78014] drop-shadow-xs tracking-normal select-none leading-none pt-2">
                Fah Adam's
              </h2>

              <div className="flex items-center justify-center gap-4 my-2">
                <span className="h-[1.5px] w-12 sm:w-20 bg-[#D78014]/50" />
                <span className="text-3xl sm:text-4xl font-serif-luxury text-[#D78014] italic font-medium">
                  &amp;
                </span>
                <span className="h-[1.5px] w-12 sm:w-20 bg-[#D78014]/50" />
              </div>

              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-script-calligraphy text-[#D78014] drop-shadow-xs tracking-normal select-none leading-none pb-2">
                Ramatou
              </h2>
            </div>
          </section>

          {/* WEDDING COUNTDOWN TIMER */}
          <section className="my-8 max-w-md mx-auto">
            <div className="py-4 px-5 rounded-xl bg-[#FEFEFB] border border-[#D78014]/40 shadow-xs">
              <p className="font-serif-luxury text-sm tracking-[0.2em] uppercase text-[#D78014] font-bold mb-3">
                Compte à Rebours Nuptial
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#D78014]/30 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#112A7A] tabular-nums">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs text-[#D78014] font-semibold uppercase mt-0.5">Jours</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#D78014]/30 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#112A7A] tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-[#D78014] font-semibold uppercase mt-0.5">Heures</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#D78014]/30 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#112A7A] tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-[#D78014] font-semibold uppercase mt-0.5">Min</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#D78014]/30 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#D78014] tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-[#D78014] font-semibold uppercase mt-0.5">Sec</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: PROGRAMME DU MARIAGE — VERTICAL TIMELINE */}
          <section className="my-12 sm:my-16 text-left">
            <div className="text-center mb-10">
              <span className="font-serif-luxury text-sm tracking-[0.25em] uppercase text-[#D78014] font-bold">
                Déroulement des Festivités
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#112A7A] font-bold mt-1">
                Programme du Mariage
              </h3>
              <OrnamentalDivider className="my-3" />
            </div>

            {/* Timeline container */}
            <div className="relative max-w-xl mx-auto pl-4 sm:pl-8">
              {/* Vertical connecting line in #D78014 */}
              <div className="absolute left-[27px] sm:left-[43px] top-6 bottom-6 w-[2px] bg-[#D78014]/60" />

              <div className="space-y-8 sm:space-y-10">
                {/* ÉVÉNEMENT 1 — MISE EN CHAMBRE */}
                <div className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Left Circle Icon */}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D78014] shadow-md flex items-center justify-center p-2 sm:p-2.5 transition-transform duration-300 group-hover:scale-105">
                    <HennaHandIcon className="w-full h-full text-[#D78014]" />
                  </div>

                  {/* Right Event Content */}
                  <div className="flex-1 bg-white rounded-xl p-5 sm:p-6 border border-[#D78014]/40 shadow-xs hover:border-[#D78014] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs sm:text-sm font-serif-luxury font-bold tracking-[0.1em] text-[#D78014] uppercase">
                        Événement 1
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#112A7A] tabular-nums bg-[#D78014]/20 px-3 py-0.5 rounded-full">
                        09H00
                      </span>
                    </div>

                    {/* Date Title in Cormorant Garamond Bold & #D78014 */}
                    <p className="text-sm sm:text-base font-serif-luxury font-bold text-[#D78014] uppercase tracking-[0.06em] mt-0.5">
                      MARDI 10 NOVEMBRE 2026
                    </p>

                    <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#112A7A] mt-1">
                      09H00 : Mise en chambre
                    </h4>

                    <p className="flex items-center gap-2 text-sm sm:text-base text-[#112A7A] mt-2 font-serif-luxury font-medium">
                      <MapPin className="w-4 h-4 text-[#D78014] flex-shrink-0" />
                      <span>Angré cité star 11 villa 71</span>
                    </p>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#D78014]/25 font-serif-luxury">
                      <a
                        href="https://maps.google.com/?q=Angre+cite+star+11+Abidjan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Itinéraire GPS</span>
                      </a>
                      <span className="text-sm text-[#D78014]/50">·</span>
                      <button
                        onClick={() => downloadCalendarFile(WEDDING_EVENTS[0])}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Ajouter à l'agenda</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ÉVÉNEMENT 2 — MARIAGE RELIGIEUX & RÉCEPTION (MÊME JOUR : JEUDI 12 NOVEMBRE 2026) */}
                <div className="relative flex items-start gap-4 sm:gap-6 group">
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D78014] shadow-md flex items-center justify-center p-2 sm:p-2.5 transition-transform duration-300 group-hover:scale-105">
                    <MosqueAndReceptionIcon className="w-full h-full text-[#D78014]" />
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-5 sm:p-6 border border-[#D78014]/40 shadow-xs hover:border-[#D78014] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs sm:text-sm font-serif-luxury font-bold tracking-[0.1em] text-[#D78014] uppercase">
                        Événement 2 — Mariage Religieux &amp; Réception
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#112A7A] tabular-nums bg-[#D78014]/20 px-3 py-0.5 rounded-full">
                        JEUDI 12 NOVEMBRE 2026
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-serif-luxury font-bold text-[#D78014] uppercase tracking-[0.06em] mt-0.5">
                      JEUDI 12 NOVEMBRE 2026
                    </p>

                    {/* Part 1: Mariage religieux (10H30) */}
                    <div className="mt-3.5 pb-3.5 border-b border-[#D78014]/20">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D78014]" />
                        <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#112A7A]">
                          10H30 : Mariage religieux
                        </h4>
                      </div>

                      <p className="flex items-center gap-2 text-sm sm:text-base text-[#112A7A] mt-1.5 font-serif-luxury font-medium pl-4">
                        <MapPin className="w-4 h-4 text-[#D78014] flex-shrink-0" />
                        <span>Mosquée Salam du Plateau</span>
                      </p>

                      <div className="pl-4 mt-2">
                        <a
                          href="https://maps.google.com/?q=Grande+Mosquee+Salam+du+Plateau+Abidjan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Itinéraire GPS Mosquée</span>
                        </a>
                      </div>
                    </div>

                    {/* Part 2: Réception (12H00) */}
                    <div className="mt-3.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D78014]" />
                        <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#112A7A]">
                          12H00 : Réception
                        </h4>
                      </div>

                      <p className="flex items-center gap-2 text-sm sm:text-base text-[#112A7A] mt-1.5 font-serif-luxury font-medium pl-4">
                        <MapPin className="w-4 h-4 text-[#D78014] flex-shrink-0" />
                        <span>Espace Jeny's | Angré carrefour King Déco</span>
                      </p>

                      <div className="pl-4 mt-2">
                        <a
                          href="https://maps.google.com/?q=Espace+Jenys+Angre+carrefour+King+Deco+Abidjan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Itinéraire GPS Espace Jeny's</span>
                        </a>
                      </div>
                    </div>

                    {/* Unified Calendar Button for Thursday Nov 12 */}
                    <div className="mt-4 pt-3 border-t border-[#D78014]/25 font-serif-luxury">
                      <button
                        onClick={() => downloadCalendarFile(WEDDING_EVENTS[1])}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Ajouter la journée du 12 novembre à l'agenda</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ÉVÉNEMENT 3 — SORTIE DE LA MARIÉE */}
                <div className="relative flex items-start gap-4 sm:gap-6 group">
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#D78014] shadow-md flex items-center justify-center p-2 sm:p-2.5 transition-transform duration-300 group-hover:scale-105">
                    <AfricanDrumsIcon className="w-full h-full text-[#D78014]" />
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-5 sm:p-6 border border-[#D78014]/40 shadow-xs hover:border-[#D78014] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs sm:text-sm font-serif-luxury font-bold tracking-[0.1em] text-[#D78014] uppercase">
                        Événement 3
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#112A7A] tabular-nums bg-[#D78014]/20 px-3 py-0.5 rounded-full">
                        14H00
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-serif-luxury font-bold text-[#D78014] uppercase tracking-[0.06em] mt-0.5">
                      SAMEDI 14 NOVEMBRE 2026
                    </p>

                    <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#112A7A] mt-1">
                      14H00 : Sortie de la mariée
                    </h4>

                    <p className="flex items-center gap-2 text-sm sm:text-base text-[#112A7A] mt-2 font-serif-luxury font-medium">
                      <MapPin className="w-4 h-4 text-[#D78014] flex-shrink-0" />
                      <span>Terrain de la cité star 11</span>
                    </p>

                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#D78014]/25 font-serif-luxury">
                      <a
                        href="https://maps.google.com/?q=Cite+star+11+Angre+Abidjan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Itinéraire GPS</span>
                      </a>
                      <span className="text-sm text-[#D78014]/50">·</span>
                      <button
                        onClick={() => downloadCalendarFile(WEDDING_EVENTS[2])}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D78014] hover:text-[#112A7A] transition-colors cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Ajouter à l'agenda</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master Calendar Download Button */}
              <div className="text-center mt-8 font-serif-luxury">
                <button
                  onClick={downloadFullWeddingCalendar}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FEFEFB] border-2 border-[#D78014]/60 text-sm sm:text-base font-semibold text-[#112A7A] hover:bg-[#112A7A] hover:text-white transition-all shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#D78014]" />
                  <span>Ajouter tout le programme à mon agenda (.ics)</span>
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 5: QURANIC VERSE (AMIRI & #D78014) */}
          <section className="my-12 sm:my-16 py-8 px-6 bg-[#FEFEFB] rounded-2xl border-2 border-[#D78014]/40 shadow-xs relative overflow-hidden">
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 100 24" className="w-24 h-6 text-[#D78014]" fill="currentColor">
                <path d="M50 0 C42 8 30 12 0 12 C30 12 42 16 50 24 C58 16 70 12 100 12 C70 12 58 8 50 0 Z" opacity="0.9" />
              </svg>
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <p className="font-arabic text-4xl sm:text-5xl text-[#D78014] font-bold tracking-wide">
                « وَجَعَلْنَاكُمْ أَزْوَاجًا »
              </p>

              <p className="font-serif-luxury italic text-lg sm:text-xl md:text-2xl text-[#112A7A] font-semibold leading-relaxed">
                « Et Nous vous avons créés par paires. »
              </p>

              <p className="text-sm sm:text-base font-serif-luxury tracking-[0.2em] text-[#D78014] uppercase font-bold">
                Sourate 78 An-Naba, verset 8
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <svg viewBox="0 0 100 24" className="w-24 h-6 text-[#D78014] transform rotate-180" fill="currentColor">
                <path d="M50 0 C42 8 30 12 0 12 C30 12 42 16 50 24 C58 16 70 12 100 12 C70 12 58 8 50 0 Z" opacity="0.9" />
              </svg>
            </div>
          </section>

          {/* SECTION 6: CONFIRMATION DE PRÉSENCE — RSVP */}
          <section className="my-10 sm:my-14 p-6 sm:p-8 rounded-2xl bg-[#FEFEFB] border-2 border-[#D78014]/50 shadow-md relative">
            
            {/* Plaque Header */}
            <div className="text-center space-y-1 mb-8">
              <span className="font-serif-luxury text-sm sm:text-base tracking-[0.25em] text-[#D78014] uppercase font-bold block">
                POUR CONFIRMER VOTRE PRÉSENCE
              </span>
              <p className="font-serif-luxury text-base sm:text-lg text-[#112A7A] italic font-semibold">
                VEUILLEZ CONTACTER
              </p>
              <div className="w-20 h-[2px] bg-[#D78014] mx-auto mt-2" />
            </div>

            {/* 2 Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 text-left">
              {/* Contact 1: SOUMAHORO Losseni */}
              <div className="p-5 rounded-xl bg-white border-2 border-[#D78014]/30 shadow-xs hover:border-[#D78014] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D78014]" />
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#112A7A]">
                    SOUMAHORO Losseni
                  </h4>
                </div>

                <p className="text-base sm:text-lg font-serif-luxury font-bold text-[#D78014] tabular-nums tracking-wide mb-3 pl-4">
                  +225 07 07 769 741
                </p>

                <div className="flex items-center gap-2 pt-2 border-t border-[#D78014]/25 font-serif-luxury">
                  <a
                    href="tel:+2250707769741"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#112A7A] text-white text-sm font-semibold hover:bg-[#1B358F] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#E0A02A]" />
                    <span>Appeler</span>
                  </a>
                  <a
                    href="https://wa.me/2250707769741?text=Assalamu%20Alaykoum%20Losseni%2C%20je%20vous%20contacte%20concernant%20le%20mariage%20de%20Fah%20Adam's%20%26%20Ramatou."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Contact 2: MAÏGA Hassan */}
              <div className="p-5 rounded-xl bg-white border-2 border-[#D78014]/30 shadow-xs hover:border-[#D78014] transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D78014]" />
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#112A7A]">
                    MAÏGA Hassan
                  </h4>
                </div>

                <p className="text-base sm:text-lg font-serif-luxury font-bold text-[#D78014] tabular-nums tracking-wide mb-3 pl-4">
                  +225 01 72 303 030
                </p>

                <div className="flex items-center gap-2 pt-2 border-t border-[#D78014]/25 font-serif-luxury">
                  <a
                    href="tel:+2250172303030"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#112A7A] text-white text-sm font-semibold hover:bg-[#1B358F] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#E0A02A]" />
                    <span>Appeler</span>
                  </a>
                  <a
                    href="https://wa.me/2250172303030?text=Assalamu%20Alaykoum%20Hassan%2C%20je%20vous%20contacte%20concernant%20le%20mariage%20de%20Fah%20Adam's%20%26%20Ramatou."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Quick RSVP Form for WhatsApp */}
            <div className="border-t border-[#D78014]/25 pt-6 text-left">
              <div className="text-center mb-4">
                <h5 className="font-serif-luxury font-bold text-lg sm:text-xl text-[#112A7A]">
                  Réponse Rapide par WhatsApp
                </h5>
                <p className="text-sm text-[#112A7A] font-serif-luxury font-medium">
                  Remplissez ce formulaire pour envoyer votre confirmation directement
                </p>
              </div>

              <form onSubmit={handleSendRsvp} className="space-y-4 max-w-lg mx-auto font-serif-luxury">
                <div>
                  <label htmlFor="rsvpName" className="block text-sm font-semibold text-[#112A7A] mb-1">
                    Votre Nom &amp; Prénom
                  </label>
                  <input
                    id="rsvpName"
                    type="text"
                    required
                    placeholder="Ex : M. / Mme Touré Amadou"
                    value={rsvpGuestName}
                    onChange={(e) => setRsvpGuestName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#D78014]/40 bg-white text-base text-[#112A7A] font-medium focus:outline-none focus:ring-2 focus:ring-[#D78014]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-[#112A7A] mb-1">
                      Votre Présence
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setRsvpAttending('yes')}
                        className={`flex-1 py-2.5 px-3 text-sm font-semibold rounded-lg border-2 transition-all cursor-pointer ${
                          rsvpAttending === 'yes'
                            ? 'bg-[#112A7A] text-white border-[#112A7A] shadow-xs'
                            : 'bg-white text-[#112A7A] border-[#D78014]/40 hover:border-[#D78014]'
                        }`}
                      >
                        Je serai présent(e)
                      </button>
                      <button
                        type="button"
                        onClick={() => setRsvpAttending('no')}
                        className={`flex-1 py-2.5 px-3 text-sm font-semibold rounded-lg border-2 transition-all cursor-pointer ${
                          rsvpAttending === 'no'
                            ? 'bg-[#D78014] text-white border-[#D78014] shadow-xs'
                            : 'bg-white text-[#112A7A] border-[#D78014]/40 hover:border-[#D78014]'
                        }`}
                      >
                        Empêché(e)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rsvpCount" className="block text-sm font-semibold text-[#112A7A] mb-1">
                      Nombre de personnes
                    </label>
                    <select
                      id="rsvpCount"
                      value={rsvpGuestsCount}
                      onChange={(e) => setRsvpGuestsCount(e.target.value)}
                      disabled={rsvpAttending === 'no'}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D78014]/40 bg-white text-sm text-[#112A7A] font-medium focus:outline-none focus:ring-2 focus:ring-[#D78014]"
                    >
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5+">5 personnes et plus</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#112A7A] mb-1">
                    Envoyer la confirmation à
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRsvpContactTarget('losseni')}
                      className={`py-2.5 px-3 text-sm font-bold rounded-lg border-2 text-center transition-all cursor-pointer ${
                        rsvpContactTarget === 'losseni'
                          ? 'bg-[#D78014] text-white border-[#D78014] shadow-xs'
                          : 'bg-white text-[#112A7A] border-[#D78014]/40 hover:border-[#D78014]'
                      }`}
                    >
                      SOUMAHORO Losseni
                    </button>
                    <button
                      type="button"
                      onClick={() => setRsvpContactTarget('hassan')}
                      className={`py-2.5 px-3 text-sm font-bold rounded-lg border-2 text-center transition-all cursor-pointer ${
                        rsvpContactTarget === 'hassan'
                          ? 'bg-[#D78014] text-white border-[#D78014] shadow-xs'
                          : 'bg-white text-[#112A7A] border-[#D78014]/40 hover:border-[#D78014]'
                      }`}
                    >
                      MAÏGA Hassan
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#25D366] text-white text-sm sm:text-base font-bold hover:bg-[#1EBE5D] shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer font-serif-luxury"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Transmettre ma confirmation via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* FOOTER ACTIONS & REPLAY BUTTON */}
          <footer className="mt-12 pt-8 border-t border-[#D78014]/25 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-serif-luxury">
            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FEFEFB] border-2 border-[#D78014]/50 text-sm sm:text-base font-semibold text-[#112A7A] hover:bg-[#112A7A] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#D78014]" />
              <span>Revoir l'ouverture de l'invitation</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FEFEFB] border-2 border-[#D78014]/50 text-sm sm:text-base font-semibold text-[#112A7A] hover:bg-[#112A7A] hover:text-white transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Lien copié !</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#D78014]" />
                  <span>Partager l'invitation</span>
                </>
              )}
            </button>
          </footer>

          {/* Ending Blessed Wish */}
          <div className="mt-8 text-center text-sm sm:text-base text-[#D78014] font-serif-luxury italic font-medium flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-[#D78014] fill-[#D78014]/30" />
            <span>« Bârakallâhu lakumâ wa bâraka 'alaykumâ wa jama'a baynakumâ fî khayr »</span>
          </div>
        </div>
      </main>
    </div>
  );
};
