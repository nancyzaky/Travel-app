class HotelSerializer < ActiveModel::Serializer
  attributes :id, :rooms, :pictures, :location, :rating, :image, :feature, :lat, :long, :views
end
