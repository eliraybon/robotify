class Api::AlbumsController < ApplicationController
  def index 
    case params[:context]
    when 'library'
      @albums = current_user.liked_albums
    when 'explore'
      @albums = Album.all[0..4]
    when 'browse'
      @albums = Album.all
    when 'genre'
      @albums = []
      @albums.concat(Album.find_by(genre: 'Alternative'))
      @albums.concat(Album.find_by(genre: 'Electronic'))
      @albums.concat(Album.find_by(genre: 'Rock'))
    end

    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def like
    @album = Album.find(params[:id])

    current_user.liked_albums << @album
    @album.songs.each do |song|
      current_user.liked_songs << song if !current_user.liked_songs.include?(song)
    end
    render :show
  end

  def unlike
    #find album
    @album = Album.find(params[:id])

    #find associated album like
    album_like = Like.find_by(
      likeable_id: @album.id,
      user_id: current_user.id,
      likeable_type: 'Album'
    )

    #unlike the album
    album_like.destroy

    #unlike all of the album's songs
    @album.songs.each do |song|
      song_like = Like.find_by(
        likeable_id: song.id,
        user_id: current_user.id,
        likeable_type: 'Song'
      )
      song_like.destroy if song_like
    end

    render :show
  end
end

