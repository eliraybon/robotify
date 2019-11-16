json.extract! song, :id, :title, :album_id, :runtime
json.artist_id song.artist.id
json.artist_name song.artist.name
json.album_title song.album.title
json.isLiked !!Like.find_by(
  user_id: current_user.id,
  likeable_id: song.id,
  likeable_type: 'Song'
)
json.song_url url_for(song.track) if song.track.attached?
json.cover_url url_for(song.album.cover) if song.album.cover.attached?

