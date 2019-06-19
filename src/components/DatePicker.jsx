import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DatePick = (props) => {
    const [date, setDate] = useState(new Date());
   
    const dateText = () => props.dateTextRef.current.innerHTML = "End Date";

    return (
        
        <DatePicker 
            onChange={date => setDate(date)}
            value={date}
            onClick={dateText}
        />
        
    )
}

export default DatePick;