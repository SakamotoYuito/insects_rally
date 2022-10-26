import ListGroup from "react-bootstrap/ListGroup";
import MyToast from "components/Toast";
import { useState } from "react";
import styles from "./style.module.scss";
import { ticketHook } from "./hook";

export type TicketState = {
  state: "before" | "publication" | "after";
  docId: string;
};

const TicketComponent = ({ state, docId }: TicketState) => {
  const [isToastShow, setIsToastShow] = useState(false);
  const [isAfter, setIsAfter] = useState(false);
  const appearToast = () => {
    setIsToastShow(!isToastShow);
  };
  const onButtonClick = () => {
    setIsToastShow(!isToastShow);
    setIsAfter(true);
    ticketHook(docId);
  };

  return (
    <div className={styles.container}>
      <a>景品チケット</a>
      {state === "before" && isAfter === false && (
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className={`d-flex justify-content-center ${styles.before}`}
          >
            <div className="ms-2 me-auto">
              <div className="text-center">
                100ポイント集めて景品をゲットしよう!
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      )}
      {state === "publication" && isAfter === false && (
        <>
          <ListGroup as="ol" onClick={() => appearToast()}>
            <ListGroup.Item
              as="li"
              className={`d-flex justify-content-center ${styles.publication}`}
            >
              <div className="ms-2 me-auto">
                <div className={`fw-bold ${styles.title}`}>
                  景品チケットを手に入れた!
                </div>
                <p>
                  イベントが終わったら、受付に戻ってこのチケットを見せて景品と交換しよう!
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <MyToast
            title="景品チケット"
            explain="このチケットで景品と交換できます。交換したら下のボタンを押してください"
            isShow={isToastShow}
            onClose={() => appearToast()}
            button="景品をもらった！"
            buttonClick={() => onButtonClick()}
          />
        </>
      )}
      {state === "after" && (
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className={`d-flex justify-content-center ${styles.after}`}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                景品と交換済みです。アンケートに回答することで、さらに景品がもらえます。
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default TicketComponent;
