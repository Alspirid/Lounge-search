class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :street, null: false
      t.string :area, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :image_url

      t.timestamps
    end
    add_index :locations, :street
    add_index :locations, :area
    add_index :locations, :lat
    add_index :locations, :lng    
  end
end
