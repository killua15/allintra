import {type TypedUseSelectorHook, useSelector} from 'react-redux';

import {type RootState} from '../../features/store/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
