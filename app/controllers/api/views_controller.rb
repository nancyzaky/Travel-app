class Api::ViewsController < ApplicationController

  def create
 view = View.create!(view_params)
 render json: view

  end
  private

  def view_params
    params.permit(:hotel_id, :url)
  end
end
