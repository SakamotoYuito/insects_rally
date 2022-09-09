import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { InsectsInfo } from "components/Card/HomeCard";
import styles from "./style.module.scss";

interface Props {
  info: InsectsInfo;
  isShow: boolean;
  onClose(): void;
}

const MyToast = (props: Props) => {
  return (
    <ToastContainer className="p-3" position="middle-center">
      <Toast
        className={styles.toastBody}
        show={props.isShow}
        onClose={() => props.onClose()}
      >
        <Toast.Header>
          <strong className="me-auto">{props.info.name}</strong>
          <small>Photo by </small>
        </Toast.Header>
        <Toast.Body>
          <div>
            <p>{props.info.id}</p>
            <p>{props.info.season}</p>
            <p>{props.info.classify}</p>
            <p>{props.info.season}</p>
          </div>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default MyToast;
