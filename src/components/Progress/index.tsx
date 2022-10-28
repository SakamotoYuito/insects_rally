import React from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "./style.module.scss";

type Props = {
  currentStatus: string;
  progressValueList: number[];
  currentProgress: number;
};

const MyProgressBar = (props: Props) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.title}>
        <a>Lv. {props.currentStatus}</a>
      </div>
      {props.currentStatus === "生き物博士" ? (
        <ProgressBar striped variant="danger" now={100} key={4} />
      ) : (
        <ProgressBar>
          <ProgressBar
            variant="info"
            now={props.progressValueList[0]}
            key={1}
          />
          <ProgressBar now={props.progressValueList[1]} key={2} />
          <ProgressBar
            variant="warning"
            now={props.progressValueList[2]}
            key={3}
          />
          <ProgressBar
            variant="danger"
            now={props.progressValueList[3]}
            key={4}
          />
        </ProgressBar>
      )}
      <div className={styles.label}>
        <a>{props.currentProgress}/100</a>
      </div>
    </div>
  );
};

export default MyProgressBar;
