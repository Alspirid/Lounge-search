class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :d_birth, null: false
      t.boolean :is_host, default: false
      t.integer :location_id, null: false
      t.text :about_text
      t.string :image_url
      t.string :email, null: false
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :session_token
    add_index :users, :email
  end
end
