import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import styles from "./style.module.scss";

type Props = {
  title?: string;
  lines: Line[];
};

type Line = {
  key: string;
  value: string;
};

const TableComponent = (props: Props) => {
  return (
    <>
      <div className={styles.title}>
        {props.title ? (
          <ListGroup.Item variant="dark">{props.title}</ListGroup.Item>
        ) : null}
      </div>
      <Table className={styles.table}>
        <tbody>
          {props.lines.map((line) => (
            <tr>
              <td className={styles.key}>{line.key}</td>
              <td>{line.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
