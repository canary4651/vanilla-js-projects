import store from './store.js';

import { counter } from './utils.js';

const state = store.getState();

export const addTask = (title) => {
  state.tasks = [
    ...state.tasks,
    { id: counter(), title, complete: false },
  ];

  return state.tasks;
};

export const deleteTask = (id) => {
  state.tasks = state.tasks.filter(({ id: taskId }) => id !== taskId);

  return state.tasks;
};

export const toggleTask = (taskId) => {
  const index = state.tasks.findIndex(({ id }) => id === taskId);

  if (index > -1) {
    const task = state.tasks[index];

    const newTask = {
      ...task,
      complete: !task.complete,
    };

    state.tasks = [
      ...state.tasks.slice(0, index),
      newTask,
      ...state.tasks.slice(index + 1),
    ];
  }

  return state.tasks;
};

export const clearTasks = () => {
  state.tasks = [];
};
