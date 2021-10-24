class Attraction < ApplicationRecord
  belongs_to :hotel
  has_many :activitys
  has_many :users, through: :activitys
end
