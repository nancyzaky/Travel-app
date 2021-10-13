class Picture < ApplicationRecord
  belongs_to :room, optional: true
   belongs_to :hotel
end
