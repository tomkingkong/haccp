import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as serviceWorker from './serviceWorker';
import App from './containers/App/App';
import { rootReducer } from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      < App / >
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.register();