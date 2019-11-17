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

  # def destroy
  #   playlist_song = PlaylistSong.find(params[:id])

  #   if playlist_song
  #     playlist_song.destroy

  #     #i added this render way after the fact. Delete it if something is going wrong here 
  #     render '/api/playlists/show'
  #   else
  #     render json: ['Song not found in this playlist'], status: 404
  #   end
  # end

  def remove
    playlist_song = PlaylistSong.find_by(
      song_id: params[:song_id],
      playlist_id: params[:playlist_id]
    )
    if playlist_song
      playlist_song.destroy
      @playlist = Playlist.find(params[:playlist_id])
      render '/api/playlists/show'
    else
      render json: ['Song not found'], status: 404
    end

  end

  private 
  def playlist_song_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end
end
