/** XP awarded per logged set */
export const XP_PER_SET = 10;

/**
 * Compute the player level from total accumulated XP.
 * Uses a square-root curve so early levels are quick and higher
 * levels require sustained effort:
 *   Level 1:  0 – 99 XP
 *   Level 2:  100 – 399 XP
 *   Level 3:  400 – 899 XP
 *   Level 5:  1 600 – 2 499 XP
 *   Level 10: 8 100 – 9 999 XP
 */
export function computeLevel(totalXP: number): number {
  return Math.floor(Math.sqrt(Math.max(0, totalXP) / 100)) + 1;
}

/** Total XP required to *reach* the given level (1-indexed). */
export function xpForLevel(level: number): number {
  return (level - 1) * (level - 1) * 100;
}

/** Snapshot of the player's progress within the current level. */
export type XPProgress = {
  level: number;
  currentLevelXP: number;
  nextLevelXP: number;
  /** 0–1 fraction through the current level */
  fraction: number;
};

export function getXPProgress(totalXP: number): XPProgress {
  const level = computeLevel(totalXP);
  const currentLevelXP = xpForLevel(level);
  const nextLevelXP = xpForLevel(level + 1);
  const range = nextLevelXP - currentLevelXP;
  const fraction = range > 0 ? (totalXP - currentLevelXP) / range : 1;
  return { level, currentLevelXP, nextLevelXP, fraction };
}

const TITLES = [
  'Rookie Raider',
  'Iron Raider',
  'Bronze Raider',
  'Silver Raider',
  'Gold Raider',
  'Platinum Raider',
  'Diamond Raider',
  'Master Raider',
  'Grand Master',
  'Legendary Raider',
];

export function getLevelTitle(level: number): string {
  const idx = Math.min(level - 1, TITLES.length - 1);
  return TITLES[Math.max(0, idx)];
}
