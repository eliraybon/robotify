class Song < ApplicationRecord
  validates :title, :runtime, :play_count, presence: true

  belongs_to :album

  has_one :artist, 
    through: :album, 
    source: :artist

  has_many :playlist_songs, dependent: :destroy

  has_many :playlists, 
    through: :playlist_songs, 
    source: :playlist

  has_many :likes, as: :likeable, dependent: :destroy

  has_many :likers,
    through: :likes, 
    source: :user

  def runtime_to_seconds
    time = runtime.split(':').map(&:to_i)
    time[0] * 60 + time[1]
  end
end
