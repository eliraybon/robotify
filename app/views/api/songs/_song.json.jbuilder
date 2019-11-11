json.extract! song, :id, :title, :album_id, :runtime
json.artist_id song.artist.id
json.artist_name song.artist.name
json.album_title song.album.title
json.song_url url_for(song.track)

