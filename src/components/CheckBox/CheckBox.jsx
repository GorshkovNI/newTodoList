import React from 'react';
import styles from './CheckBox.module.css';
import cn from 'classnames';

export const CheckBox = ({ task, isDone = false }) => {
  const containerStatusClassName = cn(styles.container, {
    [styles.done]: isDone,
  });

  return (
    <label>
      <div className={styles._}>
        <div className={containerStatusClassName}>
          <input className={styles.input} type="checkbox" />
          <div className={styles.customCheckBoxArea}>
            <span className={styles.marker}></span>
            <svg
              className={styles.svg}
              width="14"
              height="10"
              viewBox="0 0 14 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.66666 5.66667L4.99999 9L12.3333 1.66667" />
            </svg>
          </div>
          <span className={styles.text}>{task}</span>
        </div>
      </div>
    </label>
  );
};
