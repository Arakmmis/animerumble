let middleware = require("./middleware.js");
let character = require("../engine/character/index.js");

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
};
