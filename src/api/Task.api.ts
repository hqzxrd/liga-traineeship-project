import axios from 'axios';
import { URL_TASKS } from 'constants/api.constants';
import { TTask, TTaskForm } from 'types/task.type';

export const TaskApi = {
  async getAll(query: string) {
    const res = await axios.get<TTask[]>(URL_TASKS + query);
    console.log(res);

    return res;
  },

  async createTask(task: TTaskForm) {
    return await axios.post<TTask>(URL_TASKS, task);
  },

  async updateTask(id: number, task: TTaskForm) {
    return await axios.patch<TTask>(URL_TASKS + id, task);
  },

  async deleteTask(id: number) {
    return await axios.delete(URL_TASKS + id);
  },
};
