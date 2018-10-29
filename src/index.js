import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { rootReducer } from './reducers';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      < App / >
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.register();