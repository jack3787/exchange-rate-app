// Main.js
import React, { useState } from 'react';
import ExchangeRate from '../exchangeRate';
import { Link } from 'react-router-dom';
import './main.css';  // Main 페이지에 대한 스타일 파일을 import

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);  // menu 상태

    // menu 동작
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className="main-container">
            <div className="main-header">
                <h1 className="main-title">Main Page</h1>
            </div>
            {/* <ExchangeRate /> */}
            <div className="navigation-buttons">
                <Link to="/exchangeRate">
                    <button className="exchange-rate-button">Exchange Rate로 이동</button>
                </Link>
                <button className="menu-button">메뉴</button>
            </div>

        </div>
    );
};

export default Main;
