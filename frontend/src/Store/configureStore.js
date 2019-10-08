import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import userCredentials from './Reducers/userCredentials'


export default () => {
  let store = createStore(userCredentials)
  let persistor = persistStore(store)
  return {store, persistor}
}
