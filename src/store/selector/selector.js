import { createSelector } from '@reduxjs/toolkit';

export const getAllTasks = (state) => state.tasks.allTasks

export const getTasks = createSelector([getAllTasks], 
    (tasks) => {
        const count = tasks.reduce((acum, current) => {
            if(current.done == true){
                acum = acum + 1
            }
            return acum
        }, 0)
        return [tasks, count]
    });
