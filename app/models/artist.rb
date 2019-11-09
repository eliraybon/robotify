class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums

  has_many :songs, 
    through: :albums, 
    source: :songs

  has_many :follows, as: :followable

  has_many :followers, 
    through: :follows, 
    source: :user
end
