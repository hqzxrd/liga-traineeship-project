import { TTask } from 'types/task.type';

export type TaskAction = TaskSetErrorAction | LoaderSetAction | TaskGetAllAction | TaskDeleteAction;

export enum TaskActionsType {
  ALL = `GET_ALL`,
  DELETE = `DELETE_TASK`,
  LOADING = `SET_LOADING`,
  ERROR = `SET ERROR`,
}

interface LoaderSetAction {
  type: TaskActionsType.LOADING;
  payload: boolean;
}

interface TaskSetErrorAction {
  type: TaskActionsType.ERROR;
  payload: string;
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
