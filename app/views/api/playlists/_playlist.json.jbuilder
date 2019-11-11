json.extract! playlist, :id, :title, :description, :user_id, :song_ids
json.user_email playlist.user.email 
json.cover_url url_for(playlist.cover) if playlist.cover.attached?