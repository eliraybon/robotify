class Playlist < ApplicationRecord
  validates :title, presence: true
end
