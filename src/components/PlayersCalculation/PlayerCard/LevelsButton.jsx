import React from 'react';

import { Plus, Minus } from 'assets/img';
import { BUTTON_TYPE } from 'constants/common';

import styles from './styles.module.scss';

export const LevelsButton = ({type, onClick}) => {
  const buttonType = type === BUTTON_TYPE.ADD ? styles.add : styles.delete;
  const buttonImg = type === BUTTON_TYPE.ADD ? Plus : Minus;
  const altText = type === BUTTON_TYPE.ADD ? 'add button' : 'delete button';

  const onButtonClick = (e) => {
    e.preventDefault();

    onClick(type)
  };

  return (
    <button
      className={`${styles.LevelsButton} ${buttonType}`}
      onClick={onButtonClick}
    >
      <img className={styles.cardImg} src={buttonImg} alt={altText} />
    </button>
  );
}
