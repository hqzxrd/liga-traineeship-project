import { TTask } from 'types/task.type';

export type TTaskActions =
  | ITaskSetErrorAction
  | ILoaderSetAction
  | ITaskGetAllAction
  | ITaskDeleteAction
  | ITaskSetPageAction;

export enum TaskActionsType {
  ALL = `GET_ALL`,
  DELETE = `DELETE_TASK`,
  LOADING = `SET_LOADING`,
  ERROR = `SET ERROR`,
  SET_PAGE = `SET_PAGE`,
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

interface ITaskDeleteAction {
  type: TaskActionsType.DELETE;
  payload: number;
}

interface ITaskSetPageAction {
  type: TaskActionsType.SET_PAGE;
  payload: number;
}

export type TTasksReducer = {
  value: TTask[];
  currentPage: number;
  perPage: number;
  totalTasks: number;
  isLoading: boolean;
  error: string;
};
