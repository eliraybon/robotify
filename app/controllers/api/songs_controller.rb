class Api::SongsController < ApplicationController
  def index 
    
  end

  def like
    @song = Song.find(params[:id])
    current_user.liked_songs << @song
    render :show
  end

  def unlike 
    @song = Song.find(params[:id])

    like = Like.find_by(
      likeable_id: @song.id, 
      user_id: current_user.id, 
      likeable_type: 'Song'
    )
    
    like.destroy
    render :show
  end
end
