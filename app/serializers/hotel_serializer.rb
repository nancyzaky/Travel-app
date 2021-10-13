class HotelSerializer < ActiveModel::Serializer
  attributes :id, :rooms, :pictures, :location, :rating, :image, :feature
end
