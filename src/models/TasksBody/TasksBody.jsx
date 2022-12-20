import React from 'react';
import { Body } from '../../components/BodyTasks/Body';
import { CheckBox } from '../../components/CheckBox/CheckBox';
import styles from './TasksBody.module.css';

export const TasksBody = ({ tasks, getDone, onClickTrash }) => {


  return (
    <Body className={styles.body}>
      {tasks?.map((item) => {
        return <CheckBox key={item.id} id={item.id} task={item.task} checked={item.done} getDone={getDone} deleteTask={onClickTrash} />;
      })}
    </Body>
  );
};
