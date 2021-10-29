class Api::PicturesController < ApplicationController
  def create
    pic = Picture.create(url: params[:url])
    render json: pic, status: :created
  end


end
