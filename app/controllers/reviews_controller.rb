class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid

def create

review = Review.create!(review_params)
render json: review, status: :created
end
def index
  if (params[:id])
      reviews = Review.find_by(room_id:params[:id])
  else
    reviews= Review.all
  end
  render json: reviews
end
def destroy
  review = Review.find(params[:id])
  review.destroy
  head :no_content
end
def update
review = Review.find(params[:id])
review.update(review_params)
render json: review
end
private

def review_params
params.permit(:rating, :text, :room_id, :name)
end

def render_not_valid(invalid)
  render json: {errors: invalid.record.errors}, status: :unprocessable_entity
end
end
