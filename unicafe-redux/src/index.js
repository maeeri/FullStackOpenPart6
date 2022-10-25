import React from 'react';
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
//import { createStore } from 'redux'
import reducer from './reducer'

const store = configureStore({reducer})

const App = () => {
  const status = store.getState()

  const dispatch = (action) => {
    store.dispatch({type: action})
  }

  return (
    <div>
      <button onClick={dispatch('GOOD')}>good</button>
      <button onClick={dispatch('OK')}>ok</button>
      <button onClick={dispatch('BAD')}>bad</button>
      <button onClick={dispatch('ZERO')}>reset stats</button>
      <div>good {status.good}</div>
      <div>ok {status.ok}</div>
      <div>bad {status.bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
