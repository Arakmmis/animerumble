var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var GameSchema = new Schema({
  player: [String],
  winner: String,
  room: String,
  log: [Schema.Types.Mixed],
  timestamp: Number,
  datestamp: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }
});

module.exports = mongoose.model("Game", GameSchema);
