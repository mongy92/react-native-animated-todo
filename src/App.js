import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './redux/store';
import {StatusBar} from 'react-native';
import Navigation from './navigation';

const App = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
