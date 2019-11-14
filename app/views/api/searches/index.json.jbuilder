json.songs do 
  @songs.each do 
    json.set! song.id do
      json.partial! '/api/songs/songs', song: song
    end
  end
end

json.albums do 
  @albums.each do 
    json.set! album.id do 
      json.partial! '/api/albums/album', album: album
    end
  end
end

json.artists do 
  @artists.each do 
    json.set! artists.id do 
      json.partial! '/api/artists/artist', artist: artist
    end
  end
end

