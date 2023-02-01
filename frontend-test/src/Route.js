import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { UserContext } from "./Auth/UserContext";
import Tla from "./Tla";
import Tpa from "./Tpa";

const Routes = () => {
    const [user] = useContext(UserContext)
    return (
        <Switch>
            <Route exact path="/tla">
                <Tla/>
            </Route>
            <Route exact path="/tpa">
                <Tpa/>  
            </Route>
            <Route exact path="/register">
                {!user ? <Register/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/login">
                {!user ? <Login/> : <Redirect to="/"/>}
            </Route>
        </Switch>
    );
};

export default Routes;