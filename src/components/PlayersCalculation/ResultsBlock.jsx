import React from 'react';

import { ResultTable } from './ResultTable';

import styles from './styles.module.scss';

export const ResultsBlock = (props) => (
  <div className={styles.resultBlock}>
    <h2 className={styles.resultsHeader}>Сложность</h2>
    <ResultTable {...props} />
  </div>
);
