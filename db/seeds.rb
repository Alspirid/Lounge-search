# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  
  User.destroy_all
  Location.destroy_all
  
  lat = [37.910078, 37.7814652, 37.7875487, 37.773529, 37.7738368, 37.7917064, 37.7724413]
  long = [-122.4210071, -122.4582996, -122.4471158, -122.4234099, -122.4647335, 122.4248786, -122.4778985]
  

  streets = ['Lombard st', 
             'Geary st', 
             'California st', 
             'Market st', 
             'Fulton st', 
             'Van Ness avenu', 
             'Park Presidio Boulevard']
  
  7.times do |i|
    Location.create!(
      street: streets[i],
      area: "San Francisco",
      lat: lat[i],
      lng: long[i],
      image_url: "https://qzprod.files.wordpress.com/2017/08/sf-streets-e1502128876235.jpg"
    )
  end
  
  lat_bay = [37.812714, 37.8146266, 37.8212637, 37.8070927, 37.8070927, 37.8058525, 37.803039]
  long_bay = [-122.2735647,-122.2699395, -122.263009, -122.2586082, -122.2586082, -122.2624264, -122.2676711]
  bay_streets = ['San Pablo ave', 'Telegraph ave', 'Piedmont ave', 'Grand ave', 'Lakeshore ave', 'Lake Merrit blvd', 'Harrison st']
  
  7.times do |i|
    Location.create!(
      street: bay_streets[i],
      area: "Oakland",
      lat: lat_bay[i],
      lng: long_bay[i],
      image_url: "http://www.walnutcreekdowntown.com/images/showcase/dt1.jpg"
    )
  end
  
  Location.create!(
    street: "North Main",
    area: "Walnut Creek",
    lat: 37.910078,
    lng: -122.065182,
    image_url: "http://www.walnutcreekdowntown.com/images/showcase/dt1.jpg"
  )
  

  bob_location_id = Location.find_by(street: "North Main").id

  User.create!(
    username: 'bob',
    email: 'bob@company.com',
    password: 'secret',
    d_birth: '01/01/1991',
    location_id: bob_location_id,
    image_url: 'https://randomuser.me/api/portraits/men/41.jpg',
    about_text: 'I enjoy exploring new places'
  )
  
  # User.create!(
  #   username: 'john',
  #   email: 'john@company.com',
  #   password: 'secret',
  #   d_birth: '01/01/1991',
  #   location_id: bob_location_id
  # )
  
  

end
