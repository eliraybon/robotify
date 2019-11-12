//using snake case to satisfy the controller in Rails
export const addSongToPlaylist = playlist_song => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: { playlist_song }
  });
};

export const deleteSongFromPlaylist= playlistSongId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${playlistSongId}`
  });
};

