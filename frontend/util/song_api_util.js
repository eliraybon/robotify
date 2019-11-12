export const likeSong = songId => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${songId}/like`
  });
};

export const unlikeSong = songId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${songId}/unlike`
  });
};

