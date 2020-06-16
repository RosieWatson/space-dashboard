import React from 'react'
import ReactDOM from 'react-dom'

// Font Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

// Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/store'

const { persistor, store } = configureStore()

// Styling
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap/js/dist/collapse'
import 'lazysizes'
import './styles.scss'

import Main from './components/Main'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
