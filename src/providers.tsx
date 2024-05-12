/* eslint-disable react/react-in-jsx-scope */
import {type PropsWithChildren, type JSX} from 'react';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './features/store';

export default function Providers({children}: PropsWithChildren): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
