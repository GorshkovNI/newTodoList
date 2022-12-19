import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTasks: [],
  doneTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setData() {
      console.log();
    },
  },
});

export const { setData } = tasksSlice.actions;
export default tasksSlice.reducer;
