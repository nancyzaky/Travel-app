class ActivitiesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def create
  # user = User.find(params[:user_id])
  active = Activity.find_by(user_id: params[:user_id], attraction_id: params[:attraction_id])
  if active
    return render json: {error: "activity already added"}, status: :unprocessable_entity
  else
  activity = Activity.create!(activity_params)
  render json: activity, status: :created
  end

  end
  def show
activity = User.find(params[:id]).activities
render json: activity, include: :attraction
  end
def destroy
  activity = Activity.find(params[:id])
  activity.destroy
  head :no_content
end

def update
  activity = Activity.find(params[:id])
  activity.update(activity_params)
  render json: activity
end
  private

  def activity_params
params.permit(:user_id, :attraction_id, :date)
end
def render_not_found
render json: {error: "No attraction found"},  status: :not_found
end

def render_unprocessable_entity_response(invalid)
render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity

end
end

