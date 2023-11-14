import { TTask } from 'types/task.type';

export type TTaskActions =
  | ITaskSetErrorAction
  | ILoaderSetAction
  | ITaskGetAllAction
  | ITaskCurrentSetAction
  | ITaskDeleteAction;

export enum TaskActionsType {
  BY_ID = `GET_BY_ID`,
  ALL = `GET_ALL`,
  DELETE = `DELETE_TASK`,
  LOADING = `SET_LOADING`,
  ERROR = `SET ERROR`,
}

interface ILoaderSetAction {
  type: TaskActionsType.LOADING;
  payload: boolean;
}

interface ITaskSetErrorAction {
  type: TaskActionsType.ERROR;
  payload: string;
}

interface ITaskGetAllAction {
  type: TaskActionsType.ALL;
  payload: TTask[];
}

interface ITaskCurrentSetAction {
  type: TaskActionsType.BY_ID;
  payload: TTask;
}

interface ITaskDeleteAction {
  type: TaskActionsType.DELETE;
  payload: ITaskDeleteId;
}

type ITaskDeleteId = number;

export type TTasksReducer = {
  value: TTask[];
  current: TTask | null;
  isLoading: boolean;
  error: string;
};
