export const fetchPlaylist = playlistId => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}`
  });
};

export const fetchPlaylists = context => {
  return $.ajax({
    method: 'GET',
    url: '/api/playlists',
    data: { context }
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: playlist,
    contentType: false, 
    processData: false
  });
};

export const updatePlaylist = playlist => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: playlist,
    contentType: false, 
    processData: false
  });
};

export const deletePlaylist = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}`
  });
};

export const likePlaylist = playlistId => {
  return $.ajax({
    method: 'POST',
    url: `/api/playlists/${playlistId}/like`
  });
};

export const unlikePlaylist = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}/unlike`
  });
};




