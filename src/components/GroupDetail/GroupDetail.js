import React from "react";
// import ListItem from "../ListItem/TaskGroupItem";
import TaskItem from "../TaskItem/TaskItem";
import { Link, Redirect } from "react-router-dom";
import styles from "./GroupDetail.module.css";

const GroupDetail = ({ tasks, group, handleTaskClick }) => {
  return !group ? (
    <Redirect to="/" />
  ) : (
    <div className="row h-100 ">
      <div className="col h-100">
        <div className="card-group pb-5">
          <div className="card h-100 border-0 ">
            <div className="card-title d-flex flex-direction-column flex-wrap align-items-center">
              <h1 className="font-weight-normal">{group.title}</h1>
              <Link to="/" className={`ml-auto ${styles.allGroupsLink}`}>
                ALL GROUPS
              </Link>
            </div>
            <div className="card-body p-0 ">
              <ul className="list-group">
                {tasks.map(task => (
                  <TaskItem
                    task={task}
                    key={task.id}
                    handleTaskClick={handleTaskClick}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
