import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type Props = {
  labels: string[];
  buttonStr: string;
  onSubmit(value: React.FormEvent<HTMLFormElement>): void;
};

const MyRadioForm = (props: Props) => {
  return (
    <Form onSubmit={(e) => props.onSubmit(e)}>
      {props.labels.map((label: string, index: number) => (
        <div key={`${index}`} className="mb-3">
          <Form.Check type="radio" id={`${index}`} label={label} />
        </div>
      ))}
      <Button type="submit">{props.buttonStr}</Button>
    </Form>
  );
};

export default MyRadioForm;
