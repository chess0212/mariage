/**
 * Luxury Ambient Audio Synthesizer (Web Audio API)
 * Synthesizes serene, peaceful harp & oud ambient arpeggios
 * Zero external audio files, zero network delay, plays smoothly on user interaction.
 */

class WeddingAudioManager {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  private pentatonicScale = [
    220.00, // A3
    246.94, // B3
    293.66, // D4
    329.63, // E4
    369.99, // F#4
    440.00, // A4
    493.88, // B4
    587.33, // D5
    659.25, // E5
    739.99, // F#5
    880.00, // A5
  ];

  // Gentle meditative melody arpeggio pattern
  private melodyIndices = [
    0, 2, 4, 7, 5, 4, 2, 3,
    1, 3, 5, 8, 6, 5, 3, 4,
    0, 4, 7, 9, 7, 4, 2, 0,
    2, 5, 8, 10, 8, 5, 4, 2,
  ];
  private step = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playPluckedNote(freq: number, duration = 3.2) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Primary fundamental oscillator (warm sine-triangle hybrid)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    // Subtle octave harmonic for harp-like sparkle
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Warm resonant acoustic filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(350, now + duration * 0.8);

    // Harp / Santur pluck envelope
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.28, now + 0.03); // Quick soft attack
    noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.5); // Decay
    noteGain.gain.exponentialRampToValueAtTime(0.00001, now + duration); // Long tail

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public start() {
    if (this.isPlaying) return;
    try {
      this.initContext();
      this.isPlaying = true;
      this.notify();

      // Play introductory resonant chord
      this.playPluckedNote(this.pentatonicScale[0], 4.5);
      this.playPluckedNote(this.pentatonicScale[2], 4.5);
      this.playPluckedNote(this.pentatonicScale[4], 4.5);

      this.step = 0;
      this.intervalId = window.setInterval(() => {
        if (!this.isPlaying) return;
        const noteIndex = this.melodyIndices[this.step % this.melodyIndices.length];
        const freq = this.pentatonicScale[noteIndex % this.pentatonicScale.length];
        this.playPluckedNote(freq, 3.0);

        // Occasional harmonic bass drone note
        if (this.step % 8 === 0) {
          this.playPluckedNote(this.pentatonicScale[0] / 2, 5.0);
        } else if (this.step % 8 === 4) {
          this.playPluckedNote(this.pentatonicScale[2] / 2, 5.0);
        }

        this.step++;
      }, 750);
    } catch {
      this.isPlaying = false;
      this.notify();
    }
  }

  public pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.notify();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioManager();
