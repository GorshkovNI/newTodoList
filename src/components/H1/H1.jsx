import React from 'react';
import styles from './H1.module.css';
import cn from 'classnames';

export const H1 = ({ children, className }) => {
  const h1ClassNames = cn(styles._, className);

  return <div className={h1ClassNames}>{children}</div>;
};
