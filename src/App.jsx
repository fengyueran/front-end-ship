import React from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import store from 'src/store';
import ViewsRoot from 'src/views/Root';

const persistor = getPersistor();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ViewsRoot />
      </PersistGate>
    </Provider>
  );
}
export default App;
