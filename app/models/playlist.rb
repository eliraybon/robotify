class Playlist < ApplicationRecord
  validates :title, presence: true

  belongs_to :user

  has_many :playlist_songs, dependent: :destroy

  has_many :songs, 
    through: :playlist_songs, 
    source: :song

  has_many :likes, as: :likeable, dependent: :destroy

  has_many :likers, 
    through: :likes, 
    source: :user
end
