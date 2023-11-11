import { TTask } from 'types/task.type';

export type TReduxStore = {
  tasks: TTasksReducer;
};

export type TTasksReducer = {
  value: TTask[];
  isLoading: boolean;
  error: string;
};
