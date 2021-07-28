import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from './Employee';
import MyForm from './MyForm';
import Home from './Home';
import PageNotFound from './PageNotFound';
const Routes = () => {
    return (
        <Router>
            <div>
                <Link to="/home">Home</Link> {'  '}
                <Link to="/emp">Employee</Link> {'  '}
                <Link to="/form">MyForm</Link> {'  '}
                <Switch>
                    {/* add an exact path to base url  */}
                    <Route exact path="/"> <Home/> </Route>
                    <Route path="/emp"> <Employee /> </Route>
                    <Route path="/form"><MyForm /></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/*"><PageNotFound /></Route>
                </Switch>
            </div>
        </Router>
    );
};
export default Routes;















