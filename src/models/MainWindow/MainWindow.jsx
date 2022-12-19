import React from 'react';
//import { CheckBox } from '../../components/CheckBox/CheckBox';
import { H1 } from '../../components/H1/H1';
import { Input } from '../../components/Input/Input';
import { TasksBody } from '../TasksBody/TasksBody';
import { TasksFooter } from '../TasksFooter/TasksFooter';
import styles from './MainWindow.module.css';

const TASKS = [
  {
    task: 'ADFSDFsdfs',
    done: false,
  },
  {
    task: 'ADFsdgsdfSDFsdfs',
    done: false,
  },
  {
    task: '324123',
    done: false,
  },
  {
    task: 'wertwert',
    done: false,
  },
  {
    task: 'wert',
    done: false,
  },
  {
    task: '123412tewfgsdf',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
  {
    task: 'xcvbxcv',
    done: false,
  },
];

export const MainWindow = () => {
  return (
    <div className={styles._}>
      <H1 className={styles.title}>Daily To Do List</H1>
      <Input />
      <TasksBody className={styles.body} tasks={TASKS} />
      <TasksFooter className={styles.footer} />
    </div>
  );
};
