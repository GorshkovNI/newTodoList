import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { H1 } from '../../components/H1/H1';
import { Input } from '../../components/Input/Input';
import { getTasks } from '../../store/selector/selector';
import { clearTasks, deleteCurrentTask, setDone, setTasks } from '../../store/slice/tasks';
import { TasksBody } from '../TasksBody/TasksBody';
import { TasksFooter } from '../TasksFooter/TasksFooter';
import styles from './MainWindow.module.css';

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36);
    return dateString + randomness;
  };


export const MainWindow = () => {

  const [value, setValue] = useState('')

  const dispath = useDispatch()

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const handleDone = (e) => {
    dispath(setDone(e.currentTarget.id))
    e.preventDefault()
  }

  const addTask = () => {
    if(value === ''){
      alert('Введите задачу')
      return
    }
    dispath(setTasks({id:uniqueId(), task: value, done: false}))
    setValue('')
  }

  const pressEnter = (e) => {
    if(value === '' && e.keyCode === 13){
      alert('Введите задачу')
      return
    }
    if(e.keyCode === 13){
      dispath(setTasks({id:uniqueId(), task: value, done: false}))
      setValue('')
    }
  }

  const clearAllTasks = (e) => {
    dispath(clearTasks())
    e.preventDefault()
  }

  const deleteTask = (e) => {
      dispath(deleteCurrentTask(e.target.id))
      e.preventDefault()
  }

  const [tasks, count] = useSelector(getTasks)

  return (
    <div className={styles._}>
      <H1 className={styles.title}>Daily To Do List</H1>
      <Input value={value} onChange={handleValue} addTask={addTask} pressEnter={pressEnter} />
      <TasksBody className={styles.body} tasks={tasks} getDone={handleDone} onClickTrash={deleteTask} />
      <TasksFooter className={styles.footer} countDone={count} clearTasks={clearAllTasks} />
    </div>
  );
};
