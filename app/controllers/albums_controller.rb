##this controller is for testing Active Storage. Delete later. 

class AlbumsController < ApplicationController 
  def show
    @album = Album.find(params[:id])
    render :show
  end
end