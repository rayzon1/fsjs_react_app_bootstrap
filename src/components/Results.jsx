import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardInputs from './CardInputs.jsx';

const Results = props => {
  const [placeholderGroup] = useState([
    "Start (Morning, Noon, Night)",
    "Time to completion"
  ]);

  return (
    <Card style={{ width: "25rem" }} className="cards">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <CardInputs 
          placeholderGroup={placeholderGroup.timeOfDay}
        />
        <CardInputs 
          placeholderGroup={placeholderGroup.timeToCompletion}
        /> */}
        {
          placeholderGroup.map((val, index) => {
            return <CardInputs 
              placeholderGroup={val}
              key={index}
            />
          })
        }
      </Card.Body>
    </Card>
  );

};

export default Results;
