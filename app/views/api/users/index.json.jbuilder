@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :d_birth, :is_host, 
                        :about_text, 
                        :location_id, :image_url
    json.home user.location.area
  end
end
