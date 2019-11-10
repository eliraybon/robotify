class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :playlists, dependent: :destroy

  has_many :followed_accounts,
    foreign_key: :user_id, 
    class_name: :Follow,
    dependent: :destroy

  has_many :follows, as: :followable, dependent: :destroy

  has_many :likes, dependent: :destroy

  has_many :followed_artists, 
    through: :followed_accounts, 
    source: :followable, 
    source_type: :Artist

  has_many :followed_users, 
    through: :followed_accounts, 
    source: :followable, 
    source_type: :User

  has_many :liked_songs,
    through: :likes, 
    source: :likeable, 
    source_type: :Song

  has_many :liked_albums, 
    through: :likes, 
    source: :likeable, 
    source_type: :Album

  has_many :liked_playlists, 
    through: :likes, 
    source: :likeable, 
    source_type: :Playlist

  has_many :followers, 
    through: :follows,
    source: :user

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.has_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token

    while User.exists?(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end

    self.save
    self.session_token
  end
end
