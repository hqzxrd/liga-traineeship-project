import { TTask } from 'types/task.type';

export type TaskAction = TaskCreateAction | TaskChangeAction | TaskDeleteAction;

export enum TaskActionsType {
  CREATE = 'CREATE_TASK',
  CHANGE = `CHANGE_TASK`,
  DELETE = `DELETE_TASK`,
}

interface TaskCreateAction {
  type: TaskActionsType.CREATE;
  payload: TTask;
}

interface TaskChangeAction {
  type: TaskActionsType.CHANGE;
  payload: TTask;
}

interface TaskDeleteAction {
  type: TaskActionsType.DELETE;
  payload: IDeleteTaskId;
}

type IDeleteTaskId = number;
