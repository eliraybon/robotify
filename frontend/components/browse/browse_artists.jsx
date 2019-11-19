import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import ArtistIndex from '../artist/artist_index';

class BrowseArtists extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists } = this.props;
    if (!artists) return null;

    return <ArtistIndex artists={ artists } />
  }
}

const mapStateToProps = state => {
  return {
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists('browse'))
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BrowseArtists);