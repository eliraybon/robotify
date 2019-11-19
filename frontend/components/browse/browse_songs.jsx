import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from '../song/song_index';

class BrowseSongs extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    if (!songs) return null;

    return <SongIndex songs={songs} />
  }
}

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs('browse'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseSongs);