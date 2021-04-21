import React, { useState } from 'react';

import { MonstersCalculation } from 'components/MonstersCalculation';
import { PlayersCalculation } from 'components/PlayersCalculation';

import { DEFAULT_PLAYERS } from 'constants/players';

export const MainPage = () => {
  const [players, setPlayers] = useState(DEFAULT_PLAYERS);

  return (
    <div>
      <PlayersCalculation players={players} onPlayersChange={setPlayers} />
      <MonstersCalculation players={players} />
    </div>
  );
};