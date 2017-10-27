import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import io from 'socket.io-client'
import {HashRouter} from 'react-router-dom'

import reducer from './reducer'
import remoteActionMiddleware from './remote_action_middleware'
import {setState} from './action_creators'

const socket = io('http://localhost:3001')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(remoteActionMiddleware(socket))))

socket.on('state', (state) => {
  console.log(state)
  store.dispatch(setState(state))
})

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  , 
  document.getElementById('root')
)
