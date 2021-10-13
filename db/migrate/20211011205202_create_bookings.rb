class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.string :start_date
      t.string :end_date
      t.integer :user_id
      t.integer :room_id

      t.timestamps
    end
  end
end
