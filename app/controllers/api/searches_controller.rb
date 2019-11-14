class Api::SearchesController < ApplicationController
  def index 
    search_term = params[:search_term]

    #this will be very slow. Think of a better way to do this later 
    @songs = Song.where("lower(title) LIKE ?", "#{search_term}%")
    @albums = Album.where("lower(title) LIKE ?", "#{search_term}%")
    @artists = Artist.where("lower(name)LIKE ?", "#{search_term}%")
    # @playlists = Playlist.where("lower(title) LIKE ?", "#{search_term}%")
    
    render :index
  end
end
