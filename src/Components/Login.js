import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveUsers } from "../actions/users";
import { SET_AUTHED_USER } from '../actions/authedUser';

class Login extends Component {
  state = {
    optionValue: ''
  }

  componentDidMount() {
    new Promise(resolve => resolve(this.props.handleReceiveUsers()))
      .then(() => this.setState({ optionValue: this.props.usernames[0] }))
  }

  handleSelect = e => {
    this.setState({ optionValue: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    new Promise(resolve => {
        resolve(this.props.addAuthUser(this.state.optionValue));
    })
    .then(() => this.props.history.push("/"));
  }
  
  render() {
    const { usernames } = this.props;

    const userList = usernames.length === 0
      ? <option disabled>Loading...</option>
      : usernames.map((user, i) => (
          <option 
            key={i} 
            value={user}>{user}
          </option>
    ));

    return (
      <div>
        <h1>Welcome to Would You Rather!</h1>
        <form onSubmit={this.handleSubmit}>
          <select 
            onChange={this.handleSelect}
            value={this.state.optionValue}>
            {userList}
          </select>
          <button disabled={this.state.optionValue === undefined || this.state.optionValue === ''}>Sign in</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  usernames: Object.keys(users),
});

const mapDispatchToProps = dispatch => ({
  addAuthUser: id => dispatch({ 
    type: SET_AUTHED_USER,
    id 
  }),
  handleReceiveUsers: () => dispatch(handleReceiveUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);