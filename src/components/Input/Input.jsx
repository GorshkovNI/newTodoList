import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ className, value, onChange, addTask, pressEnter }) => {
  const inputClassName = cn(styles._, className);

  return (
    <div className={inputClassName}>
      <div className={styles.container}>
        <input
          className={styles.input}
          value={value}
          placeholder="Add new list item"
          type="text"
          onChange={onChange}
          onKeyDown={pressEnter}
        />
        <button className={styles.button} onClick={addTask}>Add</button>
      </div>
    </div>
  );
};
