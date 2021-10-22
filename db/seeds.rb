# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
Hotel.delete_all
Room.delete_all
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
hotels = Hotel.create!([{location:"7500 E Doubletree Ranch Rd, Scottsdale, AZ 85258", image:"https://phoenix.org/wp-content/uploads/2017/06/phoenician.jpg", rating:5, lat:33.674005, long:-111.858368},{location:"Coastal Road, Trou d'Eau Douce, Mauritius", image: "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg", rating:4,lat:-20.24166, long:57.78411	}])
      # t.string :bed
      # t.boolean :breakfast
      # t.boolean :bar
      # t.boolean :ocean_view
      # t.boolean :a_c
      # t.integer :room_id
      # t.boolean :tv
      # t.boolean :fridge
      # t.boolean :hair_dryer
features = Feature.create!([{parking:true, pool:true, gym:true, hotel_id:1}, {parking:true, pool:true, gym:true, hotel_id:2}])
rooms= Room.create!([{price:150, description:"King Size Room", hotel_id:1 }, {price:250, description:"Double room", hotel_id:2}, {price:200, description:"King room", hotel_id:2}])



specifics = Specific.create!([{room_id:1, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:false}, {room_id:2, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:3, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}])


 views = View.create!([{hotel_id:2, url:"https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{hotel_id:2, url:"https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:2, url:"https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:1,url: "https://www.mydesignweek.eu/wp-content/uploads/2018/12/7-Luxury-Hotel-Lobby-That-You-Need-To-See-5.jpg"}, {hotel_id:1,url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d3/01/92/hyatt-regency-scottsdale.jpg?w=900&h=-1&s=1"}, {hotel_id:1,url:"https://media.istockphoto.com/photos/3d-render-of-commercial-building-interior-and-reception-picture-id909589966?k=20&m=909589966&s=612x612&w=0&h=G7SxU6eRbGTl9Anh5vKdUlJEOHAYIaMdQBlkaXujcis="}])



  pictures = Picture.create!([{url:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1}, {url:"https://images.pexels.com/photos/6186825/pexels-photo-6186825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1}, {url:"https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1},{url:"https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",room_id:2},{url:"https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:2, url:"https://images.pexels.com/photos/6636248/pexels-photo-6636248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:2}, {url:"https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:3}, {url:"https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", room_id:3}])


  attractions = Attraction.create([{hotel_id:2, timezone:"Indian/Mauritius", name:"Papa's Dream Parasailing & Paragliding", distance:"0.19031780303723558", photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/13/e9/c7/63/aqua-love.jpg", location: "Trou d'eau Douce", lat: "-20.239809", long:"57.78628", description:"Boat Tours & Water Sports, Tours, Outdoor Activities and More."}, {hotel_id:2, timezone:"Indian/Mauritius", name:"Self-Guided Tours & Rentals", distance:"2.582910780918802", photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/18/e1/14/f1/caption.jpg", location: "Trou d'eau Douce, Coastal Road", long:"57.80241", lat: "-20.27482", description:"Please Contact the hotel for more details and bookings"},

  {hotel_id:2, photo:'https://media-cdn.tripadvisor.com/media/photo-w/08/60/84/b6/ile-aux-cerfs-golf-club.jpg', name:"Ile aux Cerfs Golf Club Aerial View", location:"Trou d'eau Douce", distance:"2.5432606940811326", timezone:"Indian/Mauritius", long:"57.799866", lat:"-20.275326", description:"From immaculate grounds to pristine golf courses, there’s plenty of space to enjoy a bike ride, tennis, or golf."},

  {hotel_id:2, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/17/b4/19/69/agentura.jpg", name:"Vicky Boats", location:"La Pelouse,Trou d'Eau Douce, Trou d'eau Douce, Mauritius", distance:"0.4091982070790293", timezone:"Indian/Mauritius", long:"57.78963", lat:"-20.2388", description:"Our watchword at Storm Boats is to satisfy the requests of our customers and thus lead them to discover the aquatic world through our eyes."},

 {hotel_id:2, photo:"https://media-cdn.tripadvisor.com/media/photo-o/10/ea/40/9c/view-of-the-sega-bar.jpg", name:"View Of The Sega Bar", location:"Trou d'eau Douce, Mauritius, Shangri-La's Le Touessrok Resort and Spa", distance:"1.1258052357985269", timezone:"Indian/Mauritius", long:"57.79748", lat:"-20.25203", description:"View of The Sega Bar across the lagoon"}
])