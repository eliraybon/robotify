export const fetchAlbum = albumId => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/${albumId}`
  });
};

export const likeAlbum = albumId => {
  return $.ajax({
    method: 'POST',
    url: `/api/albums/${albumId}/like`
  });
};

export const unlikeAlbum = albumId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/albums/${albumId}/unlike`
  });
};
