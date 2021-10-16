class Specific < ApplicationRecord
  belongs_to :room
  validates :room_id, presence: true

end
