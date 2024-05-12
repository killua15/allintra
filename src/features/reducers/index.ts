import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {reduxPersistKey} from '../config/config.json';
import {incrementReducer} from './increment';

const combinedReducers = combineReducers({
  increment: incrementReducer,
});

export const persistConfig = {
  key: reduxPersistKey,
  storage,
  whitelist: ['auth', 'parameterization'],
};

const persistedReducers = persistReducer(persistConfig, combinedReducers);

const rootReducer = persistedReducers;

export {rootReducer};
