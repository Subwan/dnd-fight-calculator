import { PLAYERS_COUNT_LEVELS } from './players';

export const MONSTER_FIELDS = {
  NAME: 'name',
  NUMBER: 'number',
  EP: 'EP',
};

export const DEFAULT_MONSTER = {
  [MONSTER_FIELDS.NAME]: '1',
  [MONSTER_FIELDS.NUMBER]: 1,
  [MONSTER_FIELDS.EP]: 50, 
};

export const DEFAULT_MONSETS = [{...DEFAULT_MONSTER}];

export const MONSTER_MIN_COUNT = 1;

export const MONSTERS_DEFAULT_EP_PER_DAY = 0;

export const MONSTERS_MULTIPLIERS = {
  1: {
    [PLAYERS_COUNT_LEVELS.FEW]: 1.5,
    [PLAYERS_COUNT_LEVELS.AVERAGE]: 1,
    [PLAYERS_COUNT_LEVELS.MANY]: 0.5,
  },
  2: {
    [PLAYERS_COUNT_LEVELS.FEW]: 2,
    [PLAYERS_COUNT_LEVELS.AVERAGE]: 1.5,
    [PLAYERS_COUNT_LEVELS.MANY]: 1,
  },
  6: {
    [PLAYERS_COUNT_LEVELS.FEW]: 2.5,
    [PLAYERS_COUNT_LEVELS.AVERAGE]: 2,
    [PLAYERS_COUNT_LEVELS.MANY]: 1.5,
  },
  10: {
    [PLAYERS_COUNT_LEVELS.FEW]: 3,
    [PLAYERS_COUNT_LEVELS.AVERAGE]: 2.5,
    [PLAYERS_COUNT_LEVELS.MANY]: 2,
  },
  14: {
    [PLAYERS_COUNT_LEVELS.FEW]: 4,
    [PLAYERS_COUNT_LEVELS.AVERAGE]: 3,
    [PLAYERS_COUNT_LEVELS.MANY]: 2.5,
  },
  15: {
    [PLAYERS_COUNT_LEVELS.FEW]: 5,
    [PLAYERS_COUNT_LEVELS.AVERAGE]: 4,
    [PLAYERS_COUNT_LEVELS.MANY]: 3,
  },
};
