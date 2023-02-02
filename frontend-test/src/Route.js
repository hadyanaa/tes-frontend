import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Auth/Login";
import Profile from "./Auth/Profile";
import Register from "./Auth/Register";
import { UserContext } from "./Auth/UserContext";
import EditData from "./Crud/CrudFormEdit";
import TambahData from "./Crud/CrudFormTambah";
import LihatData from "./Crud/CrudLihatData";
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
            <Route exact path="/tpa/tambah-data">
                {user ? <TambahData/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/tpa/edit-data/:id">
                {user ? <EditData/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/tpa/lihat-data/:id">
                {user ? <LihatData/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/profile">
                {user ? <Profile/> : <Redirect to="/"/>}
            </Route>
        </Switch>
    );
};

export default Routes;