// ExchangeRate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExchangeRate = () => {
    const [exchangeRate, setExchangeRate] = useState(null);

    const getResultRates = async (searchDate) => {
        try {
            // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCode}`);
            // const response = await fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=AUTHKEY1234567890&searchdate=20180102&data=AP01`);
            // const response = await fetch(`http://127.0.0.1/currency/noticeExchangeRate?searchDate=20230102`);
            // const response = await axios.get(`http://127.0.0.1/currency/noticeExchangeRate?searchDate=20230102`);

            const response = await fetch('http://127.0.0.1/currency/noticeExchangeRate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // 이 헤더는 JSON 데이터를 전송할 때 필요합니다. 필요에 따라 콘텐츠 타입을 조정하세요.
                    // 필요한 경우 다른 헤더를 추가하세요.
                },
                body: JSON.stringify({
                    searchDate: '20230102',
                    // 요청 본문에 보낼 다른 데이터가 있으면 여기에 추가하세요.
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Unable to get the rate');
            }
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const result = await getResultRates('20230102');
                const result2 = result.filter((result) => {
                    return result.cur_unit === "USD";
                })
                setExchangeRate(result2);
                console.log(result)
                console.log(result2)
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };

        fetchExchangeRate();
    }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

    useEffect(() => {
        console.log(exchangeRate)
    }, [exchangeRate])

    return (
        <div>
            <h2>환율 정보</h2>
            {exchangeRate ? (
                <div>
                    {exchangeRate.map((item, index) => (
                        <p key={index}>현재 환율 ({item.cur_unit}): {item.ttb}</p>
                        //  {/* 다른 필요한 속성들을 추가로 표시하세요 */}
                    ))}
                </div>
            ) : (
                <p>환율 정보를 불러오는 중...</p>
            )}
        </div>
    );
};

export default ExchangeRate;