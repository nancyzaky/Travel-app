class Room < ApplicationRecord
 belongs_to :hotel, optional:true
 has_many :pictures
 has_many :reviews
 has_many :users, through: :bookings
 has_many :bookings

end
