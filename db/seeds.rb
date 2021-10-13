# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
Hotel.delete_all
Room.delete_all
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
hotels = Hotel.create!([{location:"Phoenix", image:"https://phoenix.org/wp-content/uploads/2017/06/phoenician.jpg", rating:5},{location:"The Maldives", image: "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg", rating:4}])

rooms= Room.create!([{price:150, description:"beautiful room", hotel_id:1}, {price:250, description:"awesome double room", hotel_id:1}])

  pictures = Picture.create!([{url:"https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1}, {url:"http://decoholic.org/wp-content/uploads/2017/03/luxury-hotel-bathroom-idea.jpg", room_id:1}, {url:"https://images.creativemarket.com/0.1.0/ps/7204880/1820/1198/m1/fpnw/wm1/abahkpam1vvoudkdphwik8de9iilyhu4jpefakfkzscb2bjesdybyiwnoyccgrkc-.jpg?1572209408&s=012012bfb9d14f81a7559b7c2d0ace9d", room_id:2},{url:"https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",room_id:2},{url:"https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/09/areias-do-seixo.jpg", room_id:3}])
