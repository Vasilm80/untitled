import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tyt from './AV'
import reportWebVitals from './reportWebVitals';
import AVMenu from "./AV-menu";
import AVContent from "./AV-content";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Tyt/>
     <AVMenu/>
      <AVContent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
