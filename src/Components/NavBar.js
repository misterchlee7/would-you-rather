import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { isAuthed } = this.props;

    const loginLogoutButton = isAuthed
      ? <NavLink to='/'>Logout</NavLink>
      : <NavLink to='/login'>Login</NavLink>

    return (
      <nav>
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
        </ul>
      </nav>
    );
  }
}

export default NavBar;