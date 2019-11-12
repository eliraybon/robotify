class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  #how are you going to deal with user uploaded images?
  def create 
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render '/api/playlists/show'
      # render status: 200
    else
      render json: @playlist.errors.full_messages, status: 422
    end

    # render @playlist.save ? status: 200 : json: @playlist.errors.full_messages, status: 422
  end

  def update 
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    playlist = Playlist.find(params[:id])
    if playlist
      playlist.destroy
    else
      render json: ["Playlist doesn't exist"], status: 404
    end
  end

  def like
    @playlist = Playlist.find(params[:id])
    current_user.liked_playlists << @playlist
    render :show
  end

  def unlike
    @playlist = Playlist.find(params[:id])
    like = Like.find_by(
      likeable_id: @playlist.id,
      user_id: current_user.id,
      likeable_type: 'Playlist'
    )
    like.destroy
    render :show
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :description)
  end
end
