class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid

def create
review = Review.create!(review_params)
render json: review, status: :created
end
private
def review_params
params.permit(:rating, :text, :room_id, :name)
end

def render_not_valid(invalid)
  render json: {errors: invalid.record.errors}, status: :unprocessable_entity
end
end
