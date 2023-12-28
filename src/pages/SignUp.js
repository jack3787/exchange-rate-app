// SignUp.js
import React, { useState } from "react";
import "./SignUp.css"; // SignUp.css 파일을 import
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // 회원가입 api 호출 및 return 값 세팅
  const handleSignUp = async () => {
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

      const result = await fetchSignUp(userId, password);
      console.log("userId: ", userId);
      console.log("password: ", password);

      console.log("회원가입 성공");

      // 회원가입 후 로그인 페이지로 이동
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  /**
   * @role 회원가입 api 통신
   */
  const fetchSignUp = async (userId, password) => {
    try {
      // 서버에 회원가입 정보 전송
      // 예: const response = await fetch('서버 API 주소', { method: 'POST', body: JSON.stringify({ userId, password }) });
      // 실제로는 서버 API 주소와 통신하는 방법을 구현해야 합니다.

      // 회원가입 성공 여부에 따라 로직 추가
      const response = await fetch("http://127.0.0.1/user/registration", {
        method: "POST",
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
        throw new Error("Unable to signUp");
      }
    } catch (error) {
      console.error("Error fetching signing up:", error);
      throw error;
    }
  };

  return (
    <div>
      <h1 className="signup-title">MODEUN</h1>{" "}
      {/* 클래스명을 'signup-title'로 변경 */}
      <div className="signup-container">
        {" "}
        {/* 클래스명을 'signup-container'로 변경 */}
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
        <button className="signup-button" onClick={handleSignUp}>
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
