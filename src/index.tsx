import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterSlice } from './features/counter';
import { configureStore } from '@reduxjs/toolkit';

// from reducer => redux
// なぜ必要? Appでglobalに参照されるstoreをcreateするため
// const store = createStore(counterReducer, initialState);

const store = configureStore({reducer: counterSlice.reducer});

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App name={"This is a test App."}/>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
