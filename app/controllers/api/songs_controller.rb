class Api::SongsController < ApplicationController
  def index 

    case params[:context]
    when 'library'
      @songs = current_user.liked_songs
    when 'browse'
      @songs = Song.all.shuffle.take(16)
    when 'explore'
      @songs = Song.all.take(4)
    when 'radio'
      @songs = [];
      until @songs.length == 10 
        song = Song.all.sample
        @songs << song if !@songs.include?(song)
      end
    end

    if !@songs && params[:context][:type] === "album"
      @songs = Song.where(album_id: params[:context][:album_id])
    end

    if !@songs && params[:context][:type] === "playlist"
      playlist_songs = PlaylistSong.where(
        playlist_id: params[:context][:playlist_id]
      )

      @songs = []
      playlist_songs.each do |playlist_song|
        @songs << Song.find_by(id: playlist_song.song_id)
      end
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
