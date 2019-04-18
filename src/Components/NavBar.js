import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_AUTHED_USER } from '../actions/authedUser';

class NavBar extends Component {
  render() {
    const { isAuthed } = this.props;

    const loginLogoutButton = isAuthed
      ? <NavLink to='/' onClick={this.props.logout}>Logout</NavLink>
      : <NavLink to='/login'>Login</NavLink>

    const greeting = isAuthed
      ? <div><img src={this.props.users[this.props.authUser].avatarURL} alt='profile' width='40' height='40' />Welcome {this.props.authUser}</div>
      : null

    return (
      <nav id='navbar'>
        <ul>
          <li>
            <NavLink to='/' exact>Home</NavLink>
          </li>
          <li>
            <NavLink to='/add'>New Question</NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>Leader Board</NavLink>
          </li>
          <li>
            {loginLogoutButton}
          </li>
          <li>
            {greeting}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  authUser: authedUser,
  users,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: SET_AUTHED_USER, id: null })
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);