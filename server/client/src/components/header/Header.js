import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return;

            case false:
                return (
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="register.html">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/auth/google">Sign In</a>
                            </li>
                        </ul>
                    </div>
                );

            default:
                return (
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/dashboard'} className="nav-link">Dashboard</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="/api/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                );
        }
    }

    render() {
        console.log(this.props);
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link 
                        to={this.props.auth ? '/dashboard' : '/'} 
                        className="navbar-brand">
                        Let's Work
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
        
                    {this.renderContent()}

                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return { auth: state.auth};
}

export default connect(mapStateToProps)(Header);