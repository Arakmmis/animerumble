var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var ChatSchema = new Schema({
  name: String,
  channel: String,
  room: String,
  message: String,
  timestamp: Number,
  datestamp: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }
});

module.exports = mongoose.model("Chat", ChatSchema);
