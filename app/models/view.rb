class View < ApplicationRecord
  validates :hotel_id, :url, presence:true
  belongs_to :hotel
end
