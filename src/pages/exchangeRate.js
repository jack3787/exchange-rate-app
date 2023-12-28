// ExchangeRate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';      // 비동기 통신 라이브러리 (백엔드, 프론트엔드 통신을 쉽게..)
import './exchangeRate.css';

const ExchangeRate = () => {
    const [exchangeRate, setExchangeRate] = useState(null);             // 환율
    const [searchDate, setSearchDate] = useState('');                   // 입력한 날짜
    const [selectedCurrency, setSelectedCurrency] = useState('USD');    // 선택한 통화
    const countryArr = [];


    // 입력값 확인
    useEffect(() => {
        console.log("searchDate::: ", searchDate)
        console.log("selectedCurrency::: ", selectedCurrency)
        console.log("exchangeRate::: ", exchangeRate)
        console.log("")
    }, [searchDate, selectedCurrency, exchangeRate])


    // 날짜 입력 (api 호출 이전)
    const handleSearchDateChange = (event) => {
        setSearchDate(event.target.value.replace(/[^0-9]/g, ''));
        console.log("event::: ", event)
    };

    // 통화 선택 (api 호출 이후)
    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        console.log("event::: ", event)
    };

    // 조회 버튼
    const handleSearchButtonClick = () => {
        if (searchDate === '') {
            alert("날짜를 입력하세요")
        } else if (searchDate.length <= 7) {
            alert("YYYYMMDD 형식에 맞춰 날짜를 입력하세요.")
        } else {
            fetchExchangeRate();
        }
    };

    // 환율조회 api 호출 및 return 값 세팅
    const fetchExchangeRate = async () => {
        try {
            const result = await getResultRates(searchDate);
            // const filteredResult = result.filter((item) => item.cur_unit === 'USD');    // 배열 filter 사용하여, USD 환율을 불러온다.
            const filteredResult = result.filter((item) => item.cur_unit === selectedCurrency);    // 선택한 통화의 환율을 불러온다.
            console.log(selectedCurrency)
            console.log("filteredResult::: ", filteredResult)
            setExchangeRate(filteredResult);

            console.log("fetchExchangeRate 성공")
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
        }
    };

    /**
     * @role 환율조회 api 통신
     */
    const getResultRates = async (searchDate) => {
        try {
            const response = await fetch('http://127.0.0.1/currency/noticeExchangeRate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    searchDate: searchDate,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(response)
                // countryArr = [response.json.cur_unit]
                return data;
            } else {
                throw new Error('Unable to get the rate');
            }
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            throw error;
        }
    };


    return (
        <div>
            <h1 className="exchange-rate-title">환율 정보</h1>

            <div className="exchange-rate-container">
                <div className="search-container">
                    <input
                        type="text"
                        value={searchDate}
                        onChange={handleSearchDateChange}
                        placeholder="YYYYMMDD"
                        maxLength="8"
                    />
                    <button onClick={handleSearchButtonClick}>조회</button>
                </div>
                <div className="currency-select-container">
                    <label htmlFor="selectedCurrency">통화선택: </label>
                    <select id="selectedCurrency" value={selectedCurrency} onChange={handleCurrencyChange}>
                        {/* value에 정확한 값을 대입해야 합니다 */}
                        <option value="USD">USD</option>
                        <option value="HKD">HKD</option>
                        <option value="JPY(100)">JPY</option>
                        {/* 다른 나라 옵션들을 추가하세요 */}
                    </select>
                </div>
                {exchangeRate ? (
                    <div className="exchange-rate-list">
                        {exchangeRate.map((item, index) => (
                            <div key={index} className="exchange-rate-item">
                                <p className="rate-value">1 {item.cur_unit} = {item.ttb} ₩</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="loading-message">* 날짜를 입력하세요</p>
                )}
            </div>
        </div>
    );
};

export default ExchangeRate;