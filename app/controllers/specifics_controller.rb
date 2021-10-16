class SpecificsController < ApplicationController

  def create

  end

  private
  def specific_params
 params.permit(:room_id,:bed, :breakfast, :bar, :ocean_view, :a_c, :tv, :fridge, :hair_dryer )
  end
end
