import React from 'react';

export default class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    const playlist = this.props.playlist;
    playlist['photoUrl'] = this.props.playlist.cover_url || 'https://robotify-development.s3.amazonaws.com/upload_background.png'; 
    this.state = this.props.playlist;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleUpload.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('playlist[title]', this.state.title);
    formData.append('playlist[description]', this.state.description);
    formData.append('playlist[cover]', this.state.photoFile); 
    if (this.props.playlist.id) {
      formData.append('playlist[id', this.props.playlist.id);
    }

    this.props.closeModal();
    this.props.processForm(formData).then((payload) => {
      this.props.history.push(`/playlists/${payload.playlist.id}`)
    });
  }

  handleUpload(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  fakeClick() {
    document.getElementById('real-button').click();
  }

  render() {
    console.log(this.state);
    return (
      <div className="playlist-form">

        <h3>{this.props.formType} Playlist</h3>

          <form onSubmit={this.handleSubmit}>
            <div className="preview-container">
              <input 
                className="img-upload" 
                type="file" onChange={ this.handleFile } 
                id="real-button" 
              />

              <img 
                src={this.state.photoUrl} 
                width="200" 
                height="200" 
                className="preview" 
                onClick={this.fakeClick}
              />
            </div>
            <div className="form-main">
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
            </div>
            
          </form>
        </div>
    )
  }
}