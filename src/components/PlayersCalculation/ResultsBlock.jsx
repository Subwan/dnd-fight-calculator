import React from 'react';

import { epPerDayCalculate } from 'utils/calculation';

import { ResultTable } from './ResultTable';

import styles from './styles.module.scss';

export const ResultsBlock = (props) => {
  const epPerDay = epPerDayCalculate(props.players);

 return (
    <div className={styles.resultBlock}>
      <h2 className={styles.resultsHeader}>Сложность</h2>
      <ResultTable {...props} />
      <div className={styles.epPerDayBlock}>
        <p className={styles.levelsInfo}>{`Модифицированные ПО за день: ${epPerDay}`}</p>
      </div>
    </div>
  );
}

