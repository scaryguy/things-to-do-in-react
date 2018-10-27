import React from "react";
import styles from "./TaskItem.module.css";
// import { Link } from "react-router-dom";

const TaskItem = ({ task, handleTaskClick }) => {
  const isChecked = task.completedAt === null ? false : true;
  return (
    <li
      className={`d-flex flex-direction-column list-group-item  border-right-0 border-left-0 p-4 ${
        styles.TaskItem
      } ${task.status === "LOCKED" ? styles.lockedTask : ""}`}
    >
      <input
        onChange={e => handleTaskClick(e, task, !isChecked)}
        type="checkbox"
        name="task"
        id={`task${task.id}`}
        checked={isChecked}
        disabled={task.status === "LOCKED" ? true : false}
      />
      <label
        htmlFor={`task${task.id}`}
        className={task.status == "COMPLETED" ? styles.completed : ""}
      >
        {task.task}
      </label>
    </li>
  );
};

export default TaskItem;
