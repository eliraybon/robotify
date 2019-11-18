
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
}