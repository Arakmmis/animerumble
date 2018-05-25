let middleware = require("./middleware.js");

let mongoose = require("mongoose");
let Game = require("../models/Game.js");

module.exports = function(app) {
  app.get("/replay/:match", middleware.isLoggedIn, function(req, res) {
    res.render("replay", {
      match: req.params.match
    });
  });

  app.get("/replay/get/list", middleware.isLoggedIn, function(req, res) {
    Game.find({})
      .limit(10)
      .sort({ _id: -1 })
      .exec((err, rep) => {
        if (err) res.send({ error: true });
        let packet = rep.map(x => {
          return {
            player: x.player,
            winner: x.winner,
            room: x.room,
            timestamp: x.timestamp
          };
        });
        packet.reverse();

        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(packet));
      });
  });

  app.get("/replay/history/:match", middleware.isLoggedIn, function(req, res) {
    Game.find({ room: req.params.match }).exec((err, rep) => {
      if (err) res.send({ error: true });
      let packet = rep.map(x => {
        return {
          player: x.player,
          winner: x.winner,
          room: x.room,
          log: x.log,
          timestamp: x.timestamp
        };
      });

      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(packet));
    });
  });
};
