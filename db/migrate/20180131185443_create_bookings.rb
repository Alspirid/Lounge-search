class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :traveler_id, null: false
      t.integer :host_id, null: false
      t.string :accepted, null: false
      t.datetime :arrival
      t.datetime :departure

      t.timestamps
    end
  end
end
