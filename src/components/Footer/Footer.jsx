import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ children, className }) => {
  const footerClassName = cn(styles._, className);

  return <div className={footerClassName}>{children}</div>;
};
