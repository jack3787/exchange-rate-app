// AccountInfo.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./UserInfo.css";

const UserInfo = () => {
  const location = useLocation();
  const { state } = location;

  const [userInfo, setUserInfo] = useState();
  const userId = state?.userId || "";
  const password = state?.password || "";
  const userName = "";
  const nickName = "";
  const phoneNo = "";
  const acntList = {
    acntName: "",
    acntNo: "",
    balance: "",
    blockYn: "",
  };
  const cddYn = "";

  const handleUserInfoClick = async () => {
    try {
      const result = await fetchUserInfo(); // await를 사용하여 fetchUserInfo()의 결과를 기다린다. ==> 비동기 작업을 동기적으로 다루는 것과 유사한 효과
      setUserInfo({
        userId: userId, // 아이디
        userName: userName, // 사용자명
        password: password, // 패스워드
        nickName: nickName, // 별명
        phoneNo: phoneNo, // 휴대폰번호
        acntList: {
          // 계좌목록
          acntName: acntList.acntName,
          acntNo: acntList.acntNo,
          balance: acntList.balance,
          blockYn: acntList.blockYn,
        },
        cddYn: cddYn, // ???
      });
      console.log("accountInfo: ", userInfo);
      console.log("계좌조회 성공");
    } catch (error) {
      console.error("Error fetching account information:", error);
    }
  };

  /**
   * @role userInfo조회 api 통신
   */
  const fetchUserInfo = async () => {
    try {
      // 필수 IDT 값 없음
      const response = await fetch("http://127.0.0.1/user/info", {
        method: "POST",
        credentials: "include",
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(response);
        // countryArr = [response.json.cur_unit]
        return data;
      } else {
        throw new Error("Unable to fetch userInfo");
      }
    } catch (error) {
      console.error("Error fetching userInfo:", error);
      throw error;
    }
  };

  return (
    <div>
      <button className="userInfo-buttons" onClick={handleUserInfoClick}>
        UserInfo 조회
      </button>

      {userInfo && (
        <div>
          <h2>UserInfo</h2>
          <p>아이디: {userInfo?.userId}</p>
          <p>사용자명: {userInfo?.userName}</p>
          <p>패스워드: {userInfo?.password}</p>
          <p>별명: {userInfo?.nickName}</p>
          <p>휴대폰번호: {userInfo?.phoneNo}</p>
          {/* <p>
            계좌목록:{" "}
            {[
              userInfo.acntList.acntName,
              userInfo.acntList.acntNo,
              userInfo.acntList.balance,
              userInfo.acntList.blockYn,
            ]}
          </p> */}
          <p>???: {userInfo?.cddYn}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
