import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Card
} from "react-bootstrap";

const CardInputs = props => {
  const [start, setStart] = useState("");
  const timeRef = React.createRef();

  const inputRef = React.createRef();
  const buttonRef = React.createRef();

  const submitStart = reference => {
    reference.current.removeAttribute("hidden");
    inputRef.current.hidden = true;
    buttonRef.current.hidden = true;
    if(start === 'morning' || start === 'Morning') {
        timeRef.current.style.color = 'rgba(255, 144, 0, .8)';
    } else if(start ==='noon' || start === 'Noon') {
        timeRef.current.style.color = 'rgba(165, 112, 54, .8)';
    } else if(start==='night' || start === 'Night') {
        timeRef.current.style.color = 'rgba(55, 0, 183, .8)'
    }
  };

  const timeOfDay = (
    <Card.Subtitle ref={timeRef} className="subtitle" hidden>
      {start === "morning" || start === "Morning"
        ? start + " - (8 a.m)"
        : start === "noon" || start === "Noon"
        ? start + " - (12 p.m)"
        : start === "night" || start === "Night"
        ? start + " - (5 p.m)"
        : start}
    </Card.Subtitle>
  );

  return (
    <Container>
      <InputGroup className="mb-3">
        {timeOfDay}
        <FormControl
          placeholder={props.placeholderGroup}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="Subtitle"
          ref={inputRef}
          onChange={e => setStart(e.target.value)}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => submitStart(timeRef)}
            ref={buttonRef}
          >
            Click
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default CardInputs;
