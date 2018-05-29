let middleware = require("./middleware.js");
let character = require("../engine/character/index.js");
let Rank = require("../models/Rank.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.isAuthenticated()) {
      res.render("selection");
    } else {
      res.render("home");
    }
  });

  app.get("/char/:id", function(req, res) {
    let char = character.filter(x => x.id === req.params.id);
    if (char.length === 1) {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(char));
    }
  });

  app.get("/ladder/bugs", function(req, res) {
    Rank.find({
      played: { $gt: 5 }
    })
      .sort({ win: -1 })
      .exec((err, rep) => {
        if (err) res.send({ error: true });
        let packet = rep.map(x => {
          return {
            username: x.username,
            ladder: x.ladder,
            season: x.season,
            win: x.win,
            lose: x.lose,
            played: x.played,
            streak: x.streak,
            ratio: x.win * 1.2 - x.lose
          };
        });
        packet = packet.sort((a, b) => b.ratio - a.ratio);
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(packet));
      });
  });
};
