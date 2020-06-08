import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import initialState from './initialState'
import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  const persistor = persistStore(store)

  return { store, persistor }
}
