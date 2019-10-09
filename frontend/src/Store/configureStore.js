import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userCredentials from './Reducers/userCredentials';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userCredentials)

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);