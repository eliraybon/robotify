class Api::SearchesController < ApplicationController
  def index 

    search_term = params[:search_term]
    if search_term == ""
      @artists = @albums = @songs = []
      render :index 
      return 
    end

    #this will be very slow. Think of a better way to do this later 
    @songs = Song.where("lower(title) LIKE ?", "#{search_term}%") || []
    @albums = Album.where("lower(title) LIKE ?", "#{search_term}%") || []
    @artists = Artist.where("lower(name)LIKE ?", "#{search_term}%") || []


    # @songs = Song.where(title: search_term) || []
    # @albums = Album.where(title: search_term) || []
    # @artists = Artist.where(name: search_term) || []
    # @playlists = Playlist.where("lower(title) LIKE ?", "#{search_term}%")
    render :index
  end
end
