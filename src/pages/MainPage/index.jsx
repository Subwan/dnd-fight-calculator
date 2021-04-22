import React, { useState } from 'react';

import { MonstersCalculation } from 'components/MonstersCalculation';
import { PlayersCalculation } from 'components/PlayersCalculation';

import { DEFAULT_PLAYERS } from 'constants/players';

import styles from './styles.module.scss';

export const MainPage = () => {
  const [players, setPlayers] = useState(DEFAULT_PLAYERS);

  return (
    <div className={styles.mainPage}>
      <PlayersCalculation players={players} onPlayersChange={setPlayers} />
      <MonstersCalculation players={players} />
    </div>
  );
};