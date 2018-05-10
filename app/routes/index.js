//Files
let general = require("./general.js");
let create = require("./create.js");
let game = require("./game.js");
let auth = require("./auth.js");

module.exports = function(app) {
  //Routes
  general(app);
  create(app);
  game(app);
  auth(app)
};
