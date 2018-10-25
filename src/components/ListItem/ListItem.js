import React from "react";
import styles from "./ListItem.module.css";

const ListItem = props => {
  return (
    <React.Fragment>
      <li
        className={
          `d-flex flex-column list-group-item border-left-0 border-right-0 p-3 ` +
          styles.liItem
        }
      >
        <a href="#">Task Group 1</a>
        <small className={styles.completed}>1 OF 3 TASKS COMPLETED</small>
      </li>
    </React.Fragment>
  );
};

export default ListItem;
