import React, { useEffect, useState } from 'react';
import { weddingAudio } from '../utils/audio';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    weddingAudio.toggle();
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Couper la musique d'ambiance" : "Activer la musique d'ambiance"}
        className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-md cursor-pointer font-serif-luxury ${
          isPlaying
            ? 'bg-[#112A7A]/95 text-[#FDF3E3] border-[#D78014]/60 shadow-[#D78014]/20'
            : 'bg-white/90 text-[#112A7A] border-[#D78014]/30 hover:bg-white'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#D78014] animate-pulse" />
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-2 bg-[#D78014] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-3 bg-[#D78014] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-1.5 bg-[#D78014] animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-xs font-normal pr-1 hidden sm:inline">Musique</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#D78014]" />
            <span className="text-xs font-normal pr-1 text-[#112A7A]/80 hidden sm:inline">Musique</span>
          </>
        )}
      </button>
    </div>
  );
};
