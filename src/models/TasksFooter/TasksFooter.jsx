import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import styles from './TasksFooter.module.css';
import cn from 'classnames';

export const TasksFooter = ({  className, countDone = 0, clearTasks }) => {
  return (
    <Footer className={cn(styles.footer, className)}>
      <div className={styles.line}></div>
      <div className={styles.bottomPart}>
        <div className={styles.countSelected}>
          {countDone + ' item selected'}
        </div>
        <div className={styles.clear} onClick={clearTasks}>Clear All</div>
      </div>
    </Footer>
  );
};
