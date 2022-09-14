import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./style.module.scss";

type Props = {
  labels: string[];
  answer: string | number;
  buttonStr: string;
  onSubmit(value: React.FormEvent<HTMLFormElement>): void;
  onChange(value: React.BaseSyntheticEvent): void;
};

const MyRadioForm = (props: Props) => {
  return (
    <Form className={styles.form} onSubmit={(e) => props.onSubmit(e)}>
      <div className={styles.list}>
        {props.labels.map((label: string, index: number) => (
          <div key={`${index}`} className="mb-3">
            <Form.Check
              className={styles.check}
              type="radio"
              id={`${index}`}
              label={label}
              value={label}
              onChange={(e) => props.onChange(e)}
              checked={props.answer === label}
            />
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Button type="submit">{props.buttonStr}</Button>
      </div>
    </Form>
  );
};

export default MyRadioForm;
