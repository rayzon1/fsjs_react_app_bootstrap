import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DatePick = (props) => {
    const [date, setDate] = useState(new Date());
    const [isDisabled, setDisable] = useState(false);
   
    const dateText = () => {
        props.dateTextRef.current.innerHTML = "End Date";
        setDisable(true);
    };

    return (
        
        <DatePicker 
            onChange={date => setDate(date)}
            value={date}
            onChange={dateText}
            disabled={isDisabled}
        />
        
    )
}

export default DatePick;