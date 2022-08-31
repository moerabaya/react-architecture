import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { InitialDataContext } from './server-side-render/dataContext';

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InitialDataContext.Provider value={(window && window.preloadedData || {_data: {}})}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InitialDataContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
