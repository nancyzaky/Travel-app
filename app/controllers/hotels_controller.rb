class HotelsController < ApplicationController

  def index
    hotels = Hotel.all
    render json: hotels
  end
  def create
    hotel = Hotel.create(hotel_params)
    render json: hotel, status: :created
  end


  private
  def hotel_params
    params.permit(:location, :image)
  end
end
