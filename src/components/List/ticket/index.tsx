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
      <a>最終試験 招待チケット</a>
      {state === "before" && isAfter === false && (
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className={`d-flex justify-content-center ${styles.before}`}
          >
            <div className="ms-2 me-auto">
              <div className="text-center">
                100ポイント集めて生き物博士の称号獲得にチャレンジしよう!
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
                  最終試験 招待チケットを手に入れた!
                </div>
                <p>
                  最初に集まった場所に戻り、最終試験を受けて生き物博士の称号をゲットしよう!
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <MyToast
            title="最終試験　招待チケット"
            explain="このチケットで最終試験をと受けることができます。会場に着いたら下のボタンを押してください"
            isShow={isToastShow}
            onClose={() => appearToast()}
            button="会場に着いた！"
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
              <div className="fw-bold">使用済み</div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default TicketComponent;
