class Album < ApplicationRecord
  GENRES = [
    'Alternative',
    'Electronic',
    'Synthwave',
    'Chillwave',
    'Vaporwave',
    'Future Funk',
    'Lo-fi',
    'Punk',
    'New Wave',
    'Rock',
    'Pop'
  ].freeze

  validates :title, :release_date, presence: true
  validates :genre, inclusion: { in: GENRES }

end
