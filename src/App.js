// App.js
import React from 'react';
import ExchangeRate from './pages/exchangeRate';
import Login from './pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter'; // 새로 추가된 부분
import './App.css';

// const App = () => {
//   return (
//     <div className="app-container">
//       <AppRouter>
//       </AppRouter>

//       {/* <h1 className="app-title">Exchange Rate Inquiry</h1>
//       <ExchangeRate /> */}
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
