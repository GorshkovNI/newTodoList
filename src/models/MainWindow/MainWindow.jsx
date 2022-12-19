import React from 'react';
import { H1 } from '../../components/H1/H1';
import { Input } from '../../components/Input/Input';
import styles from './MainWindow.module.css';

export const MainWindow = () => {
  return (
    <div className={styles._}>
      <H1 className={styles.title}>Daily To Do List</H1>
      <Input />
    </div>
  );
};
