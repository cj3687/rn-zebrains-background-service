import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { setZebrainsServiceData, store } from './store';

const MyHeadlessTask = async () => {
  console.log('Receiving Zebrains info!');
  store.dispatch(setZebrainsServiceData(true));
  setTimeout(() => {
    store.dispatch(setZebrainsServiceData(false));
  }, 2000);
};

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


AppRegistry.registerHeadlessTask('Zebrains', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);
