import React from "react";
import TaskGroupItem from "./TaskGroupItem/TaskGroupItem";
import styles from "./Home.module.css";

const Home = props => {
  const entries = Object.entries(props.groups);

  return (
    <div className={`row h-100 ${styles.Home}`}>
      <div className="col h-100">
        <div className="card-group pb-5">
          <div className="card h-100 border-0 ">
            <div className="card-title">
              <h1 className="font-weight-normal">Things To Do</h1>
            </div>
            <div className="card-body p-0 ">
              <ul className="list-group ">
                {entries.map(([key, group]) => (
                  <TaskGroupItem
                    group={group}
                    key={group.id}
                    handleGroupClick={props.handleGroupClick}
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

export default Home;
