import { AnyAction, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { TReduxStore } from './redux.types';
import { rootReducer } from 'store/rootReducer';

const initState: TReduxStore = {
  tasks: {
    value: [],
    currentPage: 1,
    perPage: 10,
    totalTasks: 0,
    isLoading: false,
    error: ``,
  },
};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware<ThunkDispatch<TRootState, void, AnyAction>, TRootState>(thunk, logger))
);

export type AppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof rootReducer>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
