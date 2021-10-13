class CreateFeatures < ActiveRecord::Migration[6.1]
  def change
    create_table :features do |t|
      t.boolean :parking
      t.boolean :pool
      t.boolean :gym
      t.integer :hotel_id

      t.timestamps
    end
  end
end
