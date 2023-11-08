import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { ReduxStore } from './redux.types';

const initState: ReduxStore = {
  tasks: [],
};

const store = createStore(rootReducer, initState, compose(applyMiddleware(logger), composeWithDevTools()));

export type TRootState = ReturnType<typeof store.getState>;

export default store;
