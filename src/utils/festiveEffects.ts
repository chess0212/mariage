import confetti from 'canvas-confetti';

/**
 * Triggers elegant luxury gold dust and white bridal flower petals
 * Using canvas-confetti with soft physics and metallic color palette.
 */
export function triggerWeddingOpeningFireworks() {
  const goldColors = ['#E8C77A', '#C58B2A', '#FAF0CD', '#9A6517', '#FFFFFF'];

  // 1. Initial Central Sparkle Burst
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.5, x: 0.5 },
    colors: goldColors,
    gravity: 0.8,
    scalar: 1.1,
    ticks: 200,
  });

  // 2. Left and Right Gentle Golden Dust Canons
  setTimeout(() => {
    confetti({
      particleCount: 35,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.6 },
      colors: goldColors,
      gravity: 0.7,
      scalar: 0.9,
    });
    confetti({
      particleCount: 35,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.6 },
      colors: goldColors,
      gravity: 0.7,
      scalar: 0.9,
    });
  }, 250);

  // 3. Falling White Petals & Soft Golden Shimmers
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 100,
      origin: { y: 0.2, x: 0.5 },
      colors: ['#FFFFFF', '#FAF0CD', '#E8C77A'],
      gravity: 0.5,
      scalar: 1.2,
      shapes: ['circle'],
      ticks: 280,
    });
  }, 500);
}
