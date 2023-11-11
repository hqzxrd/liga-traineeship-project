import { combineReducers } from '@reduxjs/toolkit';
import TaskReducer from './task/Task.reducer';

const rootReducer = combineReducers({ tasks: TaskReducer });

export default rootReducer;
