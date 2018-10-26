import React from "react";
import styles from "./TaskGroupItem.module.css";
// import { Link } from "react-router-dom";

const TaskGroupItem = ({ group, handleGroupClick }) => {
  return (
    <React.Fragment>
      <li
        className={
          `d-flex flex-column list-group-item border-left-0 border-right-0 p-3 ` +
          styles.liItem
        }
      >
        {/* <Link to={`/group/${group.id}`}>{group.title}</Link> */}
        <a
          className={styles.groupLink}
          href={`/group/${group.id}`}
          onClick={e => handleGroupClick(e, group)}
        >
          {group.title}
        </a>
        <small className={styles.completed}>
          {group.completed} OF {group.total} TASKS COMPLETED
        </small>
      </li>
    </React.Fragment>
  );
};

export default TaskGroupItem;
