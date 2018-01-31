class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :user_id, null: false
      t.integer :location_id
      t.text :body, null: false
      t.integer :rating, null: false

      t.timestamps
    end
  end
end
