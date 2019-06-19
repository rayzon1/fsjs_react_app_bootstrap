import React, { useState } from "react";
import { InputGroup, FormControl, Button, Spinner, Form, Card } from 'react-bootstrap';

const DescriptionInput = () => {
    const [textInput, setTextInput] = useState("");
    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    const textRef = React.createRef();
    const textSubmit = (e) => {
        e.preventDefault();
        console.log('submitted...')
        buttonRef.current.hidden = true;
        inputRef.current.hidden = true;
        textRef.current.hidden = false;
    }

    const textAreaInput = (
        <Card.Text ref={textRef} hidden>
            {textInput}
        </Card.Text>
    );

  return (
    <Form onSubmit={textSubmit} className="text-area-input">
        <InputGroup size="lg" style={{ height: "8rem", width: "21rem"}} >
            <Card.Subtitle >
                <FormControl 
                    as="textarea" 
                    aria-label="With textarea" 
                    onChange={e => setTextInput(e.target.value)}
                    ref={inputRef}
                    placeholder="Description"
                    className="text-area"
                    />
            </Card.Subtitle>
            {textAreaInput}
        </InputGroup>
        
        <Button variant="light" type="submit" ref={buttonRef} className="text-area-button">Click</Button>
        <Spinner animation="grow" variant="success" hidden />
    </Form>
  );
};

export default DescriptionInput;