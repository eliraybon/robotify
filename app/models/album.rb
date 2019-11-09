class Album < ApplicationRecord
  GENRES = [
    'Vaporwave',
    'Synthwave',
    'Chillwave',
    'Future Funk',
    'Lo-fi',
    'Punk',
    'New Wave',
    'Alternative',
    'Electronic',
    'Rock',
    'Pop'
  ].freeze

  validates :title, :release_date, presence: true
  validates :genre, inclusion: { in: GENRES }

  belongs_to :artist

  has_many :songs

  has_many :likes, as: :likeable

  has_many :likers, 
    through: :likes, 
    source: :user
end
