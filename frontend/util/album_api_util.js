export const fetchAlbum = albumId => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/${albumId}`
  });
};

