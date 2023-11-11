import { TaskActionsType } from './Task.types';
import { TTask } from 'types/task.type';

export const setLoaderAction = (isLoading: boolean) => ({ type: TaskActionsType.LOADING, payload: isLoading });

export const getAllTaskAction = (tasks: TTask[]) => ({ type: TaskActionsType.ALL, payload: tasks });

export const deleteTaskAction = (id: number) => ({ type: TaskActionsType.DELETE, payload: id });
