import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './scrollToTop'

import store from './store'
import ErrorBoundry from "./components/errors/errorBoundary/errorBoundary";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about services workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
