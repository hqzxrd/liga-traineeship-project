import { combineReducers } from '@reduxjs/toolkit';
import { TaskReducer } from 'store/task';

export const rootReducer = combineReducers({ tasks: TaskReducer });
