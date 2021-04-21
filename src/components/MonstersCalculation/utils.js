import { difficultCalculate } from 'utils/calculation';

import { FIGHT_DIFFICULT_TYPE } from 'constants/players';

const monstersMultiplier = (value, count) => {
  switch (true) {
    case (count <= 1):
      return value * 1;
    case (count <= 2):
      return value * 1.5;
    case (count <=6):
      return value * 2;
    case (count <= 10):
      return value * 2.5;
    case (count <= 14):
      return value * 3;
    case (count >= 15):
      return value * 4;
    default:
      return value;
  }
};

const getMostersEp = (monsters) => {
  const monstersEPWithoutMultiplier = monsters.reduce((acc, currentValue) => (
    acc + currentValue.EP * currentValue.number
    ), 0);

  const monstersCount = monsters.reduce((acc, currentValue) => (
    acc + currentValue.number
    ), 0);

  return monstersMultiplier(monstersEPWithoutMultiplier, monstersCount);
};

const getDifficultColorClass = (players, monstersEP) => {
  const difficultColorClass = Object.values(FIGHT_DIFFICULT_TYPE).reverse().find((type) => {
    const difficult = difficultCalculate(players, type);

    return difficult <= monstersEP;
  });

  return difficultColorClass || '';
}

export const calculateMonstersEP = (monsters, players) => {
  const monstersEP = getMostersEp(monsters);
  const difficultColorClass = getDifficultColorClass(players, monstersEP);

  return { monstersEP, difficultColorClass };
};
