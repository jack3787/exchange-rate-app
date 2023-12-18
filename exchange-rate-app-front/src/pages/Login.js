// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // 스타일 파일 추가

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // 서버에 로그인 정보 전송
            // 예: const response = await fetch('서버 API 주소', { method: 'POST', body: JSON.stringify({ username, password }) });
            // 실제로는 서버 API 주소와 통신하는 방법을 구현해야 합니다.
            // 로그인 성공 여부에 따라 로직 추가
            console.log('로그인 성공');

            // 로그인 후 메인페이지로 이동
            navigate('/main');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <h1 className="login-title">MODEUN</h1>

            <div className="login-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="사용자명"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="input-field"
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>
                    로그인
                </button>
            </div>
        </div>
    );
};

export default Login;
