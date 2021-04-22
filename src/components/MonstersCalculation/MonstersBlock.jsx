import React from 'react';

import { changeMonstersCount } from './utils';

import { CircleButton } from 'components/Common/CircleButton';
import { MonsterCard } from './MonsterCard';

import { BUTTON_TYPE } from 'constants/common';
import { MONSTER_MIN_COUNT } from 'constants/monsters';

import styles from './styles.module.scss';

export const MonstersBlock = ({ monsters, onMonstersChange }) => {
  const onMonstersButtonClick = (type) => {
    const newMonsters = changeMonstersCount(monsters, type);

    onMonstersChange(newMonsters);    
  };

  const onMonserChange = (value, field, index) => {
    const newMonsters = [...monsters];
    newMonsters[index][field] = value;

    onMonstersChange(newMonsters);
  };

  const rednerDeleteButton = () => {
    if (monsters.length === MONSTER_MIN_COUNT) {
      return null;
    }

    return (
      <CircleButton
        styleClass={styles.monsterTopButton}
        type={BUTTON_TYPE.DELETE}
        onClick={onMonstersButtonClick}
      />
    );
  };

  const renderMonstersCards = monsters.map((monster, index) => (
    <MonsterCard key={index} index={index} monster={monster} onChange={onMonserChange} />
  ));

  return (
    <div className={styles.monstersBlock}>
      <div className={styles.monstersButtons}>
        {rednerDeleteButton()}
        <CircleButton
          type={BUTTON_TYPE.ADD}
          onClick={onMonstersButtonClick}
        />
      </div>
      <div className={styles.monsterCardsBlock}>{renderMonstersCards}</div>
    </div>
  );
}
