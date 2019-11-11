json.extract! artist, :id, :name, :bio, :song_ids, :album_ids
json.profile_img_url url_for(artist.profile_img) if artist.profile_img.attached?
json.banner_img_url url_for(artist.banner_img) if artist.banner_img.attached?