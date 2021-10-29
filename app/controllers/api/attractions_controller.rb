class Api::AttractionsController < ApplicationController
  def create
 attraction = Attraction.create!(attraction_params)
 render json: attraction, status: :created
  end
  def show
    hotel = Hotel.find(params[:id]).attractions
    render json: hotel

  end
  def attractions_ordered
   hotel = Hotel.find(params[:id]).attractions
    render json: hotel.order(distance: :asc)
  end
def attractions_ordered_desc
 hotel = Hotel.find(params[:id]).attractions
    render json: hotel.order(distance: :desc)
end
def attractions_ordered_rating_asc
 hotel = Hotel.find(params[:id]).attractions
    render json: hotel.order(rating: :asc)
end
def attractions_ordered_rating_desc
 hotel = Hotel.find(params[:id]).attractions
    render json: hotel.order(rating: :desc)
end
  private
  def attraction_params
params.permit(:hotel_id, :name, :timezone, :description, :long, :lat, :photo, :location, :distance, :rating)
  end
end
