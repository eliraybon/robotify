
export const getUsersPlaylists = state => {
  const { users, playlists } = state.entities;
  const session = state.session;
  const currentUser = users[session.currentUserId];

  const usersPlaylists = [];
  currentUser.playlist_ids.forEach(id => {
    usersPlaylists.push(playlists[id]);
  });

  return usersPlaylists;
}


export const getAlbumSongs = (state, albumId) => {
  return Object.values(state.entities.songs)
    .filter(song => song.album_id === albumId);
};

export const getPlaylistSongs = (state, playlistId) => {
  const playlist = state.entities.playlists[playlistId];
  debugger;
  return Object.values(state.entities.songs)
    .filter(song => playlist.song_ids.includes(song.id));
};

export const getLikedSongs = state => {
  return Object.values(state.entities.songs).filter(song => song.isLiked);
};