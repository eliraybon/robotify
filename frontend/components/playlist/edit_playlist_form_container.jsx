import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import { fetchPlaylist, updatePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    formType: 'Edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    processForm: playlist => dispatch(updatePlaylist(playlist))
  };
};

class EditPlaylistForm extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);

      // .then((playlist) => {
      //   this.setState({ photoUrl: playlist.cover_url })
      // })
  }

  render() {
    const { processForm, formType, playlist } = this.props;
    if (!playlist) return null;
    return (
      <PlaylistForm
        processForm={ processForm }
        formType={ formType }
        playlist={ playlist } 
      />
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlaylistForm));

