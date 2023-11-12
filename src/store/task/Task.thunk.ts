import { ThunkAction } from 'redux-thunk';
import { AxiosError } from 'axios';
import { AnyAction } from 'redux';
import { deleteTaskAction, errorTaskAction, getAllTaskAction, setLoaderAction } from './Task.action';
import { TaskApi } from 'api/Task.api';
import { TRootState } from 'store/store';
import { TTaskForm } from 'types/task.type';

export const getAllTaskThunk = (query: string): ThunkAction<Promise<void>, TRootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));
      dispatch(setLoaderAction(true));

      const res = await TaskApi.getAll(query);

      dispatch(getAllTaskAction(res.data));
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    } finally {
      dispatch(setLoaderAction(false));
    }
  };
};

export const createTaskThunk = (task: TTaskForm): ThunkAction<Promise<void>, TRootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));
      await TaskApi.createTask(task);
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    }
  };
};

export const updateTaskThunk = (
  id: number,
  task: TTaskForm
): ThunkAction<Promise<void>, TRootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));
      await TaskApi.updateTask(id, task);
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    }
  };
};

export const deleteTaskThunk = (id: number): ThunkAction<Promise<void>, TRootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));
      const res = await TaskApi.deleteTask(id);
      if (res.status === 200) dispatch(deleteTaskAction(id));
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    }
  };
};
