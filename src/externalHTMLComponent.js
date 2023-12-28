import React, { useState, useEffect } from 'react';

const ExternalHTMLComponent = () => {
    const [externalHTML, setExternalHTML] = useState('');

    useEffect(() => {
        // 외부 HTML 파일을 가져오는 비동기 함수 (예: fetch 사용)
        const fetchExternalHTML = async () => {
            try {
                const response = await fetch('/Users/kj/Github/Exchange-rate-app/main/index.html');
                const htmlContent = await response.text();
                setExternalHTML(htmlContent);
            } catch (error) {
                console.error('Error fetching external HTML:', error);
            }
        };

        fetchExternalHTML();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: externalHTML }} />
    );
};

export default ExternalHTMLComponent;
