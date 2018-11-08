import React, { Component } from "react";
import TaskGroupItem from "./TaskGroupItem/TaskGroupItem";
import styles from "./Home.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actionCreators/actionCreators";
import { withRouter } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.loadTaskGroups();
  }

  render() {
    console.log("And?", this.props.taskGroups);

    if (!this.props.taskGroups) return null;
    const entries = Object.entries(this.props.taskGroups);

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
                      handleGroupClick={e => this.props.getTasks(e, group)}
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
    taskGroups: state.taskGroups
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadTaskGroups: () => dispatch(actions.loadTaskGroups()),
    getTasks: (e, group) =>
      dispatch(actions.getTasks(e, ownProps.history, group))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
