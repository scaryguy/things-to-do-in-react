import React, { Component } from "react";
// import ListItem from "../ListItem/TaskGroupItem";
import TaskItem from "./TaskItem/TaskItem";
import { Link, Redirect } from "react-router-dom";
import styles from "./GroupDetail.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actionCreators/actionCreators";

class GroupDetail extends Component {
  render() {
    return !this.props.group ? (
      <Redirect to="/" />
    ) : (
      <div className="row h-100 ">
        <div className="col h-100">
          <div className="card-group pb-5">
            <div className="card h-100 border-0 ">
              <div className="card-title d-flex flex-direction-column flex-wrap align-items-center">
                <h1 className="font-weight-normal">{this.props.group.title}</h1>
                <Link to="/" className={`ml-auto ${styles.allGroupsLink}`}>
                  ALL GROUPS
                </Link>
              </div>
              <div className="card-body p-0 ">
                <ul className="list-group">
                  {this.props.currentTasks.map(task => (
                    <TaskItem
                      task={task}
                      key={task.id}
                      handleTaskClick={e => this.props.updateTask(task)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    currentTasks: state.currentTasks
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTask: task =>
    dispatch(actions.updateTask(task, task.completed, ownProps.group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
