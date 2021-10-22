class CreateAttractions < ActiveRecord::Migration[6.1]
  def change
    create_table :attractions do |t|
      t.integer :hotel_id
      t.string :name
      t.string :timezone
      t.string :location
      t.string :distance
      t.string :photo
      t.string :lat
      t.string :long
      t.string :description

      t.timestamps
    end
  end
end
