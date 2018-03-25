module.exports = function(app) {
  //Route  
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/game/:match", function(req, res) {    
    res.render("game", {
       match: req.params.match
    });
  });
};
