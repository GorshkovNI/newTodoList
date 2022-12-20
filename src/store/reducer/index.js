import { combineReducers } from '@reduxjs/toolkit';
import tasks from '../slice/tasks';

const reducer = combineReducers({
  tasks
});

export default reducer
