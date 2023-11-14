import { TaskActionsType } from './Task.types';
import { TTask } from 'types/task.type';

export const setLoaderAction = (isLoading: boolean) => ({ type: TaskActionsType.LOADING, payload: isLoading });

export const getAllTaskAction = (tasks: TTask[]) => ({ type: TaskActionsType.ALL, payload: tasks });

export const setCurrentTaskAction = (task: TTask) => ({ type: TaskActionsType.BY_ID, payload: task });

export const deleteTaskAction = (id: number) => ({ type: TaskActionsType.DELETE, payload: id });

export const errorTaskAction = (errorText: string) => ({ type: TaskActionsType.ERROR, payload: errorText });
