class AddCityToHotel < ActiveRecord::Migration[6.1]
  def change
    add_column :hotels, :city, :string
  end
end
