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

end
