export const DEFAULT_PLAYER = 1;
export const DEFAULT_PLAYERS = [DEFAULT_PLAYER, DEFAULT_PLAYER, DEFAULT_PLAYER, DEFAULT_PLAYER];

export const LEVELS = {
  MIN: 1,
  MAX: 20,
};

export const PLAYERS_COUNT = {
  MIN: 1,
  MAX: 8,
};

export const PLAYERS_COUNT_LEVELS = {
  FEW: 'few',
  AVERAGE: 'average',
  MANY: 'many'
};

export const FIGHT_DIFFICULT_TYPE = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  DEADLY: 'deadly',
};

export const FIGHT_DIFFICULT_TYPE_NAME = {
  [FIGHT_DIFFICULT_TYPE.EASY]: 'Лёгкая',
  [FIGHT_DIFFICULT_TYPE.MEDIUM]: 'Средняя',
  [FIGHT_DIFFICULT_TYPE.HARD]: 'Трудная',
  [FIGHT_DIFFICULT_TYPE.DEADLY]: 'Смертельная',
};

export const FIGHT_DIFFICULT_PER_LVL = {
  1: { easy: 25, medium: 50, hard: 75, deadly: 100 },
  2: { easy: 50, medium: 100, hard: 150, deadly: 200 },
  3: { easy: 75, medium: 150, hard: 225, deadly: 400 },
  4: { easy: 125, medium: 250, hard: 375, deadly: 500 },
  5: { easy: 250, medium: 500, hard: 750, deadly: 1100 },
  6: { easy: 300, medium: 600, hard: 900, deadly: 1400 },
  7: { easy: 350, medium: 750, hard: 1100, deadly: 1700 },
  8: { easy: 450, medium: 900, hard: 1400, deadly: 2100 },
  9: { easy: 550, medium: 1100, hard: 1600, deadly: 2400 },
  10: { easy: 600, medium: 1200, hard: 1900, deadly: 2800 },
  11: { easy: 800, medium: 1600, hard: 2400, deadly: 3600 },
  12: { easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
  13: { easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
  14: { easy: 1250, medium: 2500, hard: 3800, deadly: 5700 },
  15: { easy: 1400, medium: 2800, hard: 4300, deadly: 6400 },
  16: { easy: 1600, medium: 3200, hard: 4800, deadly: 7200 },
  17: { easy: 2000, medium: 3900, hard: 5900, deadly: 8800 },
  18: { easy: 2100, medium: 4200, hard: 6300, deadly: 9500 },
  19: { easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
  20: { easy: 2800, medium: 5700, hard: 8500, deadly: 12700 },
};

export const IMPROVED_EP_PER_DAY = {
  1: 300,
  2: 600,
  3: 1200,
  4: 1700,
  5: 3500,
  6: 4000,
  7: 5000,
  8: 6000,
  9: 7500,
  10: 9000,
  11: 10500,
  12: 11500,
  13: 13500,
  14: 15000,
  15: 18000,
  16: 20000,
  17: 25000,
  18: 27000,
  19: 30000,
  20: 40000,
};
