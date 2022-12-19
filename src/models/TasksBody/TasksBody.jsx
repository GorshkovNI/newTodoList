import React from 'react';
import { Body } from '../../components/BodyTasks/Body';
import { CheckBox } from '../../components/CheckBox/CheckBox';
import styles from './TasksBody.module.css';

export const TasksBody = ({ tasks }) => {
  return (
    <Body className={styles.body}>
      {tasks?.map((item, index) => {
        return <CheckBox key={index} task={item.task} isDone={item.status} />;
      })}
    </Body>
  );
};
