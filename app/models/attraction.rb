class Attraction < ApplicationRecord
  belongs_to :hotel
  has_many :activities
  has_many :users, through: :activities
end



