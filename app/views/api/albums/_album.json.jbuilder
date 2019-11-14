json.extract! album, :id, :title, :artist_id, :genre, :year, :song_ids
json.artist_name album.artist.name
json.isLiked !!Like.find_by(
  user_id: current_user.id,
  likeable_id: album.id,
  likeable_type: 'Album'
)
json.cover_url url_for(album.cover) if album.cover.attached?

