import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { ReaderProvider } from '@epubjs-react-native/core';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigator from './app/navigation/rootNavigator';
import { persistor, store } from './app/redux';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReaderProvider>
          <RootNavigator />
        </ReaderProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
