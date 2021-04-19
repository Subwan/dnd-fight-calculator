import React from 'react';

import { PlayersBlock } from './PlayersBlock';

import styles from './styles.module.scss';

export const PlayersCalculation = ({players, onPlayersChange}) => {

  return (
    <div className={styles.mainBlock}>
      <PlayersBlock players={players} onPlayersChange={onPlayersChange} />
    </div>
  );
};