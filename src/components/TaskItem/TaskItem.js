import React from "react";
import styles from "./TaskItem.module.css";
import * as tType from "../../constants/TaskTypes";

const TaskItem = ({ task, handleTaskClick }) => {
  const isChecked = task.completedAt === null ? false : true;
  return (
    <li
      className={`d-flex flex-direction-column list-group-item flex-wrap border-right-0 border-left-0 p-4 ${
        styles.TaskItem
      } ${task.status === tType.LOCKED ? styles.lockedTask : ""}`}
    >
      <input
        onChange={e => handleTaskClick(e, task, !isChecked)}
        type="checkbox"
        name="task"
        id={`task${task.id}`}
        checked={isChecked}
        disabled={task.status === tType.LOCKED ? true : false}
      />
      <label
        htmlFor={`task${task.id}`}
        className={task.status === tType.COMPLETED ? styles.completed : ""}
      >
        {task.task}
      </label>
    </li>
  );
};

export default TaskItem;
