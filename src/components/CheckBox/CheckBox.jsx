import React from 'react';
import styles from './CheckBox.module.css';
import cn from 'classnames';


const noop = () => {}

export const CheckBox = ({ id, task, getDone, checked, deleteTask }) => {
  const containerStatusClassName = cn(styles.container, {
    [styles.done]: checked,
  });

  return (
    <div className={styles._}>
      <label id={id} onClick={getDone}>
          <div className={containerStatusClassName}>
            <input className={styles.input} type="checkbox" checked={checked} onChange={noop} />
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
      </label>
      <svg className={styles.trash} onClick={deleteTask} id={id} viewBox="0 0 16 16" fill="none" stroke="#8055FF" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" />
          <path d="M6.5 6V12M9.5 6V12" fill="none" />
        </svg>
    </div>
    
  );
};
        