import React from 'react';
import styles from './Body.module.css';
import cn from 'classnames';

export const Body = ({ children, className }) => {
  const bodyClassName = cn(styles._, className);

  return <div className={bodyClassName}>{children}</div>;
};
