// AccountInfo.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      // 여기에서 실제로 API 호출 등을 통해 데이터를 가져오는 로직을 구현해야 합니다.
      const result = await fetchUserInfo();
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
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   userId: userId,
        //   password: password,
        // }),
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
      <button onClick={handleUserInfoClick}>UserInfo 조회 버튼</button>

      {userInfo && (
        <div>
          <h2>UserInfo</h2>
          <p>아이디: {userInfo.userId}</p>
          <p>사용자명: {userInfo.userName}</p>
          <p>패스워드: {userInfo.password}</p>
          <p>별명: {userInfo.nickName}</p>
          <p>휴대폰번호: {userInfo.phoneNo}</p>
          <p>
            계좌목록:{" "}
            {[
              userInfo.acntList.acntName,
              userInfo.acntList.acntNo,
              userInfo.acntList.balance,
              userInfo.acntList.blockYn,
            ]}
          </p>
          <p>???: {userInfo.cddYn}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
