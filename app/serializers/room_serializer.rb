class RoomSerializer < ActiveModel::Serializer
  attributes :id, :reviews, :specific, :price, :pictures, :bookings
end
