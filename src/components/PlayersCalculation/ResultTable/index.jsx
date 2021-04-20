import React from 'react';

import {
  FIGHT_DIFFICULT_TYPE,
  FIGHT_DIFFICULT_TYPE_NAME,
  FIGHT_DIFFICULT_PER_LVL,
} from 'constants/players';

import styles from './styles.module.scss';

export const ResultTable = ({players}) => {
  const renderTableRow = (type, index) => {
    const difficult = players.reduce((acc, currentValue) => acc + FIGHT_DIFFICULT_PER_LVL[currentValue][type], 0);

    return (
      <tr key={index} className={styles[type]}>
        <td className={styles.difficultName}>{FIGHT_DIFFICULT_TYPE_NAME[type]}</td>
        <td className={styles.difficult}>{difficult}</td>
      </tr>
    );
  }

  const renderTableBody = Object.values(FIGHT_DIFFICULT_TYPE).map((type, index) => renderTableRow(type, index));

  return (
    <table className={styles.resultTable}>
      <tbody>
        {renderTableBody}
      </tbody>
    </table>
  )
};
