// App.js
import React from 'react';
import ExchangeRate from './exchangeRate';
import './App.css';
// import ExternalHTMLComponent from './externalHTMLComponent';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Exchange Rate Inquiry</h1>
      {/* <ExternalHTMLComponent /> */}
      <ExchangeRate />
    </div>
  );
}

export default App;
