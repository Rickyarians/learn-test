import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import Asyncstorage from '@react-native-async-storage/async-storage';

import auth from './reducers/auth';
import register from './reducers/register';
import forgotpin from './reducers/forgotpin';

const reducers = combineReducers({
  auth,
  register,
  forgotpin
});

const persistConfig = {
  key: 'root',
  storage: Asyncstorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

export default store;
