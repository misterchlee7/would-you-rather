import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Login from './Login';
import Dashboard from './Dashboard';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Route path='/' exact component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/leaderboard' component={LeaderBoard} />
      </Router>
    );
  }
}

export default connect()(App);
