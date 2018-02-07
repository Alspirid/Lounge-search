# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Location.destroy_all

Location.create!(
  area: 'Presidio',
  lat: 37.7990072,
  lng: -122.4836963,
  street: 'Veterans blvd',
  image_url: 'https://italystorie.files.wordpress.com/2015/01/ggbridge_old_coast_guard_station.jpg'
)

Location.create!(
  area: "Fisherman's wharf",
  lat: 37.8081269,
  lng: -122.4253858,
  street: 'Beach St',
  image_url: 'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SFcity_FishermanWharf_1280x642_sized.jpg'
)
Location.create!(
  area: 'Chinatown',
  lat: 37.7940908,
  lng: -122.4093202,
  street: 'Clay st',
  image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/34/72/78/chinatown.jpg'
)

Location.create!(
  area: 'Mission',
  lat: 37.7594039,
  lng: -122.4212456,
  street: 'S Van Ness ave',
  image_url: 'http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/neighborhoods/Mission%20District%20-%20Murals.jpg'
)
Location.create!(
  area: 'Castro',
  lat: 37.7625414,
  lng: -122.4449224,
  street: 'Castro st',
  image_url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story/image/8288/castrowide.jpg'
)

Location.create!(
  area: 'Financial',
  lat: 37.789019,
  lng: -122.4013602,
  street: 'Market st',
  image_url: 'http://baycityguide.com/media/00PU000000EkWTuMAN/Financial-District-from-Coit-Tower1500x872.jpg'
)

Location.create!(
  area: 'Sunset',
  lat: 37.7519551,
  lng: -122.4936358,
  street: 'Noriega',
  image_url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story/image/8683/whyisitcalled1.jpg'
)
  
Location.create!(
  area: 'Richmond',
  lat: 37.7800557,
  lng: -122.489663,
  street: 'Geary blvd',
  image_url: 'https://c1.staticflickr.com/7/6156/6171867272_4078bfc827_b.jpg'
)

Location.create!(
  area: 'Haight',
  lat: 37.7704815,
  lng: -122.4395798,
  street: 'Haight st',
  image_url: 'http://ww4.hdnux.com/photos/36/66/21/8086647/5/920x920.jpg'
)

Location.create!(
  area: 'Tenderloin',
  lat: 37.7835655,
  lng: 122.4147033,
  street: 'Eddy st',
  image_url: 'http://sfcitizen.com/blog/wp-content/uploads/2013/05/7J7C9263-copy.jpg'
)


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'USER_DATA.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = User.new
  t.username = row['username']
  t.email = row['email']
  t.d_birth = '01/01/1991'
  t.is_host = row['is_host']
  t.location_id = row['location_id']
  t.about_text = row['about_text']
  t.image_url = row['image_url']
  t.password = 'secret'
  t.save
  puts t.errors.full_messages
  puts "#{t.username} saved"
end

puts "There are now #{User.count} rows in the Users table"


bob_location_id = Location.find_by(area: "Presidio").id

  User.create!(
    username: 'bob',
    email: 'bob@company.com',
    password: 'secret',
    d_birth: '01/01/1991',
    location_id: bob_location_id,
    image_url: 'https://randomuser.me/api/portraits/men/41.jpg',
    about_text: 'I enjoy exploring new places'
  )
