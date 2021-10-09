class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
