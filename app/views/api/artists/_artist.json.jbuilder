json.extract! artist, :id, :name, :bio, :song_ids, :album_ids
json.isFollowed !!Follow.find_by(
  user_id: current_user.id,
  followable_id: artist.id,
  followable_type: 'Artist'
)
json.profile_img_url url_for(artist.profile_img) if artist.profile_img.attached?
json.banner_img_url url_for(artist.banner_img) if artist.banner_img.attached?