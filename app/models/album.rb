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
  # validate :ensure_album_cover  

  has_one_attached :cover

  belongs_to :artist

  has_many :songs, dependent: :destroy

  has_many :likes, as: :likeable, dependent: :destroy

  has_many :likers, 
    through: :likes, 
    source: :user

  # def ensure_album_cover
  #   unless self.cover.attached?
  #     errors[:cover] << "must exist"
  #   end
  # end

  def year
    release_date[-4..-1]
  end
end
