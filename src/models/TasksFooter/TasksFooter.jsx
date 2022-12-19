import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import styles from './TasksFooter.module.css';
import cn from 'classnames';

export const TasksFooter = ({ selected = 0, className }) => {
  return (
    <Footer className={cn(styles.footer, className)}>
      <div className={styles.line}></div>
      <div className={styles.bottomPart}>
        <div className={styles.countSelected}>
          {selected + ' item selected'}
        </div>
        <div className={styles.clear}>Clear All</div>
      </div>
    </Footer>
  );
};
