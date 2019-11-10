import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

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
    const errorLis = errors.map((error, i) => <li key={i}>{error}</li>)

    return (
      <ul>
        {errorLis}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h2>{this.props.formType}</h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>Password
            <input
              type="password"
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