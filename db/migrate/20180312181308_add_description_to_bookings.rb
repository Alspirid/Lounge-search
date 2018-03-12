class AddDescriptionToBookings < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :description, :text
  end
end
