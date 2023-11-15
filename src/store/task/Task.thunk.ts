import { ThunkAction } from 'redux-thunk';
import { AxiosError, AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { deleteTaskAction, errorTaskAction, getAllTaskAction, setLoaderAction } from 'store/task';
import { TaskApi } from 'api/Task.api';
import { TRootState } from 'store/store';
import { TTask, TTaskForm } from 'types/task.type';
import { TTaskDeleteResponse } from 'types/api';

export const getAllTaskThunk = (
  query: string
): ThunkAction<Promise<AxiosResponse<TTask[]> | undefined>, TRootState, void, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));
      dispatch(setLoaderAction(true));

      const res = await TaskApi.getAll(query);

      dispatch(getAllTaskAction(res.data));

      return res;
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    } finally {
      dispatch(setLoaderAction(false));
    }
  };
};

export const getByIdTaskThunk = (
  id: number
): ThunkAction<Promise<AxiosResponse<TTask> | undefined>, TRootState, void, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));

      const res = await TaskApi.getById(id);

      return res;
    } catch (err) {
      const error = err as AxiosError;
      if (error.code !== `404`) {
        dispatch(errorTaskAction(`There is no such task`));
      } else {
        dispatch(errorTaskAction(error.message));
      }
    }
  };
};

export const createTaskThunk = (
  task: TTaskForm
): ThunkAction<Promise<AxiosResponse<TTask> | undefined>, TRootState, void, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));

      return await TaskApi.createTask(task);
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    }
  };
};

export const updateTaskThunk = (
  id: number,
  task: TTaskForm
): ThunkAction<Promise<AxiosResponse<TTask> | undefined>, TRootState, void, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));

      return await TaskApi.updateTask(id, task);
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    }
  };
};

export const deleteTaskThunk = (
  id: number
): ThunkAction<Promise<AxiosResponse<TTaskDeleteResponse> | undefined>, TRootState, void, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(errorTaskAction(``));

      const res = await TaskApi.deleteTask(id);

      if (res.status === 200) dispatch(deleteTaskAction(id));

      return res;
    } catch (err) {
      const error = err as AxiosError;
      dispatch(errorTaskAction(error.message));
    }
  };
};
