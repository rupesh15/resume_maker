import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function loading(){
  return(
    <h3> Loading...</h3>
  )
}

root.render(
   <Provider store={store}>
    <PersistGate loading = {loading()} persistor={persistor}>
      <App/>
    </PersistGate>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
