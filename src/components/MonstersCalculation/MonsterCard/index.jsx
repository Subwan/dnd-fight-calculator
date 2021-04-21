import React from 'react';

import { MONSTER_FIELDS } from 'constants/monsters';

import styles from '../styles.module.scss';

export const MonsterCard = ({ monster, index, onChange }) => {
  const onNameChange = (e) => {
    const { value } = e.target;

    onChange(value, MONSTER_FIELDS.NAME, index);
  };

  const onChangeNumber = (e, field) => {
    const { value } = e.target;
    
    if (/^\d*$/.test(value)) {
      onChange(Number(value), field, index);
    }
  };

  const isError = (value) => value ? '' : styles.inputError;

  return (
    <div className={styles.monsterCard}>
      <input className={styles.monsterInput} value={monster.name} onChange={onNameChange} />
      <div className={styles.monsterInputBlock}>
        <p className={styles.monsterCardText}>Количество:</p>
        <input
          className={`${styles.monsterInput} ${styles.numberInput} ${isError(monster.number)}`}
          value={monster.number}
          onChange={(e) => onChangeNumber(e, MONSTER_FIELDS.NUMBER)}
        />
      </div>
      <div className={styles.monsterInputBlock}>
        <p className={styles.monsterCardText}>ПО:</p>
        <input
          className={`${styles.monsterInput} ${styles.epInput} ${isError(monster.EP)}`}
          value={monster.EP}
          onChange={(e) => onChangeNumber(e, MONSTER_FIELDS.EP)}
        />
      </div>
    </div>
  );
}
