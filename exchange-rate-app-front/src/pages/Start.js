// Start.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css'; // 스타일 파일 추가

const Start = () => {
    return (
        <div className="start-container">
            <h1>MODEUN FINANCE</h1>
            <div className="button-container">
                <Link to="/login">
                    <button className="action-button">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="action-button">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Start;
