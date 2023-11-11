import { ThunkAction } from 'redux-thunk';
import { deleteTaskAction, getAllTaskAction, setLoaderAction } from './Task.action';
import { TaskApi } from 'api/Task.api';
import { TRootState } from 'store/store';
import { TTaskForm } from 'types/task.type';

export const getAllTaskThunk = (query: string): ThunkAction<Promise<void>, TRootState, any, any> => {
  return async (dispatch) => {
    try {
      dispatch(setLoaderAction(true));

      const res = await TaskApi.getAll(query);

      dispatch(getAllTaskAction(res.data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoaderAction(false));
    }
  };
};

export const createTaskThunk = (task: TTaskForm): ThunkAction<Promise<void>, TRootState, any, any> => {
  return async (dispatch) => {
    const res = await TaskApi.createTask(task);
  };
};

export const updateTaskThunk = (id: number, task: TTaskForm): ThunkAction<Promise<void>, TRootState, any, any> => {
  return async (dispatch) => {
    const res = await TaskApi.updateTask(id, task);
  };
};

export const deleteTaskThunk = (id: number): ThunkAction<Promise<void>, TRootState, any, any> => {
  return async (dispatch) => {
    const res = await TaskApi.deleteTask(id);
    if (res.status === 200) dispatch(deleteTaskAction(id));
  };
};
