import { combineReducers } from '@reduxjs/toolkit';
import TaskReducer from './reducers/Task';

const rootReducer = combineReducers({ TaskReducer });

export default rootReducer;
