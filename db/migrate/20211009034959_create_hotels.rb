class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :location
      t.string :image

      t.timestamps
    end
  end
end
