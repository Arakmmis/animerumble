//Dependencies
let multer = require("multer");
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });
let axios = require("axios");
let credentials = require("../../config.js");

//Files
let character = require("../engine/character/index.js");

module.exports = function(app) {
  //Route
  app.get("/", function(req, res) {
    res.render("selection");
  });

  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.post("/create/upload", upload.single("avatar"), function(req, res) {
    let image = req.file.buffer.toString("base64");
    axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      data: {
        image: image,
        album: "y6Y7amj",
        type: "base64"
      },
      headers: {
        Authorization: credentials.imgur.clientId,
        Authorization: credentials.imgur.Bearer
      }
    })
      .then(packet => {
        let url = packet.data.data.link;
        res.send({ link: url });
      })
      .catch(error => console.log(error));
  });

  app.get("/game/:match", function(req, res) {
    res.render("game", {
      match: req.params.match
    });
  });

  app.get("/char/:id", function(req, res) {
    let char = character.filter(x => x.id === req.params.id);
    if (char.length === 1) {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(char));
    }
  });
};
