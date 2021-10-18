import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-c23tlbbe.us.auth0.com"
  //   clientId="VDWDHI5pl9vnZvHTHOgGlCcr7BHtHm7s"
  //   redirectUri="http://localhost:3000"
  //   audience="APITest301"
  // >

  <Auth0Provider
    domain="dev-c23tlbbe.us.auth0.com"
    clientId="lK3IBt57WAi7GwVUq5b7vULBuhcWLn69"
    redirectUri="http://localhost:3000"
  >  
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
