json.extract! playlist, :id, :title, :description, :user_id, :song_ids
json.user_email playlist.user.email 
json.isLiked !!Like.find_by(
  user_id: current_user.id,
  likeable_id: playlist.id,
  likeable_type: 'Playlist'
)
json.cover_url url_for(playlist.cover) if playlist.cover.attached?