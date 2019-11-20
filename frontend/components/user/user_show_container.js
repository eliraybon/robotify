import { connect } from 'react-redux';
import UserShow from './user_show';
import {
  fetchUser,
  followUser,
  unfollowUser
} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  return {
    userId,
    user: state.entities.users[userId],
    playlists: Object.values(state.entities.playlists).filter(playlist => {
      return playlist.id === userId 
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    followUser: userId => dispatch(followUser(userId)),
    unfollowUser: userId => dispatch(unfollowUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);