import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar';
import Login from './Login';
import Dashboard from './Dashboard';
import LeaderBoard from './LeaderBoard';
import AddQuestion from './AddQuestion';
import Result from './Result';

class App extends Component {
  render() {
    const { isAuthed } = this.props;

    return (
      <Router>
        <NavBar isAuthed={isAuthed} />
        <Route path='/' exact render={() => (
          isAuthed
          ? <Dashboard />
          : <Redirect to='/login' />
        )} />
        <Route path='/result/id/:id' render={ () => (
          isAuthed
            ? <Result />
            : <Redirect to='/login' />
        )} />
        <Route path='/login' component={Login} />
        <Route path='/leaderboard' component={LeaderBoard} />
        <Route path='/add' exact render={() => (
          isAuthed
            ? <AddQuestion />
            : <Redirect to='/login' />
        )} />
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  isAuthed: authedUser !== null,
});

export default connect(mapStateToProps)(App);
