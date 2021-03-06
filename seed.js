// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');

var new_profile = {
  name: "Anna Sobolewska",
  github_link: "https://github.com/sobolewskaanna",
  github_profile_image: "https://avatars1.githubusercontent.com/u/9985205?v=3&s=460",
  current_city: "San Francisco",
  pets: [
    {
      name: "Luke",
      type: "Dog",
      breed: "Catahoula"
    }
  ]
};

var new_restaurants = [
  {
    name: "Long Bridge Pizza",
    location: "Dogpatch",
    rating: "4.5 Starts"
  },
  {
    name: "Tony’s Pizza Napoletana",
    location: "North Beach",
    rating: "4 Stars"
  },
  {
    name: "Nopalito",
    location: "Lower Haight",
    rating: "4 Stars"
  }
];

db.Profile.remove({}, function (err, profiles) {
  console.log('removed all profiles');
  db.Profile.create(new_profile, function (err, profile){
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Created new profile", profile._id);
    }

    db.Restaurant.remove({}, function (err, restaurants) {
      console.log("removed all restaurants");
      db.Restaurant.create(new_restaurants, function (err, restaurants) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Created new restaurants", restaurants);
        }
        process.exit();
      });
    });
  });
});
