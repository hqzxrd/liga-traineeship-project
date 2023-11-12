import axios from 'axios';
import { URL_TASKS } from 'constants/api.constants';
import { TTaskAllResponse, TTaskCreateResponse, TTaskDeleteResponse, TTaskUpdateResponse } from 'types/api';
import { TTaskForm } from 'types/task.type';
import { arrResponseToArrTask, responseToTask } from 'utils/mapTypes';

export const TaskApi = {
  async getAll(query: string) {
    const res = await axios.get<TTaskAllResponse>(URL_TASKS + query);

    const data = arrResponseToArrTask(res.data);

    const obj = {
      ...res,
      data,
    };
    return obj;
  },

  async createTask(task: TTaskForm) {
    const res = await axios.post<TTaskCreateResponse>(URL_TASKS, task);

    const data = responseToTask(res.data);

    const obj = {
      ...res,
      data,
    };
    return obj;
  },

  async updateTask(id: number, task: TTaskForm) {
    const res = await axios.patch<TTaskUpdateResponse>(URL_TASKS + id, task);

    const data = responseToTask(res.data);

    const obj = {
      ...res,
      data,
    };
    return obj;
  },

  async deleteTask(id: number) {
    return await axios.delete<TTaskDeleteResponse>(URL_TASKS + id);
  },
};
