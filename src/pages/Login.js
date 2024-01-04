// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 스타일 파일 추가

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // userId 유효성검사
      if (userId === "") {
        alert("사용자명을 입력하세요.");
        return; // 함수종료 => 다음 코드 실행되지 않도록
      }

      // password 유효성검사
      if (password === "") {
        alert("패스워드를 입력하세요.");
        return; // 함수종료 => 다음 코드 실행되지 않도록
      }

      const result = await fetchLogin(userId, password);
      console.log("userId: ", userId);
      console.log("password: ", password);

      console.log("로그인 성공");

      // 로그인 후 메인페이지로 이동
      navigate("/main", {
        state: {
          loggedIn: true,
          userId: userId,
          password: password,
        },
      });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  /**
   * @role 로그인 api 통신
   */
  const fetchLogin = async (userId, password) => {
    try {
      // 서버에 로그인 정보 전송
      // 예: const response = await fetch('서버 API 주소', { method: 'POST', body: JSON.stringify({ userId, password }) });
      // 실제로는 서버 API 주소와 통신하는 방법을 구현해야 합니다.

      // 로그인 성공 여부에 따라 로직 추가
      const response = await fetch("http://127.0.0.1/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(response);
        // countryArr = [response.json.cur_unit]
        return data;
      } else {
        throw new Error("Unable to logIn");
      }
    } catch (error) {
      console.error("Error fetching loggin in:", error);
      throw error;
    }
  };

  useEffect(() => {
    console.log("userId 검증::: ", userId);
    console.log("password 검증::: ", password);
  }, [userId, password]);

  return (
    <div>
      <h1 className="login-title">MODEUN LOGIN</h1>

      <div className="login-container">
        <input
          className="input-field"
          type="text"
          placeholder="사용자명"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p></p>
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
