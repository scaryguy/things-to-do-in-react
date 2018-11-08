import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { Route, withRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import GroupDetail from "../components/GroupDetail/GroupDetail";
import Data from "../constants/Data";
import TaskModel from "../model/TaskModel";
import { connect } from "react-redux";

class App extends Component {
  state = {
    data: [],
    taskGroups: {},
    currentGroup: null,
    currentTasks: []
  };

  componentDidMount() {
    this.setState({
      data: Data,
      taskGroups: TaskModel.taskGroups(Data)
    });
  }

  handleGroupClick = (e, group) => {
    // e.preventDefault();
    // this.setState(prevState => {
    //   return {
    //     currentTasks: TaskModel.getTasks(prevState.data, group),
    //     currentGroup: group
    //   };
    // });
    // this.props.history.push(`/group/${group.id}`);
  };

  handleTaskClick = (e, task, completed) => {
    if (TaskModel.checkCompletable(task)) {
      this.setState(prevState => {
        const newData = TaskModel.updateTask(
          prevState.data,
          task.id,
          completed
        );
        return {
          data: newData,
          taskGroups: TaskModel.taskGroups(newData),
          currentTasks: TaskModel.getTasks(newData, task.group)
        };
      });
    }
  };

  resetState = e => {
    e.preventDefault();

    this.setState({
      data: Data,
      taskGroups: TaskModel.taskGroups(Data),
      currentGroup: null,
      currentTasks: []
    });
  };

  render() {
    return (
      <Layout resetState={this.resetState}>
        <Route
          path="/"
          exact
          render={() => <Home handleGroupClick={this.handleGroupClick} />}
        />
        <Route
          path="/group/:id"
          exact
          render={() => (
            <GroupDetail
              group={this.props.currentGroup}
              tasks={this.props.currentTasks}
              handleTaskClick={this.handleTaskClick}
            />
          )}
        />
      </Layout>
    );
  }
}

const mapPropsToState = state => {
  return {
    currentGroup: state.currentGroup,
    currentTasks: state.currentTasks
  };
};

export default withRouter(connect(mapPropsToState)(App));
