class Api::ArtistsController < ApplicationController
  def index 

    case params[:context]
    when 'library'
      @artists = current_user.followed_artists
    when 'browse'
      @artists = Artist.all
    end

    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  def follow
    @artist = Artist.find(params[:id])
    current_user.followed_artists << @artist
    render :show
  end

  def unfollow
    @artist = Artist.find(params[:id])
    follow = Follow.find_by(
      followable_id: @artist.id,
      user_id: current_user.id,
      followable_type: 'Artist'
    )
    follow.destroy
    render :show
  end
end
