import React from 'react';

import { Plus, Minus } from 'assets/img';

import { BUTTON_TYPE } from 'constants/common';

import styles from './styles.module.scss';

export const CircleButton = ({type, onClick, classNames}) => {
  const buttonType = type === BUTTON_TYPE.ADD ? styles.add : styles.delete;
  const buttonImg = type === BUTTON_TYPE.ADD ? Plus : Minus;
  const altText = type === BUTTON_TYPE.ADD ? 'add button' : 'delete button';

  return (
    <button
      className={`${styles.buttonBlock} ${buttonType} ${classNames || ''}`}
      onClick={() => onClick(type)}
    >
      <img className={styles.buttonImg} src={buttonImg} alt={altText} />
    </button>
  );
}
