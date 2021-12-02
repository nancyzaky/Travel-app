
Hotel.delete_all
Room.delete_all

hotels = Hotel.create!([{location:"7500 E Doubletree Ranch Rd, Scottsdale, AZ 85258", image:"https://phoenix.org/wp-content/uploads/2017/06/phoenician.jpg", rating:5, lat:33.674005, long:-111.858368, city:'Arizona'},{location:"Coastal Road, Trou d'Eau Douce, Mauritius", image: "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg", rating:4,lat:-20.24166, long:57.78411, city:"Mauritius"}, {
      location:"57 Wireless Road, Lumpini, Pathumwan, Bangkok 10330 Thailand" , image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", rating: 5,lat:"13.81867", long: "100.65597", city:"Bangkok"
}, {location:"85 E Wacker Dr, Chicago, IL 60601", image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" , rating: 5, city: "Chicago",long:"-87.731987" , lat:"41.833768" }, {image:"https://images.pexels.com/photos/7832620/pexels-photo-7832620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", rating:5, location:"Banjar Carik, Desa Puhu, Payangan 80572 Indonesia", city:"Bali", lat:"-8.39615", long:"115.25115"},
{ image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/83/98/a4/leonardo-royal-london.jpg?w=1400&h=-1&s=1", rating:5, location:"St Pauls, London, England SE23 3", lat:"51.43916", long:"-0.05828", city:"London"
}, {location:"Archbishop Reyes Ave, Cebu City, 6000 Cebu, Philippines", image:"https://services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=03b0ba33-9f2f-e911-b4aa-782bcb66a2f2", long:"123.89237", lat:"10.31121", rating:5, city:"Cebu"}, {location:"Taj Holiday Village Resort & Spa, Goa", image:"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F07%2F20%2Fbest-india-resort-hotel-the-oberoi-udaivilas-udaipur-00-INRESHOTWB21.jpg", city:"Goa", rating:5, lat:"15.387475", long:"73.868443"}])

features = Feature.create!([{parking:true, pool:true, gym:true, hotel_id:1},{parking:true, pool:true, gym:true, hotel_id:2} ,
 {parking:true, pool:true, gym:true, hotel_id:3}, {parking:true, pool:true, gym:true, hotel_id:4}, {parking:true, pool:true, gym:true, hotel_id:5},  {parking:true, pool:true, gym:true, hotel_id:6},{parking:true, pool:true, gym:true, hotel_id:7},{parking:true, pool:true, gym:true, hotel_id:8}])


rooms= Room.create!([{price:150, description:"Single Room", hotel_id:1 }, {price:250, description:"Double room", hotel_id:1}, {price:280, description:"Queen Size room", hotel_id:1}, {price:280, description:"King Size room", hotel_id:1}, {price:350, description:"Executive Suite", hotel_id:1},

{price:120, description:"Single Room", hotel_id:2 }, {price:200, description:"Double room", hotel_id:2}, {price:230, description:"Queen Size room", hotel_id:2}, {price:260, description:"King Size room", hotel_id:2}, {price:300, description:"Executive Suite", hotel_id:2},


{price:120, description:"Single Room", hotel_id:3 }, {price:200, description:"Double room", hotel_id:3}, {price:230, description:"Queen Size room", hotel_id:3}, {price:260, description:"King Size room", hotel_id:3}, {price:300, description:"Executive Suite", hotel_id:3},


{price:120, description:"Single Room", hotel_id:4 }, {price:200, description:"Double room", hotel_id:4}, {price:230, description:"Queen Size room", hotel_id:4}, {price:260, description:"King Size room", hotel_id:4}, {price:300, description:"Executive Suite", hotel_id:4},

{price:120, description:"Single Room", hotel_id:5 }, {price:200, description:"Double room", hotel_id:5}, {price:230, description:"Queen Size room", hotel_id:5}, {price:260, description:"King Size room", hotel_id:5}, {price:300, description:"Executive Suite", hotel_id:5},
{price:120, description:"Single Room", hotel_id:6 }, {price:200, description:"Double room", hotel_id:6}, {price:230, description:"Queen Size room", hotel_id:6}, {price:260, description:"King Size room", hotel_id:6}, {price:300, description:"Executive Suite", hotel_id:6},
{price:120, description:"Single Room", hotel_id:7 }, {price:200, description:"Double room", hotel_id:7}, {price:230, description:"Queen Size room", hotel_id:7}, {price:260, description:"King Size room", hotel_id:7}, {price:300, description:"Executive Suite", hotel_id:7},
{price:120, description:"Single Room", hotel_id:8 }, {price:200, description:"Double room", hotel_id:8}, {price:230, description:"Queen Size room", hotel_id:8}, {price:260, description:"King Size room", hotel_id:8}, {price:300, description:"Executive Suite", hotel_id:8}





])



specifics = Specific.create!([{room_id:1, bed:"Single", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:false, ocean_view:false}, {room_id:2, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:false, ocean_view:false}, {room_id:3, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:false}, {room_id:4, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:false},{room_id:5, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:false},


{room_id:6, bed:"Single", tv:false, fridge:false, a_c:true, hair_dryer:true, bar:false, breakfast:false, ocean_view:false}, {room_id:7, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:8, bed:"Queen", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:9, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:true},{room_id:10, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true},



{room_id:11, bed:"Single", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:false}, {room_id:12, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:false, ocean_view:true}, {room_id:13, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:14, bed:"King", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:true},{room_id:15, bed:"Executive Suite", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true},


{room_id:16, bed:"Single", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:false, ocean_view:false}, {room_id:17, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:false}, {room_id:18, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:false}, {room_id:19, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:false},{room_id:20, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:false},


{room_id:21, bed:"Single", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:22, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:23, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:24, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:true},{room_id:25, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true},







{room_id:26, bed:"Single", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:27, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:28, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:29, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:true},{room_id:30, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true},



{room_id:31, bed:"Single", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:32, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:33, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:34, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:true},{room_id:35, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true},
{room_id:36, bed:"Single", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:37, bed:"Double", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:false, ocean_view:true}, {room_id:38, bed:"Queen", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}, {room_id:39, bed:"King", tv:true, fridge:true, a_c:true, hair_dryer:true, bar:false, breakfast:true, ocean_view:true},{room_id:40, bed:"Executive Suite", tv:true, fridge:false, a_c:true, hair_dryer:true, bar:true, breakfast:true, ocean_view:true}

])


 views = View.create!([{hotel_id:2, url:"https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{hotel_id:2, url:"https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:2, url:"https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},

 {hotel_id:1,url: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}, {hotel_id:1,url:"https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:1,url:"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},

 {hotel_id: 3, url: "https://images.pexels.com/photos/6758532/pexels-photo-6758532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},  {hotel_id: 3, url: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},  {hotel_id: 3, url: "https://images.pexels.com/photos/3320529/pexels-photo-3320529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},  {hotel_id: 3, url: "https://images.pexels.com/photos/4091042/pexels-photo-4091042.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id: 3, url: "https://images.pexels.com/photos/5989947/pexels-photo-5989947.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:3, url:"https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:4, url:"https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }, {hotel_id:4, url:"https://images.pexels.com/photos/5378693/pexels-photo-5378693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:4, url:"https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} ,{hotel_id:4, url:"https://images.pexels.com/photos/693895/pexels-photo-693895.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:4, url:"https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
 {hotel_id:5, url:"https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:5, url:"https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},

{hotel_id:5, url:"https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
{hotel_id:6, url:"https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
{hotel_id:6, url:"https://images.pexels.com/photos/5371673/pexels-photo-5371673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
{hotel_id:6, url:"https://images.pexels.com/photos/3771835/pexels-photo-3771835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
{hotel_id:6, url:"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},


{hotel_id:7, url:"https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:7, url:"https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},

{hotel_id:7, url:"https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
{hotel_id:7, url:"https://images.pexels.com/photos/3771835/pexels-photo-3771835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
{hotel_id:7, url:"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},


{hotel_id:8, url:"https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }, {hotel_id:8, url:"https://images.pexels.com/photos/5378693/pexels-photo-5378693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:8, url:"https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} ,{hotel_id:8, url:"https://images.pexels.com/photos/693895/pexels-photo-693895.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {hotel_id:8, url:"https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
])



  pictures = Picture.create!([{url:"https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1}, {url:"https://images.pexels.com/photos/6186825/pexels-photo-6186825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1}, {url:"https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:1},{url:"https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",room_id:2},{url:"https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:2, url:"https://images.pexels.com/photos/6636248/pexels-photo-6636248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:2}, {url:"https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:3}, {url:"https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", room_id:3},

{url: "https://images.pexels.com/photos/6284232/pexels-photo-6284232.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:4}, {url:"https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:4}, {url:"https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",room_id:5}, {url:"https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", room_id:5}, {url:"https://images.pexels.com/photos/6758770/pexels-photo-6758770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", room_id:6}, {room_id:6 , url:"https://images.pexels.com/photos/6301176/pexels-photo-6301176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:7, url:"https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:7, url:"https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:8, url:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:8, url:"https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:9, url:"https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:9, url:"https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:10, url:"https://images.pexels.com/photos/6466490/pexels-photo-6466490.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:10, url:"https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:11, url:"https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:11, url:"https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:12, url:"https://images.pexels.com/photos/6782473/pexels-photo-6782473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:12, url:"https://images.pexels.com/photos/6933772/pexels-photo-6933772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:13, url:"https://images.pexels.com/photos/6587825/pexels-photo-6587825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{room_id:13, url:"https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:14, url:"https://images.pexels.com/photos/6588581/pexels-photo-6588581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:14, url: "https://images.pexels.com/photos/6933766/pexels-photo-6933766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:15, url:"https://images.pexels.com/photos/6588582/pexels-photo-6588582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:15, url: "https://images.pexels.com/photos/6538889/pexels-photo-6538889.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:16, url:"https://images.pexels.com/photos/7061675/pexels-photo-7061675.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:16, url: "https://images.pexels.com/photos/6585754/pexels-photo-6585754.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:17, url:"https://images.pexels.com/photos/6899434/pexels-photo-6899434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:17, url:"https://images.pexels.com/photos/6585603/pexels-photo-6585603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:18, url:"https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:18, url:"https://images.pexels.com/photos/7147283/pexels-photo-7147283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:19, url:"https://images.pexels.com/photos/6480201/pexels-photo-6480201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:19, url:"https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:20, url:"https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:20, url:"https://images.pexels.com/photos/6899450/pexels-photo-6899450.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:21, url:"https://images.pexels.com/photos/7061673/pexels-photo-7061673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:21, url:"https://images.pexels.com/photos/7031876/pexels-photo-7031876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:22, url:"https://images.pexels.com/photos/7174399/pexels-photo-7174399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:22, url:"https://images.pexels.com/photos/7031883/pexels-photo-7031883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:23, url:"https://images.pexels.com/photos/5379219/pexels-photo-5379219.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:23, url:"https://images.pexels.com/photos/6585742/pexels-photo-6585742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:24, url:"https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:24, url:"https://images.pexels.com/photos/7031216/pexels-photo-7031216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:25, url:"https://images.pexels.com/photos/7061089/pexels-photo-7061089.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:25, url:"https://images.pexels.com/photos/6315806/pexels-photo-6315806.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},








 {room_id:26, url:"https://images.pexels.com/photos/6466490/pexels-photo-6466490.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:26, url:"https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:27, url:"https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:27, url:"https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:28, url:"https://images.pexels.com/photos/6782473/pexels-photo-6782473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:28, url:"https://images.pexels.com/photos/6933772/pexels-photo-6933772.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:29, url:"https://images.pexels.com/photos/6587825/pexels-photo-6587825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{room_id:29, url:"https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:30, url:"https://images.pexels.com/photos/6588581/pexels-photo-6588581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:30, url: "https://images.pexels.com/photos/6933766/pexels-photo-6933766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:31, url:"https://images.pexels.com/photos/6588582/pexels-photo-6588582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:31, url: "https://images.pexels.com/photos/6538889/pexels-photo-6538889.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:32, url:"https://images.pexels.com/photos/7061675/pexels-photo-7061675.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:32, url: "https://images.pexels.com/photos/6585754/pexels-photo-6585754.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:33, url:"https://images.pexels.com/photos/6899434/pexels-photo-6899434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:33, url:"https://images.pexels.com/photos/6585603/pexels-photo-6585603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:34, url:"https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:34, url:"https://images.pexels.com/photos/7147283/pexels-photo-7147283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:35, url:"https://images.pexels.com/photos/6480201/pexels-photo-6480201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:35, url:"https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:36, url:"https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:36, url:"https://images.pexels.com/photos/6899450/pexels-photo-6899450.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:37, url:"https://images.pexels.com/photos/7061673/pexels-photo-7061673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:37, url:"https://images.pexels.com/photos/7031876/pexels-photo-7031876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:38, url:"https://images.pexels.com/photos/7174399/pexels-photo-7174399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:38, url:"https://images.pexels.com/photos/7031883/pexels-photo-7031883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:39, url:"https://images.pexels.com/photos/5379219/pexels-photo-5379219.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:39, url:"https://images.pexels.com/photos/6585742/pexels-photo-6585742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:40, url:"https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}, {room_id:40, url:"https://images.pexels.com/photos/7031216/pexels-photo-7031216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
])


  attractions = Attraction.create([{hotel_id:2, timezone:"Indian/Mauritius", name:"Papa's Dream Parasailing & Paragliding", distance:"0.19031780303723558", photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/13/e9/c7/63/aqua-love.jpg", location: "Trou d'eau Douce", lat: "-20.239809", long:"57.78628", description:"Boat Tours & Water Sports, Tours, Outdoor Activities and More.", rating:5}, {hotel_id:2, timezone:"Indian/Mauritius", name:"Self-Guided Tours & Rentals", distance:"2.582910780918802", photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/18/e1/14/f1/caption.jpg", location: "Trou d'eau Douce, Coastal Road", long:"57.80241", lat: "-20.27482", description:"Please Contact the hotel for more details and bookings", rating:4},

  {hotel_id:2, photo:'https://media-cdn.tripadvisor.com/media/photo-w/08/60/84/b6/ile-aux-cerfs-golf-club.jpg', name:"Ile aux Cerfs Golf Club Aerial View", location:"Trou d'eau Douce", distance:"2.5432606940811326", timezone:"Indian/Mauritius", long:"57.799866", lat:"-20.275326", description:"From immaculate grounds to pristine golf courses, there’s plenty of space to enjoy a bike ride, tennis, or golf.", rating:5},

  {hotel_id:2, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/17/b4/19/69/agentura.jpg", name:"Vicky Boats", location:"La Pelouse,Trou d'Eau Douce, Trou d'eau Douce, Mauritius", distance:"0.4091982070790293", timezone:"Indian/Mauritius", long:"57.78963", lat:"-20.2388", description:"Our watchword at Storm Boats is to satisfy the requests of our customers and thus lead them to discover the aquatic world through our eyes.", rating:5},

 {hotel_id:2, photo:"https://media-cdn.tripadvisor.com/media/photo-o/10/ea/40/9c/view-of-the-sega-bar.jpg", name:"View Of The Sega Bar", location:"Trou d'eau Douce, Mauritius, Shangri-La's Le Touessrok Resort and Spa", distance:"1.1258052357985269", timezone:"Indian/Mauritius", long:"57.79748", lat:"-20.25203", description:"View of The Sega Bar across the lagoon", rating:3},

 {hotel_id: 1, photo:"https://media-cdn.tripadvisor.com/media/photo-o/09/c6/d7/d0/pinnacle-peak-general.jpg", name:"Gift & Specialty Shops", location:"7607 W Mcdowell Rd, Scottsdale.", distance:"1.5",timezone:"America/Phoenix", long: "-111.85656" ,lat:"33.68765" , description:"Find gifts and souvenirs from a variety of amazing shops" ,rating:2},
 {hotel_id: 1, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/15/7c/81/8d/sonoran-landscape-along.jpg", name:"McDowell Sonoran Preserve", location:"18333 N. Thompson Peak Pkwy, Scottsdale.", distance:"2.84",timezone:"America/Phoenix", long:"-111.85987" ,lat:"33.64848" , description:"The Scottsdale McDowell Sonoran Preserve is a large, permanently protected, sustainable desert habitat that includes an interconnected network of non-motorized, multi-use trails (hike/bike/horse) accessed from multiple trailhead locations.", rating:4 },

 {hotel_id: 1, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/5a/7b/c8/more-decorated-statues.jpg", name:"Market Street At DC Ranch", location:"20645 N Pima Rd, Scottsdale", distance:"3.10",timezone:"America/Phoenix", long:"-111.89153" ,lat:"33.67805" , description:"Market Street is a mixed-use neighborhood center featuring office, retail and entertainment within DC Ranch. Originally developed by DMB and designed as a rustic, small-town center, Market Street features a main street theme incorporating 15 architecturally unique buildings and a variety of distinctive restaurants, shops, office and neighborhood conveniences all intimately tied together." , rating:2},
 {hotel_id:1, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/15/f4/d2/40/pedego-electric-bikes.jpg", name:"Gear Rentals", timezone:"America/Phoenix", long:"-111.86136" , lat:"33.642334", location:"15029 N Thompson Peak Pkwy, Scottsdale", distance:"3.5", description:"We are the best place to go for electric bicycles in North Scottsdale. Whether you want to buy or rent one of our amazing electric bikes, we are excited to serve you. We are not your average bike shop. We treat our customers like friends and want to ensure they are completely happy with their experience. That is why we offer free test rides for our bicycles. We are also a full bicycle repair shop, no matter what kind of bike you have. If you are in Scottsdale or the surrounding area, stop in and see us today!", rating:5},
{hotel_id:3, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/15/ba/87/7d/caption.jpg", name:"Golf Courses",timezone:"Asia/Bangkok", lat:"13.806893",long:"100.668755",distance:"1.9", rating:4, description:" You will find a traditional course layout with mature trees and wide fairways. Water and well placed bunkers come into play and you will enjoy the course`s undulating greens.Amenities include: Golf carts, full practice facilities and a full golf shop.** Signature Hole: The 14th, requires a 175 yard shot directed through Cottonwood Trees and over water to the green.", location:"22 Navatanee Rd., Kwaeng Ramintra, Khet Kannayao, Bangkok"},
{hotel_id:3, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/77/d3/73/caption.jpg", name:"Day Trips",
lat:"13.82792",
long:"100.66884",
location:"177/97 Moo 4 Sri Sunthorn, Bangkok",
timezone:"Asia/Bangkok",distance:"1.7", rating:3,description:"We have complimentary travel planner service at your hotel in Phuket. If you are unsure about each activities and would like us to assist to book the activities including payment process."
}, {hotel_id:3, photo:"https://media-cdn.tripadvisor.com/media/photo-o/0c/88/d5/35/pop-art-garden.jpg", name:"Bangkok Sculpture Center" , lat:"13.83465",
long:"100.64555",
location:"4/18 -19 Soi Nuanchan 56 Nuanchan Road Khlong Kum, Bueng Kum, Bangkok",
timezone:"Asia/Bangkok",distance:"2.1", rating:5,description:"The Bangkok Sculpture Center is the museum and learning center which displays Thai sculptures from the Buddhist art to modern art era more than 200 pieces."}, {hotel_id:3, photo:"https://media-cdn.tripadvisor.com/media/photo-o/13/8b/9d/e4/3.jpg" ,timezone:"Asia/Bangkok", name:"Fun & Games ", lat:"13.82523", long:"100.67853", distance:"2.5",location:"3 Floor, Fashion Island, Khan Na Yao", description:"Celebrating an event or birthday is always a big deal! Sometimes it’s just more fun to throw parties, and more special when it’s something as exciting as an escape room. Let us take care of everything while you enjoy the party." , rating:4},
{hotel_id:4, photo:"https://media-cdn.tripadvisor.com/media/photo-o/05/05/79/bf/river-tour-sight.jpg", name:"Sightseeing Tours/River tour sight!",lat:"41.86245",
long:"-87.69229",
timezone:"America/Chicago", distance:"4.5", location: "Departing From Ogden Slip", rating:5,description:"With the city’s largest fleet – 11 touring vessels and 6 water taxis – and dozens of architectural guides, Shoreline Sightseeing is one of Chicago’s most popular tours. Purchase your tickets today for your own awesome adventure: from scenic trips along the river to skyline tours on Lake Michigan" }, {hotel_id:4, photo:"https://media-cdn.tripadvisor.com/media/photo-o/0b/84/ca/2e/blooming-tree.jpg", rating:3, timezone:"America/Chicago", long:"-87.67969", lat:"41.82488", distance:"4.4", location:"2210 W Pershing Rd, Chicago, IL 60609-2209", description:"You will always find here a lot of birds and tortoises. Very relaxing. There is also parking at the field house and a lof of space for cars along Pershing Road. They have outdoor pool, ice hockey rink, tennis courts, playgrounds and baseball fields." , name:"McKinley Park"},
{hotel_id: 4, rating:4, photo:"https://media-cdn.tripadvisor.com/media/photo-o/11/2c/d8/23/photo1jpg.jpg", timezone:"America/Chicago", long:"-87.69199", lat:"41.85743", name:"Lagunitas Brewing Company", location: "2607 W 17th St, Chicago, IL 60608-1823", distance:"4.2", description:"#86 of 746 things to do in Chicago"},
{hotel_id:4, rating:2, photo:"https://media-cdn.tripadvisor.com/media/photo-o/0b/85/15/25/lagoon.jpg", timezone:"America/Chicago", long:"-87.69971", lat:"41.86241", name:"Douglas Park",distance:"4.16", location:"1401 S Sacramento Dr, Chicago", description:"It was established in 1869 (opened in 1879) and named in honor of Stephen A. Douglas (1813-1861), best remembered for his pre-Civil War presidential defeat by Abraham Lincoln despite superb oratorical skills (he helped bring the Illinois Central Railroad to Chicago)."},
{hotel_id:4, rating:3, photo:"https://media-cdn.tripadvisor.com/media/photo-c/2560x500/0b/0d/15/6d/getlstd-property-photo.jpg", name:"Vida Abundante Torch", lat:"41.85625",
long:"-87.75837", distance:"3.3", location:"1819 S 54th Ave, Cicero, IL 60804-1815, Chicago", description:"Vida Abundante/Torch is a place where everyone is welcome. We have been in Cicero, since 1991 serving the Cicero community, under Pastor Andres Gallardo. We are a church community that loves the people and believe that through a personal relationship with Christ, in His word, our lives can and will be transformed."},

{hotel_id: 5, rating:5, name:"Zipline & Aerial Adventure Parks" , photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/fa/c5/83/a-magnificent-way-to.jpg", long:"115.239235", lat:"-8.407089",
timezone:"Asia/Makassar", distance: "1.7", location: "Banjar Susut, Payangan", description:"A magnificent way to spend your holiday. If you believe you can fly, this is how you do it. You just need to swing away and you will feel like a bird. The cool breeze of wind on your face, the incredible green view under your feet, the fresh air you breathe, you will never want to stop. Swing away your problem and take back your happiness through swing in nature. Jungle Swing Bali is worry free adventurous in nature, it has fully insurance for your safety while having holiday in Bali."},
      {hotel_id:5, rating: 4 , photo:"https://media-cdn.tripadvisor.com/media/photo-o/17/55/f8/a9/taro-village-experience.jpg", name:"Taro Village Experience", timezone:"Asia/Makassar",lat:"-8.39341",
long:"115.27811", distance:"2.9", location:"Taro, Gianyar, Gianyar Regency, Bali", description:"Taro Village Experience is a village that we have envisioned for years and the time finally come to see it to fruition. Armed with our experience in tourism industry, making sure we can provide good services for all of our clients who want to travel to explore the Bali’s life with rural atmosphere. Located at Desa Taro ( Taro village ) North of UBUD"},
{hotel_id:5, rating:5, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/de/7b/ae/caption.jpg", name:"Adrenaline & Extreme Tours", timezone:"Asia/Makassar", lat: "-8.39451" , long:"115.25463", distance: "0.4", location:"Jalan Raya, Payangan", description:"Looking to splash into a little more excitement? Your next adventure is waiting for you in the Great Smoky Mountains."},


{hotel_id:6, rating:5, photo:"https://media-cdn.tripadvisor.com/media/photo-o/0b/0b/32/35/la-serre.jpg", name:"Horniman Museum and Gardens", timezone:"Europe/London", lat: "51.43916" , long:"-0.05828", distance: "0.28", location:"100 London Road Forest Hill, London SE23 3PQ England", description:"The Horniman Museum and Gardens is an inspiring, surprising, family-friendly, free attraction in South London’s Forest Hill.The Museum has been open since Victorian times, when Frederick John Horniman first opened his house and extraordinary collection of objects to visitors."},

{hotel_id:6, rating:3, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/17/82/bf/f5/wells-park.jpg", name:"Wells Park", timezone:"Europe/London", lat: "51.43916" , long:"-0.05828", distance: "0.4", location:"Wells Park Road, London SE26 6JQ England", description:"#1,328 of 2,419 things to do in London."},


{hotel_id:6, rating:4, photo:"https://media-cdn.tripadvisor.com/media/photo-m/1280/18/3e/ed/07/mayow-park.jpg", name:"Mayow Park", timezone:"Europe/London", lat: "51.43916" , long:"-0.05828", distance: "1.17", location:"Mayow Park Mayow Road, London SE26 4JA England", description:"Mayow Park, formerly known as Sydenham Recreation Ground, is a municipal park in London Borough of Lewisham. Located on Mayow Road in Sydenham, south east London, it is the borough's oldest park and its second oldest public open space after Blackheath. The park has a Green Flag Award"},


{hotel_id:6, rating:4, photo:"https://media-cdn.tripadvisor.com/media/photo-o/10/53/c9/9d/one-tree-hill-local-nature.jpg", name:"One Tree Hill Local Nature Reserve", timezone:"Europe/London", lat: "51.43916" , long:"-0.05828", distance: "1.3", location:"Honor Oak Park, London SE23 3RA England", description:"One Tree Hill rises majestically at the northern end of the Great North Wood and offers a wonderful view of central London. This Local Nature Reserve is designated as a Grade 1 Site of Borough Importance for Nature Conservation and has a fascinating mixture of historical and ecological features."},


{hotel_id:7, rating:4, photo:"https://media-cdn.tripadvisor.com/media/photo-o/04/80/23/9a/the-fuente-means-fountain.jpg", name:"Fuente Osmena", timezone:"Asia/Manila", lat: "10.31074" , long:"123.89348", distance: "0.17", location:"Osmena Cir, Cebu City 6000 Philippines", description:"fuente osmena circle is a focal landmark in cebu city. it is a rotonda park with a fountain in the center. this circle is often used as a important landmark for travelers who want to go to central cebu. fuente osmena circle is surrounded by main roads leading to osmena blvd, gen maxilom ave. and b. rodriquez st., in which you can find two big robinson malls, fast food restaurants, pharmacies, hotels and pasalubung center. its the center of everything."},

{hotel_id:7, rating:2, photo:"https://media-cdn.tripadvisor.com/media/photo-o/0f/c2/85/eb/mango-square-mall.jpg", name:"Mango Square Mall", timezone:"Asia/Manila", lat: "10.31074" , long:"123.89348", distance: "0.4", location:"Gen. Arcadio Maxilom Ave. cor. Juana Osmena St., Cebu City 8600 Philippines", description:"Near by shopping mall"},

{hotel_id:7, rating:5, photo:"https://media-cdn.tripadvisor.com/media/photo-o/11/4a/aa/4a/view-of-the-main-shrine.jpg", name:"Philippine Chinese Spiritual Temple", timezone:"Asia/Manila", lat: "10.31074" , long:"123.89348", distance: "0.4", location:"Don Pedro Rodriguez Street, Cebu City 6000 Philippines", description:"Taking pictures is allowed except inside the temple itself. Entry is FREE here.

Surroundings: Stalls of vendors just outside the walls, Street Food vendors, parking for motor cycles."},

{hotel_id:8, rating:5, photo:"https://media-cdn.tripadvisor.com/media/photo-o/1c/73/97/0a/the-aircraft-making-itself.jpg", name:"Naval Aviation Museum", timezone:"Asia/Manila", lat: "15.387475" , long:"73.868443", distance: "3.5", location:"Bogmalo Road Vasco da Gama, Mormugao 403806 India", description:"The Naval Aviation Museum at Goa is a one of its kind museum in Asia, showcasing the rich history and legacy of Indian Naval Aviation. It has a prized collection of 14 vintage display aircraft along with their engines, armaments and much more to delight an aviation enthusiast or just a curious tourist. The exhibit halls and display Rooms housing various artifacts, memorabilia and other naval assets of importance to present the heritage of Indian Naval Air Arm to the visitors."}



])

