import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      confirmEmail: '', 
      password: '',
      year: '',
      day: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    const errorLis = errors.map((error, i) => <li key={ i }>{ error }</li>)

    return (
      <ul>
        {errorLis}
      </ul>
    );
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit}>
          <button className="demo-button">Log In With Demo</button>
          <div className="div-line">
            <span className="or">or</span>
          </div>
          <div className="signup-prompt">Sign up with your email address</div>
          <div className="signup-errors">{this.renderErrors()}</div>

          <label>
            <input 
              className="email-input"
              type="text"
              placeholder="Email"
              value={ this.state.email }
              onChange={ this.update('email') }
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <button>{this.props.formType}</button>
        </form>
        {this.props.navLink}
      </div>
    )
  }
}