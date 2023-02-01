import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tla from "./Tla";
import Tpa from "./Tpa";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/tla">
            <Tla/>
        </Route>
        <Route path="/tpa">
            <Tpa/>  
        </Route>
      </Switch>
  );
};

export default Routes;