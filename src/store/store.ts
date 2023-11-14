import { AnyAction, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';
import { TReduxStore } from './redux.types';

const initState: TReduxStore = {
  tasks: {
    value: [],
    current: null,
    isLoading: false,
    error: ``,
  },
};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware<ThunkDispatch<TRootState, unknown, AnyAction>, TRootState>(thunk, logger))
);

export type AppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof rootReducer>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
