import React from 'react';

import { calculateMonstersEP } from './utils';

import { MonstersEpPerDay } from './MonstersEpPerDay';

import styles from './styles.module.scss';

export const MonsterResults = ({ players, monsters }) => {
  const { monstersEP, difficultColorClass, monstersEPWithoutMultiplier } = calculateMonstersEP(monsters, players);

  const expiriencePerPlayer = Math.round(monstersEPWithoutMultiplier / players.length);

  return (
    <div className={styles.resultsBlock}>
      <div className={styles.resultRow}>
        <h4 className={styles.title}>ПО чудовищ:</h4>
        <p className={`${styles.mainText} ${styles.monsersEpText} ${difficultColorClass}`}>
          {monstersEP}
        </p>
      </div>
      <div className={`${styles.resultRow} ${styles.experience}`}>
        <h4 className={styles.title}>Опыт:</h4>
        <p className={styles.mainText}>
          {monstersEPWithoutMultiplier}
          <span className={styles.divisorNumber}>{`/${players.length}`}</span>
          {` = ${expiriencePerPlayer}`}
        </p>
      </div>
      <MonstersEpPerDay monstersEP={monstersEP} players={players} />
    </div>
  );
}
