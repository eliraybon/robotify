import React from 'react';

export default class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={ this.handleSubmit }>
          <label>Title
            <input 
              type="text"
              value={ this.state.title }
              onChange={ this.update('title') }
            />
          </label>

          <label>Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}