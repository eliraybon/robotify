class Api::SongsController < ApplicationController
  def index 
    case params[:context]
    when 'library'
      @songs = current_user.liked_songs
    when 'browse'
      @songs = Song.all
    when 'explore'
      @songs = Song.all.take(4)
    end
    
    render :index 
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
