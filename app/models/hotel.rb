class Hotel < ApplicationRecord
  has_many :rooms
   has_many :pictures, through: :rooms
   has_many :reviews, through: :rooms
   has_many :bookings, through: :rooms
   has_many :attractions
   has_one :feature
   has_many :views, dependent: :destroy
   validates :lat, presence: true
   validates :long, presence: true

end
