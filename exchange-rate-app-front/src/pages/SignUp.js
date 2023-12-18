// SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // SignUp.css 파일을 import

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // 서버에 회원가입 정보 전송
      // 예: const response = await fetch('서버 API 주소', { method: 'POST', body: JSON.stringify({ username, password }) });
      // 실제로는 서버 API 주소와 통신하는 방법을 구현해야 합니다.
      // 회원가입 성공 여부에 따라 로직 추가
      console.log('회원가입 성공');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h1 className="signup-title">MODEUN</h1> {/* 클래스명을 'signup-title'로 변경 */}

      <div className="signup-container"> {/* 클래스명을 'signup-container'로 변경 */}
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
        <button className="signup-button" onClick={handleSignUp}>
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
