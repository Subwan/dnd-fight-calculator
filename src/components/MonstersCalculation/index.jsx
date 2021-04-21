import React, { useState } from 'react';

import { MonstersBlock } from './MonstersBlock';
import { MonsterResults } from './MonsterResults';

import { DEFAULT_MONSETS } from 'constants/monsters';

import styles from './styles.module.scss';

export const MonstersCalculation = ({ players }) => {
  const [monsters, setMonsters] = useState(DEFAULT_MONSETS);

  return (
    <div className={styles.monsersCalculationBlock}>
      <MonstersBlock monsters={monsters} onMonstersChange={setMonsters} />
      <MonsterResults players={players} monsters={monsters} />
    </div>
  );
}
