class Song < ApplicationRecord
  validates :title, :runtime, :play_count, presence: true

  belongs_to :album

  has_one :artist, 
    through: :album, 
    source: :artist

  has_many :playlist_songs

  has_many :playlists, 
    through: :playlist_songs, 
    source: :playlist

  has_many :likes, as: :likeable

  has_many :likers,
    through: :likes, 
    source: :user
end
