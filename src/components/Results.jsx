import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CardInputs from "./CardInputs.jsx";
import DescriptionInput from './DescriptionInput.jsx';
import DatePicker from "./DatePicker.jsx";



const Results = props => {
  const [placeholderGroup] = useState([
    "Start (Morning, Noon, Night)",
    "Time to completion"
  ]);
  const dateTextRef = React.createRef();
  const cardRef = React.createRef();

  return (
    <Card style={{ width: "25rem", height: "26.5rem" }} className="cards" ref={cardRef}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {placeholderGroup.map((val, index) => {
          return <CardInputs placeholderGroup={val} key={index} />;
        })}
        <Card.Text className="text-muted date">
          <span ref={dateTextRef} className="date-text">Please Choose an End Date</span>
          <DatePicker dateTextRef={dateTextRef} />
        </Card.Text>
        <DescriptionInput
          cardRef={cardRef}
         />
      </Card.Body>
    </Card>
  );
};

export default Results;
