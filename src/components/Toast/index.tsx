import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { InsectsInfo } from "components/Card/HomeCard";
import styles from "./style.module.scss";
import Image from "next/image";
import kamakiri from "assets/img/kamakiri.jpg";

interface Props {
  info: InsectsInfo;
  isShow: boolean;
  onClose(): void;
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
          <strong className="me-auto">{props.info.name}</strong>
          <small>{props.info.gender}</small>
        </Toast.Header>
        <Toast.Body>
          <div>
            <Image src={kamakiri} />
            <p>{props.info.explain}</p>
          </div>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default MyToast;
