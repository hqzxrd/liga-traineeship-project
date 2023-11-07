import { combineReducers } from '@reduxjs/toolkit';
import TaskReducer from './reducers/task/Task.reducer';

const rootReducer = combineReducers({ tasks: TaskReducer });

export default rootReducer;
