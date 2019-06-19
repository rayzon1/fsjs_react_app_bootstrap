import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Form,
  Card
} from "react-bootstrap";
import LoadingButton from './LoadingButton.jsx';

const DescriptionInput = (props) => {
  const [textInput, setTextInput] = useState("");
  const [isHidden, setHidden] = useState(false);

  const textSubmit = e => {
    e.preventDefault();
    console.log("submitted...");
    setHidden(true);
  };

  const textAreaInput = (
    <Card.Text className={isHidden ? "" : "hidden"}>{textInput}</Card.Text>
  );

  return (
    <Form onSubmit={textSubmit} className="text-area-input">
      <InputGroup size="lg" style={{ height: "8rem", width: "21rem" }}>
        <Card.Subtitle>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            onChange={e => setTextInput(e.target.value)}
            placeholder="Description"
            className={isHidden ? "hidden" : "text-area"}
          />
        </Card.Subtitle>
        {textAreaInput}
      </InputGroup>

      <Button
        variant="light"
        type="submit"
        className={isHidden ? "hidden" : "text-area-button"}
      >
        Click
      </Button>
      <LoadingButton
        isHidden={isHidden}
        cardRef={props.cardRef}
        />
    </Form>
  );
};

export default DescriptionInput;
