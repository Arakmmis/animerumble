var bodyParser = require("body-parser");
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var axios = require("axios");

let character = require("../engine/character/index.js");

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  //Route
  app.get("/", function(req, res) {
    res.render("selection");
  });

  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.post("/create/upload", upload.single("avatar"), function(req, res) {
    console.log(req.file);
    let image = req.file.buffer.toString("base64");
    // var formData = new FormData();
    //   formData.append("image", $files[0]);
    console.log(image);
    axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      data: {
        image: image,
        album: "y6Y7amj",
        type: "base64"
      },
      headers: {
        Authorization: "Client-ID 1220d5eb79e65d6",
        Authorization: "Bearer b096101df77531583ad23939da5569c873032e67"
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
    console.log(char.length);
    if (char.length === 1) {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(char));
    }
  });
};
