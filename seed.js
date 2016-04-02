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

db.Profile.remove({}, function (err, profile) {
  db.Profile.create(new_profile, function (err, profile){
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Created new profile", profile._id);
      }
      process.exit();
  });
});
