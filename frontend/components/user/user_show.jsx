import React from 'react';
import PlaylistIndex from '../playlist/playlist_index_container';
import PlayButton from '../ui/play_button'; 

export default class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { followed: false };

    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId).then(() => {
      this.props.fetchPlaylists({ type: 'user', user_id: this.props.userId})
        .then(() => this.setState({ followed: this.props.user.isFollowed }));
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.fetchUser(this.props.userId).then(() => {
        this.setState({ followed: this.props.user.isFollowed });
      })
    }
  }

  followUser() {
    this.props.followUser(this.props.user.id).then(() => {
      this.setState({ followed: true });
    })
  }

  unfollowUser() {
    this.props.unfollowUser(this.props.user.id).then(() => {
      this.setState({ followed: false });
    })
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    const playlists = this.props.playlists.filter(playlist => {
      return playlist.user_id === user.id
    })

    let toggleFollow;
    if (this.state.followed) {
      toggleFollow = (
        <button className="follow-button" onClick={this.unfollowUser}>
          Unfollow
        </button>
      )
    } else {
      toggleFollow = (
        <button className="follow-button" onClick={this.followUser}>
          Follow
        </button>
      )
    }

    return (
      <section className="user-show">
        <div className="user-show-header">
          <h1 className="us-user-email">{user.email}</h1>

          <div className="user-show-buttons">
            <PlayButton />
            {toggleFollow}
          </div>
        </div>

        <h2 className="section-title">Playlists</h2>
        <div className="user-show-playlists">
          <PlaylistIndex selectedPlaylists={ playlists } />
        </div>
      </section>
    )
  }
}

