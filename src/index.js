import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import store from './store';

const rerenderApp = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderApp(store);

store.subscribe(rerenderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
