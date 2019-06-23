import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/img/smart_home_logo.jpeg';
import './login.css';

export default class LoginPage extends React.Component {
  state = {
    password: '',
    username: '',
  };

  handleChange = name => (e) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  submitLogin = () => {
    window.location.replace(`${window.location.origin}/home`);
  }
  render() {
    const { password, username } = this.state;
    return (
      <div className="login-page">
        <form className="login-form">
          <div className="login-form-body">
            <img src={logo} alt="Smart Home" height="150" />
            <TextField
              id="username-name"
              label="Username"
              value={username}
              onChange={this.handleChange('username')}
              margin="normal"
            />
            <TextField
              id="username-name"
              label="Password"
              type="password"
              value={password}
              onChange={this.handleChange('password')}
              margin="normal"
            />
            <Button variant="contained" color="primary" disabled={!password || !username} onClick={this.submitLogin}>
            Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
