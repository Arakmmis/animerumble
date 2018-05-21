let middleware = require("./middleware.js");

let mongoose = require("mongoose");
let Game = require("../models/Game.js");

module.exports = function(app) {
  app.get("/replay/:match", middleware.isLoggedIn, function(req, res) {
    res.render("replay", {
      match: req.params.match
    });
  });

  app.get("/replay/list", middleware.isLoggedIn, function(req, res) {
    Game.exec((err, res) => {
      if (err) return;
      let packet = res.map(x => {
        return {
          player: x.player,
          winner: x.winner,
          room: x.room,
          timestamp: x.timestamp
        };
      });

      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(packet));
    });
  });

  app.get("/replay/get/:match", middleware.isLoggedIn, function(req, res) {
    console.log(req.params.match);
    Game.find({ room: req.params.match }).exec((err, rep) => {
      if (err) return;
      let packet = rep.map(x => {
        return {
          player: x.player,
          winner: x.winner,
          room: x.room,
          timestamp: x.timestamp
        };
      });

      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(packet));
    });
  });
};
