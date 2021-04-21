import React from 'react';

import { CircleButton } from 'components/Common/CircleButton';
import { MonsterCard } from './MonsterCard';

import { BUTTON_TYPE } from 'constants/common';
import { DEFAULT_MONSTER } from 'constants/monsters';

import styles from './styles.module.scss';

export const MonstersBlock = ({ monsters, onMonstersChange }) => {
  const onMonstersButtonClick = (type) => {
    const newMonsters = [...monsters];

    if (type === BUTTON_TYPE.ADD) {
      newMonsters.push({
        ...DEFAULT_MONSTER,
        name: monsters.length + 1, 
      });
    } else {
      if (monsters.length === 1) {
        return null;
      }

      newMonsters.pop();
    }

    onMonstersChange(newMonsters);    
  };

  const onMonserChange = (value, field, index) => {
    const newMonsters = [...monsters];
    newMonsters[index][field] = value;

    onMonstersChange(newMonsters);
  };

  const renderMonstersCards = monsters.map((monster, index) => (
    <MonsterCard key={index} index={index} monster={monster} onChange={onMonserChange} />
  ));

  return (
    <div className={styles.monstersBlock}>
      <div className={styles.monstersButtons}>
        <CircleButton type={BUTTON_TYPE.DELETE} onClick={onMonstersButtonClick} />
        <CircleButton type={BUTTON_TYPE.ADD} onClick={onMonstersButtonClick} />
      </div>
      <div className={styles.monsterCardsBlock}>{renderMonstersCards}</div>
    </div>
  );
}
