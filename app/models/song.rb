class Song < ApplicationRecord
  validates :title, :runtime, :play_count, presence: true
end
