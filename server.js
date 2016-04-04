// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 //get my profile
 app.get('/profiles', function (req, res) {
   db.Profile.find({}, function (err, profiles){
     if (err) {
       res.status(500).json('error');
     }
     res.status(200).json(profiles);
   });
 });

 //get a list of all restaurants
 app.get('/restaurants', function (req, res) {
   db.Restaurant.find({}, function (err, restaurants) {
     if (err) {
       res.status(500).json('error');
     }
     res.status(200).json(restaurants);
   });
 });

 //create a new restaurant
 app.post('/restaurants', function (req, res) {
   var newRestaurant = new db.Restaurant({
     name: req.body.name,
     location:req.body.location,
     rating: req.body.rating
   });
   newRestaurant.save(function (err, restaurant) {
     if (err) {
       res.send('err');
     } else {
       res.json(restaurant);
     }
   });
 });

 //delete a restaurant
 app.delete('restaurants/:id', function (req, res) {
   var restaurantId = req.params.id;

   db.Restaurant.findOneAndRemove({_id: restaurantId}, function (err, deletedRestaurant) {
     res.json(deletedRestaurant);
   });
 });



app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    documented_all_my_endpoints: true,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/sobolewskaanna/express-personal-api",
    base_url: "http://strawberry-pudding-50629.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/", description: "Describes all available endpoints"},
      {method: "GET", path: "/profiles", description: "Data about me"},
      {method: "POST", path: "/restaurants", description: "Data about restaurants"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
