import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import styles from "./style.module.scss";
import { Button } from "react-bootstrap";

interface Props {
  title: string;
  explain: string;
  isShow: boolean;
  onClose(): void;
  small?: string;
  image?: string;
  button?: string;
  buttonClick?(): void;
}

const MyToast = (props: Props) => {
  return (
    <ToastContainer className={styles.container}>
      <Toast
        className={styles.toastBody}
        show={props.isShow}
        onClose={() => props.onClose()}
      >
        <Toast.Header>
          <strong className="me-auto">{props.title}</strong>
          {props.small !== undefined ? <small>{props.small}</small> : null}
        </Toast.Header>
        <Toast.Body>
          <div>
            {props.image !== undefined ? (
              <picture>
                <source srcSet={props.image} type="image/webp" />
                <img
                  className={styles.image}
                  src={props.image}
                  alt={props.title}
                />
              </picture>
            ) : null}
            <p>{props.explain}</p>
            {props.button !== undefined && props.buttonClick !== undefined ? (
              <Button onClick={props.buttonClick}>{props.button}</Button>
            ) : null}
          </div>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default MyToast;
