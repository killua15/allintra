import {type store} from '.';

type GetState = typeof store.getState;

export type RootState = ReturnType<GetState>;
