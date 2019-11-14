
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