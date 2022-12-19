import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ className }) => {
  const inputClassName = cn(styles._, className);

  return (
    <div className={inputClassName}>
      <div className={styles.container}>
        <input
          className={styles.input}
          placeholder="Add new list item"
          type="text"
        />
        <button className={styles.button}>Add</button>
      </div>
    </div>
  );
};
