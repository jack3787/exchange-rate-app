// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <div>
            <h1>나의 캘린더</h1>
            <Calendar onChange={onChange} value={date} />
        </div>
    );
};

export default MyCalendar;
