import { addTask, deleteTask, clearTasks } from './services.js';

jest.mock('./index.js', () => ({
  update: () => {},
}));

beforeEach(() => {
  clearTasks();
});

test('addTask', () => {
  const [task] = addTask('Hello');

  expect(task.id).not.toBeNull();
  expect(task.title).toBe('Hello');
  expect(task.complete).toBeFalsy();
});

test('deleteTask', () => {
  const [added] = addTask('Hello');

  const tasks = deleteTask(added.id);

  expect(tasks).toHaveLength(0);
});
