import React from "react";
import styles from "./TaskItem.module.css";
// import { Link } from "react-router-dom";

const TaskItem = ({ task, handleTaskClick }) => {
  const isChecked = task.completedAt === null ? false : true;
  return (
    <div className={styles.TaskItem}>
      <li
        className={`d-flex flex-direction-column justify-content-start align-items-center list-group-item border-left-0 border-right-0 p-3 ${
          task.status === "LOCKED" ? styles.lockedTask : ""
        }`}
      >
        <input
          onChange={e => handleTaskClick(e, task, !isChecked)}
          type="checkbox"
          name="task"
          id={`task${task.id}`}
          checked={isChecked}
          disabled={task.status === "LOCKED" ? true : false}
        />
        <label htmlFor={`task${task.id}`}>{task.task}</label>
      </li>
    </div>
  );
};

export default TaskItem;
