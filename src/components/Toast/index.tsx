import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import styles from "./style.module.scss";
import { Button } from "react-bootstrap";
import Image from "next/image";

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
              <Image
                src={props.image}
                width={500}
                height={500}
                objectFit="contain"
                alt={props.title}
                quality={20}
              />
            ) : null}
            <p>{props.explain}</p>
            {props.button !== undefined && props.buttonClick !== undefined ? (
              <div className={styles.button}>
                <Button onClick={props.buttonClick}>{props.button}</Button>
              </div>
            ) : null}
          </div>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default MyToast;
