import { TTaskAllResponse, TTaskCreateResponse, TTaskUpdateResponse } from 'types/api';
import { TTask } from 'types/task.type';

export const arrResponseToArrTask = (taskResponse: TTaskAllResponse): TTask[] => {
  return taskResponse.map((item) => ({
    name: item.name || '',
    info: item.info || '',
    isImportant: (item.isImportant && typeof item.isImportant === `boolean`) || false,
    isCompleted: (item.isCompleted && typeof item.isCompleted === `boolean`) || false,
    id: item.id || 0,
  }));
};

export const responseToTask = (taskResponse: TTaskCreateResponse | TTaskUpdateResponse): TTask => {
  return {
    name: taskResponse.name || '',
    info: taskResponse.info || '',
    isImportant: (taskResponse.isImportant && typeof taskResponse.isImportant === `boolean`) || false,
    isCompleted: (taskResponse.isCompleted && typeof taskResponse.isCompleted === `boolean`) || false,
    id: taskResponse.id || 0,
  };
};
