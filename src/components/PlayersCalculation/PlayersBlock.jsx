import React from 'react';

import { changePlayersLevel, chagePlayersCount } from './utils';

import { CircleButton } from 'components/Common/CircleButton';
import { PlayerCard } from './PlayerCard';

import { BUTTON_TYPE } from 'constants/common';

import styles from './styles.module.scss';

export const PlayersBlock = ({players, onPlayersChange}) => {
  const onPlayersButtonClick = (type) => {
    const newPlayers = chagePlayersCount(players, type);

    onPlayersChange(newPlayers);
  };

  const onPlayerChange = (value, index) => {
    const newPlayers = [...players];
    newPlayers[index] = value;

    onPlayersChange(newPlayers);
  };

  const onLevelsButtonClick = (type) => {
    const newPlayers = changePlayersLevel(players, type);

    onPlayersChange(newPlayers);
  };

  const renderDeleteButton = () => {
    if (players.length <= 1) {
      return null;
    }

    return (
      <CircleButton
        styleClass={`${styles.managePlayersButton} ${styles.delete}`}
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
        styleClass={`${styles.managePlayersButton} ${styles.add}`}
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
        <CircleButton
          styleClass={styles.delete}
          type={BUTTON_TYPE.DELETE}
          onClick={onLevelsButtonClick}
        />
        <CircleButton
          styleClass={styles.add}
          type={BUTTON_TYPE.ADD}
          onClick={onLevelsButtonClick}
        />
      </div>
    </div>
  );
}
