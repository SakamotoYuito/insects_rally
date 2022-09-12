import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./style.module.scss";

export type QuizList = {
  id: number;
  title: string;
  place: "mt" | "rv" | "gd";
  message?: string;
  map?: string;
  congestion?: number;
  trophy?: boolean;
};

type Props = {
  quiz: QuizList[];
};

const ListComponent = (props: Props) => {
  return (
    <>
      {props.quiz.map((quizObj: QuizList) => (
        <ListGroup as="ol" key={quizObj.id}>
          <ListGroup.Item
            as="li"
            className={`d-flex justify-content-between align-items-start ${styles.list}`}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{quizObj.title}</div>
              {quizObj.message !== undefined ? quizObj.message : null}
            </div>
            <Badge bg="primary" pill>
              現在14人
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
};

export default ListComponent;
