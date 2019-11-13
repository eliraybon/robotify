import React from 'react';

export default class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //I need to redirect to the new playlist when it's created
  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.processForm(this.state).then((payload) => {
      debugger;
      this.props.history.push(`/playlists/${payload.playlist.id}`)
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="playlist-form">

        <h3>{this.props.formType} Playlist</h3>
        
        <div className="form-main">
          <img width="200" height="200" />

          <form onSubmit={this.handleSubmit}>
            <label>Title
            <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
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
      </div>
    )
  }
}