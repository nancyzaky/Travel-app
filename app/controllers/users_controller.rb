class UsersController < ApplicationController
  # before_action :authorize, only: [:show]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :authorize

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create!(user_params)

    render json: user, status: :created
  end

def show
  user = User.find_by!(id: session[:user_id])

  render json: user
end

  private
  def user_params
    params.permit(:name, :password, :password_confirmation, :email)
  end
   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

 def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end

