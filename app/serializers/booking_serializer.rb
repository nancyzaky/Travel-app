class BookingSerializer < ActiveModel::Serializer
  attributes :id, :room, :pictures, :start_date, :end_date, :duration
  
end
