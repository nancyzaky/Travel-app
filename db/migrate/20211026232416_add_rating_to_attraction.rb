class AddRatingToAttraction < ActiveRecord::Migration[6.1]
  def change
    add_column :attractions, :rating, :integer
  end
end
