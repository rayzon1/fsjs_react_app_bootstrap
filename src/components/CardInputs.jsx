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
  const completeRef = React.createRef();

  const inputRef = React.createRef();
  const buttonRef = React.createRef();

  const submitStart = reference => {
    reference.current.removeAttribute("hidden");
    inputRef.current.hidden = true;
    buttonRef.current.hidden = true;
  };

  const timeOfDay = (
    <Card.Subtitle className="mb-2 text-muted" ref={timeRef} hidden>
      {start === "morning" || start === "Morning"
        ? start + " - (8 a.m)"
        : start === "noon" || start === "Noon"
        ? start + " - (12 p.m)"
        : start === "night" || start === "Night"
        ? start + " - (5 p.m)"
        : start}
    </Card.Subtitle>
  );

  const timeOfCompletion = (
    <span className="time-complete" ref={completeRef} hidden>
      {start}
    </span>
  );

  return (
    <Container>
      {timeOfDay}
      {timeOfCompletion}
      <InputGroup className="mb-3">
        <FormControl
          placeholder={props.placeholderGroup}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
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
