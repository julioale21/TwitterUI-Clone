import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import FeedScreen from "./screens/Feed";
import MessagesScreen from "./screens/Messages";

const app: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact component={FeedScreen} path="/" />
        <Route exact component={MessagesScreen} path="/messages" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default app;
