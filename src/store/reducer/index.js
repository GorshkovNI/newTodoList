import { combineReducers } from '@reduxjs/toolkit';
import tasks from './selector';

export const reducer = combineReducers({
  tasks,
});
