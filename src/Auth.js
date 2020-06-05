import React, { Component } from "react";
import "./App.css";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      login: false,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    this.setState({ login: true });
    sessionStorage.setItem("login", "true");
    sessionStorage.setItem("username", this.state.username);
    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  changeLoginStatus = () => {
    sessionStorage.setItem("login", "false");
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    
    return (
      <div className="Login">
        {sessionStorage.getItem("login")==="true" ? (
            <div> <div>{sessionStorage.getItem("username")}</div>  
            <button className="signout" onClick={this.changeLoginStatus}>Sign Out</button>
            </div>
         
        ) : (
          <form onSubmit={this.handleSubmit}>
            {this.state.error && (
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            )}
            <label>UserName :</label>
            <input
              type="text"
              data-test="username"
              value={this.state.username}
              onChange={this.handleUserChange}
            />

            <label>Password :</label>
            <input
              type="password"
              data-test="password"
              value={this.state.password}
              onChange={this.handlePassChange}
            />

            <input type="submit" value="Log In" data-test="submit" />
          </form>
        )}
      </div>
    );
  }
}

export default LoginPage;
