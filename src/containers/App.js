import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import GroupDetail from "../components/GroupDetail/GroupDetail";
import Serializer from "../util/Serializer";

class App extends Component {
  state = {
    tasks: [],
    taskGroups: {}
  };

  componentDidMount() {
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
          render={() => <Home groups={this.state.taskGroups} />}
        />
        <Route path="/group/:id" component={GroupDetail} />
      </Layout>
    );
  }
}

export default App;
