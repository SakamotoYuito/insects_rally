import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
  validated: boolean;
  label: string;
  type: string;
  placeHolder: string;
  feedback: string;
  onSubmit(value?: any): void;
  onChange(value?: any): void;
  buttonStr: string;
}

const MyForm: React.FunctionComponent<Props> = (props) => {
  return (
    <Form
      noValidate
      validated={props.validated}
      onSubmit={(e) => props.onSubmit(e)}
    >
      <Form.Group controlId="validationCustom01">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          required
          type={props.type}
          placeholder={props.placeHolder}
          onChange={(e) => props.onChange(e)}
        />
        <Form.Control.Feedback type="invalid">
          {props.feedback}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">{props.buttonStr}</Button>
    </Form>
  );
};

export default MyForm;
