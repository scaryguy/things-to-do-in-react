import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { Route, withRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import GroupDetail from "../components/GroupDetail/GroupDetail";
import Serializer from "../util/Serializer";

class App extends Component {
  state = {
    tasks: [],
    taskGroups: {},
    currentGroup: null,
    currentTasks: []
  };

  handleGroupClick = (e, group) => {
    e.preventDefault();
    console.log(group);
    this.setState(prevState => {
      return {
        currentTasks: Serializer.getTasks(group.title),
        currentGroup: group
      };
    });
    this.props.history.push(`/group/${group.id}`);
  };

  componentDidMount() {
    console.log("ee?");

    this.setState({
      taskGroups: Serializer.taskGroups
    });
  }

  render() {
    return (
      <Layout>
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
            />
          )}
        />
      </Layout>
    );
  }
}

export default withRouter(App);
