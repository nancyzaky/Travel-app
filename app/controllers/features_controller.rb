class FeaturesController < ApplicationController
  def create
    feature = Feature.create(feature_params)
    render json: feature
  end

  # def index
  #   if params[:id]
  #     feature = Hotel.find(params[:id]).feature
  #     render json: feature
  #   else
  #     render json: Feature.all
  #   end

  # end

  private
  def feature_params
    params.permit(:hotel_id, :pool,:gym, :parking)
  end
end
