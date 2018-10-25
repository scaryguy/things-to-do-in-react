import React from "react";
import styles from "./TaskItem.module.css";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  return (
    <React.Fragment>
      <li
        className={`d-flex flex-column list-group-item border-left-0 border-right-0 p-3 `}
      >
        {/* <Link to={`/group/${group.id}`}>{group.title}</Link> */}
        <a className={styles.taskLink} href={`/task/${task.id}`}>
          {task.task}
        </a>
      </li>
    </React.Fragment>
  );
};

export default TaskItem;
