import { TTask } from 'types/task.type';

export type TaskAction = LoaderSetAction | TaskGetAllAction | TaskDeleteAction;

export enum TaskActionsType {
  ALL = `GET_ALL`,
  DELETE = `DELETE_TASK`,
  LOADING = `SET_LOADING`,
}

interface LoaderSetAction {
  type: TaskActionsType.LOADING;
  payload: boolean;
}

interface TaskGetAllAction {
  type: TaskActionsType.ALL;
  payload: TTask[];
}

interface TaskDeleteAction {
  type: TaskActionsType.DELETE;
  payload: IDeleteTaskId;
}

type IDeleteTaskId = number;
