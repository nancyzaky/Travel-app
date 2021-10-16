class CreateViews < ActiveRecord::Migration[6.1]
  def change
    create_table :views do |t|
      t.string :url
      t.integer :hotel_id

      t.timestamps
    end
  end
end
