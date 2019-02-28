import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider }  from 'react-redux';
import store from './store/storeConfig'
const initialState = {

  }

function todoApp(state, action) {
    if (typeof state === 'undefined') {
      return initialState
    }
  
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  }

// const store = createStore();
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
