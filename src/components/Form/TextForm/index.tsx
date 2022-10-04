import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./style.module.scss";

interface Props {
  validated: boolean;
  label?: string;
  type: string;
  placeHolder: string;
  feedback: string;
  onSubmit(value: React.FormEvent<HTMLFormElement>): void;
  onChange(value: React.BaseSyntheticEvent): void;
  buttonStr: string;
  error: string | null;
}

const MyTextForm: React.FunctionComponent<Props> = (props) => {
  return (
    <Form
      noValidate
      validated={props.validated && props.error !== null}
      onSubmit={(e) => props.onSubmit(e)}
    >
      <Form.Group controlId="validationCustom01">
        {props.label ? <Form.Label>{props.label}</Form.Label> : null}
        <Form.Control
          required
          type={props.type}
          placeholder={props.placeHolder}
          onChange={(e) => props.onChange(e)}
        />
        <Form.Control.Feedback type="invalid">
          {props.feedback}
        </Form.Control.Feedback>
        {props.error && props.validated ? <p>{props.error}</p> : null}
      </Form.Group>
      <Button className={styles.button} type="submit">
        {props.buttonStr}
      </Button>
    </Form>
  );
};

export default MyTextForm;
