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
      <ProgressBar>
        <ProgressBar
          striped
          variant="info"
          now={props.progressValueList[0]}
          key={1}
        />
        <ProgressBar striped now={props.progressValueList[1]} key={2} />
        <ProgressBar
          striped
          variant="warning"
          now={props.progressValueList[2]}
          key={3}
        />
        <ProgressBar
          striped
          variant="danger"
          now={props.progressValueList[3]}
          key={4}
        />
      </ProgressBar>
      <div className={styles.label}>
        <a>{props.currentProgress}/100</a>
      </div>
    </div>
  );
};

export default MyProgressBar;
