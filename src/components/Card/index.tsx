import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { InsectsInfo } from "./HomeCard";
import styles from "./style.module.scss";
import MyToast from "components/Toast";

type Props = {
  info: InsectsInfo;
};

const CardComponent = (props: Props) => {
  const [isToastShow, setIsToastShow] = useState(false);
  const appearToast = () => {
    setIsToastShow(!isToastShow);
  };

  return (
    <>
      <Card className={styles.card} onClick={() => appearToast()}>
        <Card.Header>{props.info.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Badge className={styles.badge} pill bg="primary">
              分類
            </Badge>
            {props.info.classify}
          </ListGroup.Item>
          <ListGroup.Item>
            <Badge className={styles.badge} pill bg="primary">
              季節
            </Badge>
            {props.info.season}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <MyToast
        info={props.info}
        isShow={isToastShow}
        onClose={() => appearToast()}
      />
    </>
  );
};

export default CardComponent;
