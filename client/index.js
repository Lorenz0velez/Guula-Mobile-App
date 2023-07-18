import { registerRootComponent } from 'expo';

import App from './App';

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'
const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(AppWithRedux);


// registerRootComponent(App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
