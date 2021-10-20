class User < ApplicationRecord
  has_secure_password
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  validates :name, presence: true
  validates :password, length: {minimum: 6}
  validates :email, presence: true, uniqueness: true, format: {with: VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
}
has_many :rooms, through: :bookings
# has_many :reviews, :through => :bookings, :source => rooms
has_many :bookings
end
