import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Dashboard from './Dashboard';
import Header from './layout/Header';
import AddProject from "./project/AddProject";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addProject" component={AddProject} />
            </div>
        </Router>
    );
};

export default App;