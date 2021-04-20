import React from 'react';

import { LevelsButton } from './LevelsButton';

import { LEVELS } from 'constants/players';
import { BUTTON_TYPE } from 'constants/common';

import styles from './styles.module.scss';

export const PlayerCard = ({player, index, onChange}) => {
  const marginLeft = index !== 0 ? styles.cardMarginLeft : null;

  const onClick = (type) => {
    const newValue = type === BUTTON_TYPE.ADD ? player + 1 : player - 1;

    if (newValue < LEVELS.MIN || newValue > LEVELS.MAX) {
      return;
    }

    onChange(newValue, index);
  };

  return (
    <div className={`${styles.cardBlock} ${marginLeft}`}>
      <p className={styles.cardIndex}>{index + 1}</p>
      <p className={styles.cardValue} value={player}>{player}</p>
      <div className={styles.LevelsButtonBlock}>
        <LevelsButton type={BUTTON_TYPE.DELETE} onClick={onClick} />
        <LevelsButton type={BUTTON_TYPE.ADD} onClick={onClick} />
      </div>
    </div>
  );
}
