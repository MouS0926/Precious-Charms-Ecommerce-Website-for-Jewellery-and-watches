// src/store/index.ts

import { combineReducers } from 'redux';
import dataReducer, { DataState } from './reducer';

export interface RootState {
  data: DataState; // Replace DataState with the actual state type of the dataReducer
  // Add other state properties for other reducers if you have them
}
const rootReducer = combineReducers({
  data:dataReducer
});

export default rootReducer;
