import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import Logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
// MiddleWare for redux
let middleware = applyMiddleware(Logger);

/* Config for Redux Presist */
const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(config, reducers);

const store = createStore(persistedReducer, {}, composeEnhancers(middleware));

const persistor = persistStore(store);

export default {store, persistor};
