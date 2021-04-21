import React from 'react';

import { calculateMonstersEP } from './utils';

import styles from './styles.module.scss';

export const MonsterResults = ({ players, monsters }) => {
  const { monstersEP, difficultColorClass } = calculateMonstersEP(monsters, players);

  return (
    <div className={styles.resultsBlock}>
      <div className={styles.resultRow}>
        <h4 className={styles.title}>ПО чудовищ:</h4>
        <p className={`${styles.mainText} ${difficultColorClass}`}>
          {monstersEP}
        </p>
      </div>
    </div>
  );
}
