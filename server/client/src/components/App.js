import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';
import AddProject from './dashboard/project/AddProject';

class App extends Component {

    //as soon this component did mount - do logic inside
    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/addProject" component={AddProject} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
//rcc - generate class-based component
//rfc - generate function-based component
export default connect(null, actions)(App);