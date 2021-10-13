class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room
  validates :start_date, presence: true
  validates :end_date, presence: true


#   private
#  def validates_start_before_end
#   if end_date < start_date
#      errors.add(:end_date,"End_Date must be after the Start_Date"
#   end
# end



end
