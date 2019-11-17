//using snake case to satisfy the controller in Rails
export const addSongToPlaylist = playlist_song => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: { playlist_song }
  });
};

export const addAlbumToPlaylist = (album, playlistId) => {
  album.song_ids.forEach(songId => {
    const playlist_song = { song_id: songId, playlist_id: playlistId }
    $.ajax({
      method: 'POST',
      url: '/api/playlist_songs',
      data: { playlist_song }
    });
  });
}

//this method is going to have to change. I don't have anyway to get the
//playlistSongId on the front end. You'll need to send the playlist and the song
//and use find_by to grab the appropriate playlist_song on the backend
export const deleteSongFromPlaylist= playlistSongId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${playlistSongId}`
  });
};

