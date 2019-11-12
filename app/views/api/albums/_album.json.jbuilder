json.extract! album, :id, :title, :artist_id, :genre, :year, :song_ids
json.artist_name album.artist.name
json.cover_url url_for(album.cover) if album.cover.attached?