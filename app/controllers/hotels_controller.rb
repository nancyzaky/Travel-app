class HotelsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    hotels = Hotel.all
    render json: hotels
  end
  def create
    hotel = Hotel.create(hotel_params)
    render json: hotel, status: :created
  end
def show
  hotel = Hotel.find(params[:id])
  render json: hotel
end

  private
  def hotel_params
    params.permit(:location, :image, :lat, :long, :city)
  end

  def render_not_found
    render json: {error: "No Hotel found" }, status: :not_found
  end
end
