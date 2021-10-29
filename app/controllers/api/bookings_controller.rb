class Api::BookingsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

def index
  booking = User.find(params[:user_id]).bookings
  render json: booking
end

def available
  books = Room.find(params[:id]).bookings
  dates_arr_range = books.pluck(:start_date, :end_date)
 all_dates = dates_arr_range.flatten
  if dates_arr_range.empty?

    return render json: {success:"dates Available"}

  end

    dates_arr_range.each do |range|
     if (Date.parse(range[0])..Date.parse(range[1])).include?Date.parse(params[:start_date])..Date.parse(params[:end_date])
      return render json: {error: "These dates are already booked, Please try other dates"},status: :unprocessable_entity
     elsif all_dates.include?params[:start_date]
      return render json: {error: "These dates are already booked, Please try other dates"}, status: :unprocessable_entity
      elsif all_dates.include?params[:end_date]
     return render json: {error: "These dates are already booked, Please try other dates"},status: :unprocessable_entity
      else
        return render json: {success: "valid dates"}
      end
    end

end

def destroy
  booking = Booking.find(params[:id])
  booking.destroy
  head :no_content
end


  def create
 books = Room.find(params[:room_id]).bookings
 dates_arr_range = books.pluck(:start_date, :end_date)
 all_dates = dates_arr_range.flatten

  dates_arr_range.each do |range|
    first = Date.parse(range[0])
    last= Date.parse(range[1])
    range_between = (first..last).to_a
    requested_range = ((Date.parse(params[:start_date]))..(Date.parse(params[:end_date]))).to_a

    requested_range.each do |date|
      if range_between.include?(date)
           return render json: {error: "These dates are already booked, Please try other dates"},status: :unprocessable_entity
      end
    end

  end
      booking = Booking.create!(booking_params)
         render json: booking, status: :created
end

  # def show
  #   room = Booking.find(params[:id]).room
  #   render json: room, include: :bookings, only: [:start_date, :end_date]
  # end
  private
  def booking_params
    params.permit(:start_date, :end_date, :user_id, :room_id, :duration)
  end

def render_record_invalid(invalid)
  render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end


def valid_dates(room_id:, start_date:, end_date:)
room = Room.find(num).book
if room.empty?
  room << Date.parse(start_date)..Date.parse(end_date)
  end
end



end

