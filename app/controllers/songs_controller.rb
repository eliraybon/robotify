class SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    render :show
  end
end