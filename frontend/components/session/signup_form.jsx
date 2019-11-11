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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({ 
      email: this.state.email, 
      password: this.state.password 
    });
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

  confirmEmailErrors() {
    const { email, confirmEmail } = this.state;
    if (email && confirmEmail && email.slice(0, confirmEmail.length) != confirmEmail) {
      return <div className="session-errors">Email adress doesn't match</div>
    };
  };

  dayErrors() {
    if (this.state.day === '') return null;
    const day = parseInt(this.state.day);
    if (!day || day < 0 || day > 31) {
      return <div className="session-errors">Invalid day</div>
    };
  }

  yearErrors() {
    if (this.state.year === '') return null;
    const year = parseInt(this.state.year);

    if (year) {
      if (year > 999 && year < 1900 || year > 2019) {
        return <div className="session-errors">No time travelers allowed</div>
      }
    } else {
      return <div className="session-errors">Invalid year</div>
    }
  }

  render() {
    return (
      <div className="signup">

        <form className="signup-form" onSubmit={this.handleSubmit}>

          <button 
            className="demo-button" 
            onClick={this.props.demoLogin}>
              Log In As Demo User
          </button>

          <div className="div-line">
            <span className="or">or</span>
          </div>

          <div className="signup-prompt">Sign up with your email address</div>
          <div className="session-errors">{this.renderErrors()}</div>

          <label>
            <input 
              className="input email-input"
              type="text"
              placeholder="Email"
              value={ this.state.email }
              onChange={ this.update('email') }
            />
          </label>

          <label>
            <input
              className="input confirm-email-input"
              type="text"
              placeholder="Confirm email"
              value={this.state.confirmEmail}
              onChange={this.update('confirmEmail')}
            />
            {this.confirmEmailErrors()}
          </label>

          <label>
            <input
              className="input password-input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <label>
            <input
              className="input username-input"
              type="text"
              placeholder="What should we call you?"
            />
          </label>

          <div className="date-of-birth-header">Date of Birth</div>
          <label className="date-of-birth">
            <select className="month" placeholder="Month">
              <option selected disabled>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            <input 
              className="day"
              type="text"
              placeholder="Day"
              value={this.state.day}
              onChange={this.update('day')}
            />

            <input
              className="year"
              type="text"
              placeholder="Year"
              value={this.state.year}
              onChange={this.update('year')}
            />
          </label>
          {this.dayErrors()}
          {this.yearErrors()}

          <div className="radio-buttons">

            <label className="gender-radio">
              <input type="radio" name="gender" />
              <span className="radio-text">Male</span>
            </label>
  
            <label className="gender-radio">
              <input type="radio" name="gender" />
              <span className="radio-text">Female</span>
            </label>
  
            <label className="gender-radio">
              <input type="radio" name="gender" />
              <span className="radio-text">Non-binary</span>
            </label>
          </div>


          <button className="session-button">{this.props.formType}</button>
        </form>

        <div className="login-instead">Already have an account? {this.props.navLink}</div>
      </div>
    )
  }
}