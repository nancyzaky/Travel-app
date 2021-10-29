class Api::RoomsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # def show
  #  room = Room.find(params[:id])
  #  render json: room
  # end

def create
room = Room.create(room_params)
render json: room, status: :created

end
def index
  hotel = Hotel.find_by!(id:params[:hotel_id]).rooms
  render json: hotel, include: :pictures
end
def show
room = Room.find(params[:id])
render json: room, include: :reviews
end
  private
    def render_not_found
    render json: {error: "No Rooms found" }, status: :not_found
  end
  def room_params
    params.permit(:price, :description, :hotel_id)
  end

  def render_unprocessable_entity_response(invalid)
    return render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
