import { FIGHT_DIFFICULT_PER_LVL } from 'constants/players';

export const difficultCalculate = (players, type) => (
   players.reduce((acc, currentValue) => acc + FIGHT_DIFFICULT_PER_LVL[currentValue][type], 0)
);
