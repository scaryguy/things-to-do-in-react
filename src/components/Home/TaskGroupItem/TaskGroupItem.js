import React from "react";
import styles from "./TaskGroupItem.module.css";

const TaskGroupItem = ({ group, handleGroupClick }) => {
  return (
    <li
      className={`d-flex flex-column list-group-item border-left-0 border-right-0 border-bottom-0 border-radius-0 p-4 ${
        styles.TaskGroupItem
      }`}
    >
      <a
        className={styles.groupLink}
        href={`/group/${group.id}`}
        onClick={e => handleGroupClick(e, group)}
      >
        {group.title}
      </a>
      <small className={styles.completed}>
        {group.completed} OF {group.total} TASKS COMPLETE
      </small>
    </li>
  );
};

export default TaskGroupItem;
