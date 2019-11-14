export const fetchSongs = context => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs',
    data: { context }
  });
};

export const likeSong = songId => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${songId}/like`
  });
};

export const unlikeSong = songId => {
  debugger;
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${songId}/unlike`
  });
};

