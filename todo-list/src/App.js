import $ from './elements.js';

import Form from './Form.js';
import List from './List.js';

import {
  addTask,
  deleteTask,
  toggleTask,
} from './services.js';

import {
  useSelector,
} from './store.js';

export default function App() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
  }));

  const handleClickAddTodo = (task) => {
    addTask(task);
  };

  const handleClickDeleteTodo = (id) => {
    deleteTask(id);
  };

  const handleClickCompleteTodo = (id) => {
    toggleTask(id);
  };

  return (
    $.div({}, [
      $.h1({}, ['Todo List']),
      Form({ onClick: handleClickAddTodo }),
      List({
        tasks,
        onClickDelete: handleClickDeleteTodo,
        onClickComplete: handleClickCompleteTodo,
      }),
    ])
  );
}
