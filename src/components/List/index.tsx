import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import MyToast from "components/Toast";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

export type QuizList = {
  id: number;
  title: string;
  place: "mt" | "rv" | "gd";
  message: string;
  map?: string;
  congestion?: number;
  trophy?: boolean;
};

type Props = {
  quiz: QuizList;
};

const ListComponent = (props: Props) => {
  const [isToastShow, setIsToastShow] = useState(false);
  const appearToast = () => {
    setIsToastShow(!isToastShow);
  };

  const router = useRouter();
  const onButtonClick = () => {
    router.push({
      pathname: "/quiz",
      query: { id: props.quiz.id },
    });
  };

  return (
    <>
      <ListGroup as="ol" onClick={() => appearToast()}>
        <ListGroup.Item
          as="li"
          className={`d-flex justify-content-between align-items-start ${styles.list}`}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.quiz.title}</div>
            {props.quiz.message !== undefined ? props.quiz.message : null}
          </div>
          <Badge bg="primary" pill>
            現在14人
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <MyToast
        title={props.quiz.title}
        explain={props.quiz.message}
        isShow={isToastShow}
        onClose={() => appearToast()}
        button="クイズに回答する"
        buttonClick={() => onButtonClick()}
      />
    </>
  );
};

export default ListComponent;
