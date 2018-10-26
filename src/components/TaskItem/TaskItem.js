import React from "react";
// import styles from "./TaskItem.module.css";
// import { Link } from "react-router-dom";

const TaskItem = ({ task, handleTaskClick }) => {
  const isChecked = task.completedAt === null ? false : true;
  return (
    <React.Fragment>
      <li
        className={`d-flex flex-column list-group-item border-left-0 border-right-0 p-3 `}
      >
        <label>{task.task}</label>
        <h6>{task.status}</h6>
        <input
          onChange={e => handleTaskClick(e, task, !isChecked)}
          type="checkbox"
          name="task"
          id={`task${task.id}`}
          checked={isChecked}
        />
      </li>
    </React.Fragment>
  );
};

export default TaskItem;
