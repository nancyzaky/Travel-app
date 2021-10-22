class RoomSerializer < ActiveModel::Serializer
  attributes :id, :reviews, :specific, :price, :pictures, :hotel_id
end
