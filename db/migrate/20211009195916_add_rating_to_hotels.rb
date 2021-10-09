class AddRatingToHotels < ActiveRecord::Migration[6.1]
  def change
    add_column :hotels, :rating, :integer
  end
end
