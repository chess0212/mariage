/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SealedEnvelope } from './components/SealedEnvelope';
import { WeddingCard } from './components/WeddingCard';
import { MusicPlayer } from './components/MusicPlayer';
import { weddingAudio } from './utils/audio';
import { triggerWeddingOpeningFireworks } from './utils/festiveEffects';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Gently trigger ambient audio upon user interaction gesture
    try {
      weddingAudio.start();
    } catch {
      // Audio context policy fallback
    }

    // Trigger golden particles & white petal confetti
    triggerWeddingOpeningFireworks();

    // Allow the 3D gatefold card doors to swing open elegantly
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const handleReplay = () => {
    setIsOpening(false);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FEFEFB] text-[#112A7A] relative font-serif-luxury selection:bg-[#D78014]/25 selection:text-[#112A7A]">
      {/* Floating Ambient Music Control */}
      <MusicPlayer />

      {/* Screen 1: Sealed Card Envelope with 3D Laser-Cut Lace Gatefold Doors */}
      {!isOpen && (
        <SealedEnvelope isOpening={isOpening} onOpen={handleOpen} />
      )}

      {/* Screen 2: Inner Luxury Wedding Card with Full Program, Countdown & RSVP */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none hidden'
        }`}
      >
        {isOpen && <WeddingCard onReplay={handleReplay} />}
      </div>
    </div>
  );
}
