class Api::AlbumsController < ApplicationController
  def index 
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end
end

