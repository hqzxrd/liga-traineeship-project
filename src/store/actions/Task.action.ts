import { TaskActionsType } from 'store/reducers/task/Task.types';
import { TTask, TTaskForm } from 'types/task.type';

export const createTaskAction = (task: TTaskForm) => ({
  type: TaskActionsType.CREATE,
  payload: { id: Math.floor(Math.random() * (10000 - 1) + 1), isCompleted: false, ...task },
});

export const changeTaskAction = (task: Omit<TTask, `isCompleted`>) => ({
  type: TaskActionsType.CHANGE,
  payload: { isCompleted: false, ...task },
});

export const deleteTaskAction = (id: number) => ({ type: TaskActionsType.DELETE, payload: id });
