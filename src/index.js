import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/all.min.css'
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from "react-i18next";
import { renderRoutes } from './routes/routes';
import { BrowserRouter, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
