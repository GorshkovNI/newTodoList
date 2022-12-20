import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, actions) {
      state.allTasks.push(actions.payload)
    },
    setDone(state, actions){
      const currentId = actions.payload
      state.allTasks.forEach((item) => {
        if (item.id === currentId){
          item.done ? item.done = false : item.done = true
          return 
        }
      })
    },
    deleteCurrentTask(state, actions){
      const currentId = actions.payload
      const index = state.allTasks.findIndex(item => item.id === currentId)
      state.allTasks.splice(index, 1)
    },
    clearTasks(state){
      state.allTasks.length = 0
    }
  },
});

export const { setTasks, setDone, clearTasks, deleteCurrentTask } = tasksSlice.actions;
export default tasksSlice.reducer;
