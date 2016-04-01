var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL ||
                      "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
