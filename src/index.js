import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/store'

const { persistor, store } = configureStore()

import "./styles.css";

import Main from "./components/Main"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
