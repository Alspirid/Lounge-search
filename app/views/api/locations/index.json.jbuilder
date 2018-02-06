@locations.each do |location|
  json.set! location.id do
    json.extract! location, :id, :area, :street, :image_url
  end    
end
