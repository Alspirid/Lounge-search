# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180131190132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "traveler_id", null: false
    t.integer "host_id", null: false
    t.string "accepted", null: false
    t.datetime "arrival"
    t.datetime "departure"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "street", null: false
    t.string "area", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area"], name: "index_locations_on_area"
    t.index ["lat"], name: "index_locations_on_lat"
    t.index ["lng"], name: "index_locations_on_lng"
    t.index ["street"], name: "index_locations_on_street"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "user_id", null: false
    t.integer "location_id"
    t.text "body", null: false
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.date "d_birth", null: false
    t.boolean "is_host", default: false
    t.integer "location_id", null: false
    t.text "about_text"
    t.string "image_url"
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
