import React from 'react';

import { CircleButton } from 'components/Common/CircleButton';
import { PlayerCard } from './PlayerCard';

import { PLAYERS_COUNT, LEVELS } from 'constants/players';
import { BUTTON_TYPE } from 'constants/common';

import styles from './styles.module.scss';

export const PlayersBlock = ({players, onPlayersChange}) => {
  const onPlayersButtonClick = (type) => {
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

    onPlayersChange(newPlayers);
  };

  const onPlayerChange = (value, index) => {
    const newPlayers = [...players];
    newPlayers[index] = value;

    onPlayersChange(newPlayers);
  };

  const onLevelsButtonClick = (type) => {
    let newPlayers = [];
    
    if (type === BUTTON_TYPE.ADD) {
      newPlayers = players.map((level, index) => {
        if (level >= LEVELS.MAX) {
          return level;
        }

        return level + 1;
      });
    } else {
      newPlayers = players.map((level, index) => {
        if (level <= LEVELS.MIN) {
          return level;
        }

        return level - 1;
      });
    }

    onPlayersChange(newPlayers);
  };

  const renderDeleteButton = () => {
    if (players.length <= 1) {
      return null;
    }

    return (
      <CircleButton
        classNames={styles.managePlayersButton}
        type={BUTTON_TYPE.DELETE}
        onClick={onPlayersButtonClick}
      />
    );
  };

  const renderAddButton = () => {
    if (players.length >= 8) {
      return null;
    }

    return (
      <CircleButton
        classNames={styles.managePlayersButton}
        type={BUTTON_TYPE.ADD}
        onClick={onPlayersButtonClick}
      />
    );
  };

  const renderCards = players.map((player, index) => (
    <PlayerCard key={index} player={player} index={index} onChange={onPlayerChange} />
  ));

  return (
    <div className={styles.playerBlock}>
      <h2 className={styles.playerHeader}>Игроки</h2>
      <div className={styles.cardsBlock}>
        {renderDeleteButton()}
        {renderCards}
        {renderAddButton()}
      </div>
      <div className={styles.addLevelsToAll}>
        <p className={styles.levelsInfo}>Изменения уровня для всех игроков:</p>
        <CircleButton type={BUTTON_TYPE.DELETE} onClick={onLevelsButtonClick} />
        <CircleButton type={BUTTON_TYPE.ADD} onClick={onLevelsButtonClick} />
      </div>
    </div>
  );
}
