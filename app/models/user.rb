# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  d_birth         :date             not null
#  is_host         :boolean          default(FALSE)
#  location_id     :integer          not null
#  about_text      :text
#  image_url       :string
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, uniqueness: true
  
  attr_reader :password

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location

  has_many :hostings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Booking
  
  has_many :bookings,
    primary_key: :id,
    foreign_key: :traveler_id,
    class_name: :Booking
    
  has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review
    

  
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
  
end
