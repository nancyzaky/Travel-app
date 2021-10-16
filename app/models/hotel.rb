class Hotel < ApplicationRecord
  has_many :rooms
   has_many :pictures, through: :rooms
   has_many :reviews, through: :rooms
   has_one :feature
   has_many :views
   validates :lat, presence: true
   validates :long, presence: true

end
