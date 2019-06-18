import React from "react";
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from "react-bootstrap";

const SearchForm = (props) => {
  const { value, handleChange, handleSubmit, placeholder } = props

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup controlId="formInlineEmail">
        <FormControl 
          type="search" 
          placeholder={placeholder} 
          value={value}
          onChange={handleChange}
        />
      </FormGroup>{" "}
      <Button 
          type="submit" 
      >search</Button>
    </Form>
  )
  };

export default SearchForm;
