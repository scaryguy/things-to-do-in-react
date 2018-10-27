import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { Route, withRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import GroupDetail from "../components/GroupDetail/GroupDetail";
import Data from "../constants/Data";
import Serializer from "../util/Serializer";

class App extends Component {
  state = {
    data: [],
    taskGroups: {},
    currentGroup: null,
    currentTasks: []
  };

  handleGroupClick = (e, group) => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        currentTasks: Serializer.getTasks(prevState.data, group),
        currentGroup: group
      };
    });
    this.props.history.push(`/group/${group.id}`);
  };

  handleTaskClick = (e, task, completed) => {
    if (Serializer.checkCompletable(task)) {
      this.setState(prevState => {
        const newData = Serializer.updateTask(
          prevState.data,
          task.id,
          completed
        );
        return {
          data: newData,
          taskGroups: Serializer.taskGroups(newData),
          currentTasks: Serializer.getTasks(newData, task.group)
        };
      });
    }
  };

  resetState = e => {
    e.preventDefault();

    this.setState({
      data: Data,
      taskGroups: Serializer.taskGroups(Data),
      currentGroup: null,
      currentTasks: []
    });
  };

  componentDidMount() {
    this.setState({
      data: Data,
      taskGroups: Serializer.taskGroups(Data)
    });
  }

  render() {
    return (
      <Layout resetState={this.resetState}>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              groups={this.state.taskGroups}
              handleGroupClick={this.handleGroupClick}
            />
          )}
        />
        <Route
          path="/group/:id"
          exact
          render={() => (
            <GroupDetail
              group={this.state.currentGroup}
              tasks={this.state.currentTasks}
              handleTaskClick={this.handleTaskClick}
            />
          )}
        />
      </Layout>
    );
  }
}

export default withRouter(App);
