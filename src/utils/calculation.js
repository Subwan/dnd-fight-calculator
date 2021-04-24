import { FIGHT_DIFFICULT_PER_LVL, IMPROVED_EP_PER_DAY } from 'constants/players';

export const difficultCalculate = (players, type) => (
   players.reduce((acc, currentValue) => acc + FIGHT_DIFFICULT_PER_LVL[currentValue][type], 0)
);

export const epPerDayCalculate = (players) => (
   players.reduce((acc, currentValue) => acc + IMPROVED_EP_PER_DAY[currentValue], 0)
);
