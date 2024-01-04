// Main.js
import React, { useState, useEffect } from "react";
import ExchangeRate from "./exchangeRate";
import AccountInfo from "../components/AccountInfo";
import { Link } from "react-router-dom";
import "./main.css"; // Main 페이지에 대한 스타일 파일을
import UserInfo from "../components/UserInfo";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const { state } = location;

  const loggedIn = state?.loggedIn || false;
  const userId = state?.userId || "";
  const password = state?.password || "";
  const [menuOpen, setMenuOpen] = useState(false); // menu 상태

  // menu 동작
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    console.log("받아온 파라미터값");
    console.log("loggedIn: ", loggedIn);
    console.log("userId: ", userId);
    console.log("password: ", password);
  }, [loggedIn, userId, password]);

  return (
    <div>
      <h1 className="main-title">Main Page</h1>

      <div className="main-container">
        <div className="info-container">
          <UserInfo />
          <AccountInfo />
        </div>
        <div className="navigation-buttons">
          <Link to="/exchangeRate">
            <button className="exchange-rate-button">
              Exchange Rate로 이동
            </button>
          </Link>
          <button className="menu-button">메뉴</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
