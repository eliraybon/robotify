class Api::PlaylistSongsController < ApplicationController
  def create 
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      @playlist = Playlist.find(@playlist_song.playlist_id)
      render '/api/playlists/show'
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    playlist_song = PlaylistSong.find(params[:id])

    if playlist_song
      playlist_song.destroy
    else
      render json: ['Song not found in this playlist'], status: 404
    end
  end

  private 
  def playlist_song_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end
end
