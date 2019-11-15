import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import { fetchPlaylist, updatePlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    playlist: state.entities.playlists[state.ui.modal.wildCard],
    formType: 'Edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    processForm: playlist => dispatch(updatePlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  };
};

class EditPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.photoUrl = null;
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { processForm, formType, playlist, closeModal } = this.props;
    if (!playlist) return null;
    return (
      <PlaylistForm
        processForm={ processForm }
        formType={ formType }
        playlist={ playlist } 
        closeModal={ closeModal }
      />
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlaylistForm));

