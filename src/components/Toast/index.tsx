import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { InsectsInfo } from "components/Card/PictureCard";
import styles from "./style.module.scss";
import Image from "next/image";
import { Button } from "react-bootstrap";
import kamakiri from "assets/img/kamakiri.jpg";

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
              <img className={styles.image} src={props.image} />
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
