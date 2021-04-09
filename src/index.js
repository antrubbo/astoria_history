import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
  // in order to use react-redux, you have to use the provider
  // in order to use react router, you have to wrap in <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
