import React from 'react';

import { PlayersBlock } from './PlayersBlock';
import { ResultsBlock } from './ResultsBlock';

import styles from './styles.module.scss';

export const PlayersCalculation = ({players, onPlayersChange}) => (
  <div className={styles.mainBlock}>
    <PlayersBlock players={players} onPlayersChange={onPlayersChange} />
    <ResultsBlock players={players} />
  </div>
);
