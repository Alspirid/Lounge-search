json.user do
  json.extract! user, :id, :username, :d_birth, :is_host, :location_id, 
    :about_text, :image_url, :email, :location, :bookings, :hostings
end  

# json.user.location do
#     json.extract! user, :location
# end
