var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RankSchema = new Schema({
  username: String,
  ladder: String,
  season: Number,
  win: Number,
  lose: Number,
  played: Number,
  streak: Number
});

module.exports = mongoose.model("Rank", RankSchema);
