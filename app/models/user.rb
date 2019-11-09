class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_intialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
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
