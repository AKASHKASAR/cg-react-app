import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from './Employee';
import MyForm from './MyForm';
import Home from './Home';
import PageNotFound from './PageNotFound';
import MaterialUiSample from './MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header></Header>
                    {/* <Link to="/home">Home</Link> {'  '}
                <Link to="/emp">Employee</Link> {'  '}
                <Link to="/form">MyForm</Link> {'  '}
                <Link to="/mat">MaterialUiSample</Link> {'  '} */}
                    <div className="container">
                        <Switch>
                            {/* add an exact path to base url  */}
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/welcome"> <Welcome /> </Route>
                            <Route path="/emp"> <Employee /> </Route>
                            <Route path="/form"><MyForm /></Route>
                            <Route path="/home"><Home /></Route>
                            <Route path="/mat"><MaterialUiSample /></Route>
                            <Route path="/*"><PageNotFound /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            <Footer />
        </div>
    );
};
export default Routes;















