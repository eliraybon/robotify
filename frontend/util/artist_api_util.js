export const fetchArtist = artistId => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}`
  });
};

export const followArtist = artistId => {
  return $.ajax({
    method: 'POST',
    url: `/api/artists/${artistId}/follow`
  });
};

export const unfollowArtist = artistId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/artists/${artistId}/unfollow`
  });
};

