import { difficultCalculate } from 'utils/calculation';

import { FIGHT_DIFFICULT_TYPE, PLAYERS_COUNT_LEVELS } from 'constants/players';
import { BUTTON_TYPE } from 'constants/common';
import { DEFAULT_MONSTER, MONSTER_MIN_COUNT, MONSTERS_MULTIPLIERS } from 'constants/monsters';

const getPlayersContLevel = (playersLength) => {
  switch (true) {
    case (playersLength <= 2):
      return PLAYERS_COUNT_LEVELS.FEW;
    case (playersLength <= 5):
      return PLAYERS_COUNT_LEVELS.AVARAGE;
    case (playersLength >= 6): 
      return PLAYERS_COUNT_LEVELS.MANY;
    default:
      return PLAYERS_COUNT_LEVELS.AVARAGE;
  };
};

const monstersMultiplier = (value, count, playersLength) => {
  const playersCountLevel = getPlayersContLevel(playersLength);

  switch (true) {
    case (count <= 1):
      return value * MONSTERS_MULTIPLIERS[1][playersCountLevel];
    case (count <= 2):
      return value * MONSTERS_MULTIPLIERS[2][playersCountLevel];
    case (count <= 6):
      return value * MONSTERS_MULTIPLIERS[6][playersCountLevel];
    case (count <= 10):
      return value * MONSTERS_MULTIPLIERS[10][playersCountLevel];
    case (count <= 14):
      return value * MONSTERS_MULTIPLIERS[14][playersCountLevel];
    case (count >= 15):
      return value * MONSTERS_MULTIPLIERS[15][playersCountLevel];
    default:
      return value;
  };
};

export const getMonstersEPWithoutMultiplier = (monsters) => (
  monsters.reduce((acc, currentValue) => (
    acc + currentValue.EP * currentValue.number
    ), 0)
);

const getMostersEp = (monsters, playersLength) => {
  const monstersEPWithoutMultiplier = getMonstersEPWithoutMultiplier(monsters);

  const monstersCount = monsters.reduce((acc, currentValue) => (
    acc + currentValue.number
    ), 0);

  return monstersMultiplier(monstersEPWithoutMultiplier, monstersCount, playersLength);
};

const getDifficultColorClass = (players, monstersEP) => {
  const difficultColorClass = Object.values(FIGHT_DIFFICULT_TYPE).reverse().find((type) => {
    const difficult = difficultCalculate(players, type);

    return difficult <= monstersEP;
  });

  return difficultColorClass || '';
};

export const calculateMonstersEP = (monsters, players) => {
  const monstersEP = getMostersEp(monsters, players.length);
  const difficultColorClass = getDifficultColorClass(players, monstersEP);

  return { monstersEP, difficultColorClass };
};

export const changeMonstersCount = (monsters, type) => {
  const newMonsters = [...monsters];

  if (type === BUTTON_TYPE.ADD) {
    newMonsters.push({
      ...DEFAULT_MONSTER,
      name: monsters.length + 1, 
    });
  } else {
    if (monsters.length === MONSTER_MIN_COUNT) {
      return monsters;
    }

    newMonsters.pop();
  }

  return newMonsters;
};
