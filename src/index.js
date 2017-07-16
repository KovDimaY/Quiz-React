// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Components import
import App from './components/app';

// Reducers import
import reducers from './reducers/index.js';

// Store definition with Middleware applying and Rendering of React DOM
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.querySelector('#react-app')
);