User.destroy_all
Location.destroy_all
Review.destroy_all

Location.create!(
  area: 'Presidio',
  lat: 37.7990072,
  lng: -122.4836963,
  street: 'Veterans blvd',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227342/presidio.jpg'
)

Location.create!(
  area: "Fisherman's wharf",
  lat: 37.8081269,
  lng: -122.4253858,
  street: 'Beach St',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227340/fisherman.jpg'
)
Location.create!(
  area: 'Chinatown',
  lat: 37.7940908,
  lng: -122.4093202,
  street: 'Clay st',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227353/chinatown.jpg'
)

Location.create!(
  area: 'Mission',
  lat: 37.7594039,
  lng: -122.4212456,
  street: 'S Van Ness ave',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227342/mission.jpg'
)
Location.create!(
  area: 'Castro',
  lat: 37.7625414,
  lng: -122.4449224,
  street: 'Castro st',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227343/castro.jpg'
)

Location.create!(
  area: 'Financial',
  lat: 37.789019,
  lng: -122.4013602,
  street: 'Market st',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227340/financial.jpg'
)

Location.create!(
  area: 'Sunset',
  lat: 37.7519551,
  lng: -122.4936358,
  street: 'Noriega',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227344/sunset.jpg'
)
  
Location.create!(
  area: 'Richmond',
  lat: 37.7800557,
  lng: -122.489663,
  street: 'Geary blvd',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227342/richmond.jpg'
)

Location.create!(
  area: 'Haight',
  lat: 37.7704815,
  lng: -122.4395798,
  street: 'Haight st',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227343/haight.jpg'
)

Location.create!(
  area: 'Tenderloin',
  lat: 37.7835655,
  lng: 122.4147033,
  street: 'Eddy st',
  image_url: 'https://res.cloudinary.com/dgent8r3s/image/upload/v1520227343/tenderloin.jpg'
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
    is_host: true,
    image_url: 'https://randomuser.me/api/portraits/men/41.jpg',
    about_text: 'I enjoy exploring new places'
  )

body = [  
  "Thanks Lounge search! Great job, I will definitely be ordering again! I will let my mum know about this, she could really make use of Lounge search! Lounge search is great.",
  "Lounge search has completely surpassed our expectations. Lounge search is the real deal! I have gotten at least 50 times the value from Lounge search. I like Lounge search more and more each day because it makes my life a lot easier.",
  "Lounge search is the most valuable business resource we have EVER purchased. We were treated like royalty. Lounge search has completely surpassed our expectations. It's exactly what I've been looking for.",
  "We've used Lounge search for the last five years. Man, this thing is getting better and better as I learn more about it.",
  "I would like to personally thank you for your outstanding service. I would like to personally thank you for your outstanding service.",
  "I am completely blown away. I just can't get enough of Lounge search.",
  "I love this place. I have been going here for years and it is a great place to hang out with friends and family. I love the food and service. I have never had a bad experience when I am there.",
  "My family and I are huge fans of this place. The staff is super nice and the food is great. The chicken is very good and the garlic sauce is perfect. Ice cream topped with fruit is delicious too. Highly recommended!",
  "Renate was a great host. The condo was clean and tidy containing all the necessary items. She even provided information on the events going on in San Diego. We can tell that Renate cares for her hosts and wants them to have a wonderful experience. Next time we are in San Diego, we would definitely love to book Renate's condo again.",
  "Steve and Michelle were very good hosts! Everything they wrote on the description corresponds to reality! The room is cosy and very comfortable. The bathroom is remodeled and very clean. We came in later than expected and didn't have a chance to meet them in person. They left us alone in morning next day, but they prepared a breakfast. It was very nice! I would definitely recommend this place to my friends.",
  "Linda is a great hostess! I would definitely recommend this place for couples and singles. It's a quiet and peaceful place with everything you would need. It was nice of Linda to provide breakfast in the morning and provide full use of her kitchen. We were able to enjoy our Thanksgiving day at her house. Everything was very neat, tidy, and organized. We would love to come back again!",
  "Pluses: Good location - RER and subway stations 10 minutes on foot, friendly hostess. Apartment worth its price. Luxemburg park is next to the house. Kitchen is equipped with microvawe oven. Perfect to stay for a week. Minuses: Bathroom needs repair. Apartment little bit cluttered with owner's stuff. No electric tea pot."
]

title = [
  "I have gotten at least 50 times the value from Lounge search.",
  "This host is amazing. We had really great experience!",
  "We never experienced anything like that..",
  "I would definitely get back and spend some time with this host",
  "Review for Dennis",
  "Review for this amazig host ever",
  "Review for Steve and Michelle",
  "Review for this host"
]

174.times do |i|
  user_id = i + 1
  review_number = Random.new.rand(1..5)
  review_number.times do
    author_id = Random.new.rand(1..174)
    body_item = body.shuffle!.first
    title_item = title.shuffle!.last
    Review.create!(
      author_id: author_id,
      user_id: user_id,
      title: title_item,
      body: body_item
    )    
  end
end
