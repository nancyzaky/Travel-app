class View < ApplicationRecord
  validates :hotel_id, presence:true
  validates :url, presence:true, uniqueness: true
  belongs_to :hotel
end
