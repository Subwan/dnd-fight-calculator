import React, { useState } from 'react';

import { PlayersCalculation } from 'components/PlayersCalculation';

import { DEFAULT_PLAYERS } from 'constants/players';

export const MainPage = () => {
  const [players, setPlayers] = useState(DEFAULT_PLAYERS);

  const onPlayersChange = (newPlayers) => {
    setPlayers(newPlayers);
  };

  return (
    <div>
      <PlayersCalculation players={players} onPlayersChange={onPlayersChange} />
    </div>
  );
};