import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    const { errors } = this.props;
    const errorLis = errors.map((error, i) => <li key={i}>{error}</li>)

    return (
      <ul>
        {errorLis}
      </ul>
    );
  };

  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>

          <div className="login-prompt">To continue, log in to Robotify.</div>

          <button 
            className="demo-button full"
            onClick={this.props.demoLogin}>
              Log In As Demo User
          </button>

          <div className="div-line">
            <span className="or">or</span>
          </div>

          <div className="session-errors">{this.renderErrors()}</div>

          <label>
            <input
             className="input email input"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>

          <label>
            <input
              className="input password input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <div className ="login-button">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button className="session-button">{this.props.formType}</button>
          </div>

          <div className="div-line"></div>
          <div className="login-prompt">Don't have an account?</div>
          {this.props.navLink}
        </form>
      </div>
    )
  }
}