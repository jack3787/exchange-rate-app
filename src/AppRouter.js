// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch 대신 Routes 사용
import Start from './pages/Start'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ExchangeRate from './pages/exchangeRate';
import { Route as Navigate } from 'react-router-dom';
import Main from './pages/main';

const AppRouter = () => {
    return (
        <Router>
            <Routes> {/* Switch 대신 Routes로 변경 */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/exchangeRate" element={<ExchangeRate />} />
                <Route path="/" element={<Start />} />
                {/* <Route path="*" element={<Navigate replace to="/login" />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
