# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
Hotel.delete_all
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
hotels = Hotel.create!([{location:"Phoenix", image:"https://phoenix.org/wp-content/uploads/2017/06/phoenician.jpg", rating:5},{location:"The Maldives", image: "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg", rating:4}])
