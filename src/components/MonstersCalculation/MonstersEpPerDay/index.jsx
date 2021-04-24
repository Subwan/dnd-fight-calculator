import React, { useState } from 'react';

import { getEpPerDayDifficult } from '../utils';

import { MONSTERS_DEFAULT_EP_PER_DAY } from 'constants/monsters';

import styles from './styles.module.scss';

export const MonstersEpPerDay = ({monstersEP, players}) => {
  const [monsterEpPerDay, setmonsterEpPerDay] = useState(MONSTERS_DEFAULT_EP_PER_DAY);

  const epPerDayDifficult = getEpPerDayDifficult(players, monsterEpPerDay);

  const onAddClick = () => {
    const newMonsterEpPerDay = monsterEpPerDay + monstersEP;

    setmonsterEpPerDay(newMonsterEpPerDay);
  };

  const onDeleteClick = () => setmonsterEpPerDay(MONSTERS_DEFAULT_EP_PER_DAY);

  return (
    <div className={styles.epRow}>
      <h4 className={styles.title}>Модифицированные ПО за день</h4>
      <p className={`${styles.mainText} ${epPerDayDifficult}`}>{monsterEpPerDay}</p>
      <div className={styles.buttonsBlock}>
        <button
          className={`${styles.epButton} ${styles.marginRight}`}
          onClick={onAddClick}
        >
          Добавить текущие ПО
        </button>
        <button
          className={styles.epButton}
          onClick={onDeleteClick}
        >
          Очистить
        </button>
      </div>
    </div>
  );
}
