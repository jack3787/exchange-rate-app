// AccountInfo.js
import React, { useState, useEffect } from "react";
import "./AccountInfo.css";

const AccountInfo = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountInfo, setAccountInfo] = useState(null);
  const acntNo = "";
  const bkGbn = "";
  const balance = "";
  const acntName = "";
  const blockYn = "";

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  /**
   * @role 계좌조회 api 호출 및 리턴값 설정
   */
  const handleSearchClick = async () => {
    try {
      // 여기에서 실제로 API 호출 등을 통해 데이터를 가져오는 로직을 구현해야 합니다.
      // 예시로 간단하게 더미 데이터를 사용합니다.
      // const dummyData = {
      //   accountNumber: "123456789",
      //   balance: 1000000,
      //   ownerName: "John Doe",
      // };
      // setAccountInfo(dummyData);

      const result = await fetchAccount();
      setAccountInfo({
        acntNo: acntNo, // 계좌번호
        bkGbn: bkGbn, // 은행코드
        balance: balance, // 잔액
        acntName: acntName, // 계좌명
        blockYn: blockYn, // 계좌정지여부
      });
      console.log("accountInfo: ", accountInfo);
      console.log("계좌조회 성공");
    } catch (error) {
      console.error("Error fetching account information:", error);
    }
  };

  /**
   * @role 계좌조회 api 통신
   */
  const fetchAccount = async () => {
    try {
      // 필수 IDT 값 없음
      const response = await fetch("http://127.0.0.1/account/inquiry", {
        method: "POST",
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(response);
        // countryArr = [response.json.cur_unit]
        return data;
      } else {
        throw new Error("Unable to fetch account");
      }
    } catch (error) {
      console.error("Error fetching account:", error);
      throw error;
    }
  };

  return (
    <div>
      {/* <h1>MODEUN 계좌조회</h1> */}
      {/* <label htmlFor="accountNumber">계좌 번호:</label>
      <input
        type="text"
        id="accountNumber"
        value={accountNumber}
        onChange={handleAccountNumberChange}
      /> */}
      <button className="accountInfo-buttons" onClick={handleSearchClick}>
        계좌조회 버튼
      </button>

      {accountInfo && (
        <div>
          <h2>계좌 정보</h2>
          <p>계좌번호: {accountInfo?.acntNo}</p>
          <p>은행코드: {accountInfo?.bkGbn}</p>
          <p>잔액: {accountInfo?.balance}</p>
          <p>계좌명: {accountInfo.acntName}</p>
          <p>계좌정지여부: {accountInfo.blockYn}</p>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
