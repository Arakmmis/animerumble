let character = require('../engine/character/index.js') 

module.exports = function(app) {
  //Route  
  app.get("/", function(req, res) {
    res.render("selection");
  });

  app.get("/game/:match", function(req, res) {    
    res.render("game", {
       match: req.params.match
    });
  });

  app.get("/char/:id", function(req, res) {    
    let char = character.filter(x => x.id === req.params.id)
    console.log(char.length)
    if(char.length === 1){
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(char));
    }    
  })
};
