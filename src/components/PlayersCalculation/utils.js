
import { PLAYERS_COUNT, LEVELS } from 'constants/players';
import { BUTTON_TYPE } from 'constants/common';

export const chagePlayersCount = (players, type) => {
  const newPlayers = [...players];
    
  if (type === BUTTON_TYPE.ADD) {
    if (players.length >= PLAYERS_COUNT.MAX) {
      return null;
    }

    newPlayers.push(players[0]);
  } else {
    if (players.length <= PLAYERS_COUNT.MIN) {
      return null;
    }

    newPlayers.pop();
  }

  return newPlayers;
}

export const changePlayersLevel = (players, type) => {
  let newPlayers = [];
    
  if (type === BUTTON_TYPE.ADD) {
    newPlayers = players.map((level) => {
      if (level >= LEVELS.MAX) {
        return level;
      }

      return level + 1;
    });
  } else {
    newPlayers = players.map((level) => {
      if (level <= LEVELS.MIN) {
        return level;
      }

      return level - 1;
    });
  }
  
  return newPlayers;
};
