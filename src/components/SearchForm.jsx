import React from "react";
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from "react-bootstrap";

const SearchForm = (props) => (
  <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder={props.placeholder} />
    </FormGroup>{" "}
    <Button 
        type="submit"
        onClick={undefined}    
    >search</Button>
  </Form>
);

export default SearchForm;
