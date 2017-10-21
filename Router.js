import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { Switch, NativeRouter, Route, Link } from "react-router-native";

import Home from "./Home";
import Main from "./Main";

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Main} />
    </Switch>
  </NativeRouter>
);
