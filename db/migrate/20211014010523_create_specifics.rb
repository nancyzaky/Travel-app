class CreateSpecifics < ActiveRecord::Migration[6.1]
  def change
    create_table :specifics do |t|
      t.string :bed
      t.boolean :breakfast
      t.boolean :bar
      t.boolean :ocean_view
      t.boolean :a_c
      t.integer :room_id
      t.boolean :tv
      t.boolean :fridge
      t.boolean :hair_dryer

      t.timestamps
    end
  end
end
