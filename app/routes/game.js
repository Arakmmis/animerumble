let middleware = require("./middleware.js");

module.exports = function(app) {
  app.get("/game/:match", middleware.isLoggedIn, function(req, res) {
    res.render("game", {
      match: req.params.match
    });
  });
};
