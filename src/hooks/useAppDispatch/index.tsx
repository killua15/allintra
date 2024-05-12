// useAppDispatch.ts
import {useDispatch} from 'react-redux';

import {type AnyAction} from '@reduxjs/toolkit';
import {type ThunkDispatch} from 'redux-thunk';

import {type RootState} from '../../features/store/types';

export type DispatchTypes = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = (): DispatchTypes => useDispatch<DispatchTypes>();
